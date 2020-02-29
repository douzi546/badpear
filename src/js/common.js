//顶栏动画，滚动跟随
require('../css/common.css')
;(function() {
  var siteHeader = document.querySelector('.site-header')
  function setFix(box, callback) {
    if (
      document.documentElement.scrollHeight - siteHeader.offsetHeight <
      document.documentElement.offsetHeight +
        document.querySelector('.user-header').offsetHeight
    ) {
      return false
    }
    box.classList.add('top-fix')
    siteHeader.style.transition = '1s all ease-out'
    callback()
  }
  function gengsui() {
    siteHeader.style.transform = 'translateY(40px)'
  }
  window.addEventListener('scroll', function() {
    var scrollLength = document.documentElement.scrollTop
    var headerHeight = document.querySelector('.user-header').offsetHeight

    var button = false
    if (scrollLength > headerHeight) {
      button = true
    }
    if (button) {
      setFix(siteHeader, gengsui)
    } else {
      siteHeader.classList.remove('top-fix')
      siteHeader.style.transition = 'none'
      siteHeader.style.transform = 'none'
    }
  })
})()
//搜索框
;(function() {
  var input = document.querySelector('.search input')
  var xiaomi = document.querySelector('.xiaomi')
  function fn(ev) {
    var event = ev || event
    if (event.keyCode == 13) {
      if (window.location.href.indexOf('list.html') != -1) {
        window.location.href = `./list.html?keyword=${input.value}`
      } else {
        window.open(`./list.html?keyword=${input.value}`, '_blank')
      }
    }
  }
  if (input) {
    input.addEventListener('focus', function() {
      input.placeholder = '请输入要搜索的商品'
      xiaomi.style.display = 'none'
      console.log(1)
      document.addEventListener('keydown', fn, false)
    })
    input.addEventListener('blur', function() {
      input.value = ''
      input.placeholder = ''
      xiaomi.style.display = 'block'
      document.removeEventListener('keydown', fn, false)
    })
  }
})()
//tips提示框
;(function() {
  var TipTag = 'a,img'
  var TipClass = 'tip,test'

  var altText
  var elementText

  var elementParent
  var tipid

  init = function() {
    //找到页面中全部有tip类的a或者img
    var elementList = TipTag.split(',')
    for (var i = 0; i < elementList.length; i++) {
      var elements = document.getElementsByTagName(elementList[i])
      if (elements) {
        for (j = 0; j < elements.length; j++) {
          if (TipClass != '') {
            var TipClassList = TipClass.split(',')
            var elClass = elements[j].className
            for (var h = 0; h < TipClassList.length; h++) {
              if (elClass.match(TipClassList[h])) {
                tipize(elements[j])
              }
            }
          } else {
            tipize(elements[j])
          }
        }
      }
    }
  }

  tipize = function(element) {
    altText = element.alt && element.getAttribute('alt') != '' ? true : false
    var elementText =
      altText == true
        ? element.getAttribute('alt')
        : element.getAttribute('title')

    element.onmouseover = function() {
      build(element, elementText)
    }
    element.onmouseout = function() {
      hide(element, elementText)
    }
  }
  build = function(element, elementText) {
    if (element.title) element.title = ''
    if (altText == true) element.alt = ''

    elementParent = element.parentNode
    elementParent.style.position = 'relative'

    var tipContainer = document.createElement('div')
    tipContainer.setAttribute('id', 'tip')
    elementParent.appendChild(tipContainer)

    var tipBody = document.createElement('div')
    tipBody.setAttribute('id', 'tipbody')
    tipContainer.appendChild(tipBody)

    var tipdelta = document.createElement('div')
    tipdelta.setAttribute('id', 'tipdelta')

    tipContainer.appendChild(tipdelta)

    tipid = document.getElementById('tip')
    document.getElementById('tipbody').innerHTML = elementText
    var tipPosition = element.getAttribute('class').split(' ')[1]
    var tipColor = element.getAttribute('class').split(' ')[2]

    if (tipColor == 'tip-white') {
      tipid.style.backgroundColor = 'white'
      tipid.style.color = 'black'
      tipdelta.style.borderRightColor = 'white'
      tipdelta.style.borderBottomColor = 'white'
    }
    if (tipPosition == 'tip-right') {
      tipdelta.setAttribute('class', 'tip-right')
      tipid.style.left = element.offsetWidth + 10 + 'px'
      tipid.style.top = element.offsetHeight / 2 - 15 + 'px'
    } else {
      tipdelta.setAttribute('class', 'tip-bottom')
      tipid.style.left = element.offsetWidth / 2 + 10 + 'px'
      tipid.style.top = element.offsetHeight + 10 + 'px'
      tipid.style.transform = 'translate(-50%)'
    }
    tipid.style.transition = 'width,height .3s'
    tipid.style.height = '40px'
    tipid.style.width = '80px'
  }
  hide = function(element) {
    document.getElementById('tipbody').innerHTML = ''
    elementParent.removeChild(tipid)
    altText = false
  }

  if (window.addEventListener) window.addEventListener('load', init, false)
})()
//返回顶部
;(function() {
  var goToTop = document.querySelector('.gotop')
  window.onscroll = function() {
    var WinHeight = window.document.documentElement.clientHeight
    var scrollHeight = document.documentElement.scrollTop
    if (scrollHeight >= WinHeight - 200) {
      goToTop.style.transform = 'translateX(0px)'
    } else {
      goToTop.style.transform = 'translateX(99px)'
    }
  }
  goToTop.onclick = function() {
    var currentScroll = document.documentElement.scrollTop
    var time = 500
    var interval = 5
    var maxCount = time / interval
    var step = currentScroll / maxCount
    var count = 0

    var timer = setInterval(function() {
      currentScroll -= step
      document.documentElement.scrollTop = currentScroll
      count++
      if (count == maxCount) {
        clearInterval(timer)
      }
    }, interval)
  }
})()
//footer固定
;(function() {
  function footerPosition() {
    var footer = document.querySelector('footer')
    footer.classList.remove('fixed-bottom')
    var contentHeight = document.documentElement.scrollHeight
    var winHeight = window.innerHeight
    if (contentHeight <= winHeight) {
      footer.classList.add('fixed-bottom')
    } else {
      footer.classList.remove('fixed-bottom')
    }
  }
  window.onload = footerPosition
})()
