require('../css/index.css')
//轮播图宽度自适应，进入网页时加载轮播图第一次动画
;(function() {
  var img = Array.prototype.slice.call(
    document.querySelectorAll('.slide-banner img')
  )
  var one = document.querySelector('.one')

  function setImgWidth() {
    var width = window.document.body.offsetWidth
    img.forEach(function(item) {
      item.style.width = width + 'px'
    })
    one.classList.add('now')
  }
  window.onload = setImgWidth
  window.onresize = setImgWidth
})()
//轮播图 用封装好的运动框架
;(function() {
  var olunbotu = document.getElementById('lunbotu')
  //小圆点的li
  var oCircle = document.getElementById('circle').getElementsByTagName('li')
  //图片的li
  var oul = document.querySelector('.imagelist ul')
  var oli = oul.querySelectorAll('li')

  var time = 1000
  var tween = 'BounceEaseOut'
  var interval = 500
  var lislength = oli.length
  var nowbtn = 0
  function test() {
    var sectionList = Array.prototype.slice.call(
      document.querySelectorAll('.section')
    )
    sectionList.forEach(function(item) {
      item.classList.remove('now')
    })
    sectionList[nowbtn].classList.add('now')
  }

  // var timer = setInterval(oBtnrHandler, 4000)

  // olunbotu.onmouseover = function() {
  //   clearInterval(timer)
  // }
  // olunbotu.onmouseout = function() {
  //   timer = setInterval(oBtnrHandler, 2000)
  // }

  function oBtnrHandler() {
    if (oli[nowbtn].isanimated) return
    animate(oli[nowbtn], { opacity: 0 }, interval)
    nowbtn++
    if (nowbtn > lislength - 1) {
      nowbtn = 0
    }
    animate(oli[nowbtn], { opacity: 1 }, interval, test)
    circlemove()
  }
  for (i = 0; i < oCircle.length; i++) {
    ;(function(i) {
      oCircle[i].onclick = function() {
        if (oli[nowbtn].isanimated) return
        animate(oli[nowbtn], { opacity: 0 }, interval)
        nowbtn = i
        circlemove()
        animate(oli[i], { opacity: 1 }, interval, test)
      }
    })(i)
  }
  function circlemove() {
    for (i = 0; i < oCircle.length; i++) {
      oCircle[i].className = ''
    }
    oCircle[nowbtn].className = 'currentc'
  }

  //b 当前位置
  //c 变化量  (目标-当前)
  //t 当前帧数 用定时器
  //d 总帧数（总次数） 时间/间隔
  //t, b, c, d
  function animate(box, targetJSON, time, tweenstring, callback) {
    if (
      arguments.length < 3 ||
      typeof arguments[0] != 'object' ||
      typeof arguments[1] != 'object' ||
      typeof arguments[2] != 'number'
    ) {
      throw new Error('对不起，你输入的对象有误或者对象类型错误、')
      return
    } else if (arguments.length == 3) {
      tweenstring = 'Linear'
      callback = null
    } else if (arguments.length == 4) {
      switch (typeof arguments[3]) {
        case 'string':
          callback = null
          break
        case 'function':
          callback = arguments[3]
          tweenstring = 'Linear'
          break
        default:
          throw new Error(
            '抱歉，第4个参数要么是缓冲描述词，要么是回调函数，请检查！'
          )
      }
    }

    //浏览器速度兼容，IE浏览器时间隔设置为50，其他浏览器为10.
    if (window.navigator.userAgent.indexOf('MSIE') != -1) {
      var Interval = 50
    } else {
      var Interval = 10
    }

    var count = 0 //计数器，用于计算当前定时器调用次数
    var maxcount = time / Interval //需调用次数

    var variationJSON = {} //变化量信号量对象
    var originalJSON = {} //原始信号量对象

    box.isanimated = true
    for (var k in targetJSON) {
      targetJSON[k] = parseFloat(targetJSON[k])

      originalJSON[k] = parseFloat(fetchComputedStyle(box, k))

      //目标信号量对象
      variationJSON[k] = targetJSON[k] - originalJSON[k]
    }
    // console.log(originalJSON)
    // console.log(variationJSON)
    // console.log(targetJSON)
    var n

    var timer = setInterval(function() {
      for (var k in targetJSON) {
        n = Tween[tweenstring](
          count,
          originalJSON[k],
          variationJSON[k],
          maxcount
        )
        if (k != 'opacity') {
          box.style[k] = n + 'px'
        } else {
          box.style[k] = n
          box.style.fliter = 'alpha(opacity=' + n * 100 + ')'
        }
      }
      count++
      //判断计数器是否达到需调用次数，达到后强行将盒子当前属性值拉回到终点属性值
      if (count == maxcount) {
        for (var k in targetJSON) {
          //判断属性是否为opacity，是的话去掉px，加上fliter属性
          if (k != 'opacity') {
            box.style[k] = targetJSON[k] + 'px'
          } else {
            box.style[k] = targetJSON[k] + 'px'
            box.style.fliter = 'alpha(opacity=' + targetJSON[k] * 100 + ')'
          }
        }
        //达到目的后清除定时器，盒子停止运动
        clearInterval(timer)
        box.isanimated = false
        callback && callback.call(box)
      }
    }, Interval)

    //计算后样式
    function fetchComputedStyle(obj, property) {
      //能力检测
      if (window.getComputedStyle) {
        //现在要把用户输入的property中检测一下是不是驼峰，转为连字符写法
        //强制把用户输入的词儿里面的大写字母，变为小写字母加-
        //paddingLeft  →  padding-left
        property = property.replace(/([A-Z])/g, function(match, $1) {
          return '-' + $1.toLowerCase()
        })

        return window.getComputedStyle(obj)[property]
      } else {
        //IE只认识驼峰，我们要防止用户输入短横，要把短横改为大写字母
        //padding-left  → paddingLeft
        property = property.replace(/\-([a-z])/g, function(match, $1) {
          return $1.toUpperCase()
        })

        return obj.currentStyle[property]
      }
    }

    var Tween = {
      Linear: function(t, b, c, d) {
        return (c * t) / d + b
      },
      //二次的
      QuadEaseIn: function(t, b, c, d) {
        return c * (t /= d) * t + b
      },
      QuadEaseOut: function(t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b
      },
      QuadEaseInOut: function(t, b, c, d) {
        if ((t /= d / 2) < 1) return (c / 2) * t * t + b
        return (-c / 2) * (--t * (t - 2) - 1) + b
      },
      //三次的
      CubicEaseIn: function(t, b, c, d) {
        return c * (t /= d) * t * t + b
      },
      CubicEaseOut: function(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b
      },
      CubicEaseInOut: function(t, b, c, d) {
        if ((t /= d / 2) < 1) return (c / 2) * t * t * t + b
        return (c / 2) * ((t -= 2) * t * t + 2) + b
      },
      //四次的
      QuartEaseIn: function(t, b, c, d) {
        return c * (t /= d) * t * t * t + b
      },
      QuartEaseOut: function(t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b
      },
      QuartEaseInOut: function(t, b, c, d) {
        if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t + b
        return (-c / 2) * ((t -= 2) * t * t * t - 2) + b
      },
      QuartEaseIn: function(t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b
      },
      QuartEaseOut: function(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b
      },
      QuartEaseInOut: function(t, b, c, d) {
        if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t * t + b
        return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b
      },
      //正弦的
      SineEaseIn: function(t, b, c, d) {
        return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b
      },
      SineEaseOut: function(t, b, c, d) {
        return c * Math.sin((t / d) * (Math.PI / 2)) + b
      },
      SineEaseInOut: function(t, b, c, d) {
        return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b
      },
      ExpoEaseIn: function(t, b, c, d) {
        return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b
      },
      ExpoEaseOut: function(t, b, c, d) {
        return t == d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b
      },
      ExpoEaseInOut: function(t, b, c, d) {
        if (t == 0) return b
        if (t == d) return b + c
        if ((t /= d / 2) < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b
        return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b
      },
      CircEaseIn: function(t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
      },
      CircEaseOut: function(t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
      },
      CircEaseInOut: function(t, b, c, d) {
        if ((t /= d / 2) < 1) return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b
        return (c / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
      },
      ElasticEaseIn: function(t, b, c, d, a, p) {
        if (t == 0) return b
        if ((t /= d) == 1) return b + c
        if (!p) p = d * 0.3
        if (!a || a < Math.abs(c)) {
          a = c
          var s = p / 4
        } else var s = (p / (2 * Math.PI)) * Math.asin(c / a)
        return (
          -(
            a *
            Math.pow(2, 10 * (t -= 1)) *
            Math.sin(((t * d - s) * (2 * Math.PI)) / p)
          ) + b
        )
      },
      ElasticEaseOut: function(t, b, c, d, a, p) {
        if (t == 0) return b
        if ((t /= d) == 1) return b + c
        if (!p) p = d * 0.3
        if (!a || a < Math.abs(c)) {
          a = c
          var s = p / 4
        } else var s = (p / (2 * Math.PI)) * Math.asin(c / a)
        return (
          a *
            Math.pow(2, -10 * t) *
            Math.sin(((t * d - s) * (2 * Math.PI)) / p) +
          c +
          b
        )
      },
      ElasticEaseInOut: function(t, b, c, d, a, p) {
        if (t == 0) return b
        if ((t /= d / 2) == 2) return b + c
        if (!p) p = d * (0.3 * 1.5)
        if (!a || a < Math.abs(c)) {
          a = c
          var s = p / 4
        } else var s = (p / (2 * Math.PI)) * Math.asin(c / a)
        if (t < 1)
          return (
            -0.5 *
              (a *
                Math.pow(2, 10 * (t -= 1)) *
                Math.sin(((t * d - s) * (2 * Math.PI)) / p)) +
            b
          )
        return (
          a *
            Math.pow(2, -10 * (t -= 1)) *
            Math.sin(((t * d - s) * (2 * Math.PI)) / p) *
            0.5 +
          c +
          b
        )
      },
      //冲过头系列
      BackEaseIn: function(t, b, c, d, s) {
        if (s == undefined) s = 1.70158
        return c * (t /= d) * t * ((s + 1) * t - s) + b
      },
      BackEaseOut: function(t, b, c, d, s) {
        if (s == undefined) s = 1.70158
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
      },
      BackEaseInOut: function(t, b, c, d, s) {
        if (s == undefined) s = 1.70158
        if ((t /= d / 2) < 1)
          return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b
        return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b
      },
      //弹跳系列
      BounceEaseIn: function(t, b, c, d) {
        return c - Tween.BounceEaseOut(d - t, 0, c, d) + b
      },
      BounceEaseOut: function(t, b, c, d) {
        if ((t /= d) < 1 / 2.75) {
          return c * (7.5625 * t * t) + b
        } else if (t < 2 / 2.75) {
          return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b
        } else if (t < 2.5 / 2.75) {
          return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b
        } else {
          return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b
        }
      },
      BounceEaseInOut: function(t, b, c, d) {
        if (t < d / 2) return Tween.BounceEaseIn(t * 2, 0, c, d) * 0.5 + b
        else return Tween.BounceEaseOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b
      }
    }
  }
})()
//热门商品轮播图 用transition
;(function() {
  var slideBody = document.querySelector('.section-wrapper-list ul')
  var btnPrev = document.querySelector('.slick-prev')
  var btnNext = document.querySelector('.slick-next')
  var slideItem = slideBody.getElementsByTagName('li')
  var slideItemLength = slideItem.length

  var newNode = slideItem[slideItem.length - 2]
  //复制第一张图，放到最后
  slideBody.appendChild(slideItem[0].cloneNode(true))
  //复制最后一张图，放到最前
  slideBody.insertBefore(
    slideItem[slideItem.length - 2].cloneNode(true),
    slideItem[0]
  )

  var index = 1
  var width = 1226
  var interval = 5000
  var flag = false //节流
  // var timer = setInterval(SliceRight, interval)
  // slideBody.onmouseover = function() {
  //   clearInterval(timer)
  // }
  // slideBody.onmouseout = function() {
  //   timer = setInterval(SliceRight, interval)
  // }
  function SliceRight() {
    if (flag) {
      //如果flag为true，说明动画还在进行，直接退出
      return
    }
    flag = true //点击按钮后节流启动
    index++
    addTransition(slideBody)
    setTranslateX(slideBody, index * -width)
  }
  btnNext.onclick = SliceRight
  btnPrev.onclick = function() {
    if (flag) {
      //如果flag为true，说明动画还在进行，直接退出
      return
    }
    flag = true //点击按钮后节流启动
    index--
    addTransition(slideBody)
    setTranslateX(slideBody, index * -width)
  }

  slideBody.addEventListener('transitionend', function(event) {
    flag = false //动画结束，节流关闭
    if (event.target != this) {
      return false //只要轮播图本体的过渡，内部其他元素触发的过渡忽略
    }
    if (index > slideItemLength) {
      index = 1
      removeTransition(slideBody)
      setTranslateX(slideBody, index * -width)
    }
    if (index <= 0) {
      index = slideItemLength
      removeTransition(slideBody)
      setTranslateX(slideBody, index * -width)
    }
  })

  function removeTransition(box) {
    box.style.transition = 'none'
    box.style.webkitTransition = 'none'
  }

  function addTransition(box) {
    box.style.transition = 'transform 1s'
    box.style.webkitTransition = 'transform 1s'
  }
  function setTranslateX(box, x) {
    box.style.transform = 'translateX(' + x + 'px)'
    box.style.webkitTransform = 'translateX(' + x + 'px)'
  }
})()
