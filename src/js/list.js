require('../css/list.css')
;(function() {
  var $ = {
    ajax: function(options) {
      // 如果 options 没有传, 或者 options 传的不是一个对象, 直接 return
      if (!options || typeof options != 'object') {
        return
      }
      // 如果传的是 post, 就按post处理
      // 只要传的不是 post, 按 get 处理, 效果: 默认 get
      var type = options.type === 'post' ? 'post' : 'get'

      // url 必须传
      var url = options.url
      if (!url) {
        return
      }
      // 只要传的不是 false, 就按 true 处理, 效果: 默认true
      var async = options.async === false ? false : true

      // 传递的参数
      var data = options.data
      // 需要一个方法, 将 data 对象转换成 params 字符串
      // parse 方法, 将 对象 转成 username=pp&password=123456 的格式

      // $.ajax() 方法调用模式, 谁调用 this 就指向谁
      // this 就指向 $
      var params = this.parse(data)

      var dataType = options.dataType

      var success = options.success // 成功的函数
      var error = options.error // 失败的函数

      // 发送请求
      var xhr = new XMLHttpRequest()
      // 遵循 http 协议
      // 1. 请求行, get请求需要拼接上参数  06-get.php ? username=pp
      if (type === 'get') {
        url = url + '?' + params

        params = null // 如果参数已经拼接在地址栏了, 置为 null
      }
      xhr.open(type, url, async)

      // 2. 请求头, post请求需要设置请求头
      if (type === 'post') {
        xhr.setRequestHeader(
          'content-type',
          'application/x-www-form-urlencoded'
        )
      }

      // 3. 请求体, post请求需要传参, get请求传 null
      xhr.send(params)

      // 添加监听, 处理响应
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            // 响应成功
            // 根据响应的类型不同, 需要做不同的处理 xml/json/text
            var result = null
            if (dataType === 'xml') {
              result = xhr.responseXML
            } else if (dataType === 'json') {
              // 如果是 json字符串, 将字符串解析成 数组或对象
              result = JSON.parse(xhr.responseText)
            } else {
              result = xhr.responseText
            }
            success && success(result)
          } else {
            // 响应失败
            error && error(xhr.responseText)
          }
        }
      }
    },
    parse: function(obj) {
      if (!obj || typeof obj != 'object') {
        return null
      }
      var arr = []
      // 遍历对象
      for (var k in obj) {
        arr.push(k + '=' + obj[k])
      }
      // [ "username=pp", "password=123456" ]
      return arr.join('&')
    }
  }
  var keyword = getQueryVariable('keyword')
  document.querySelector('.search-input').value = decodeURI(keyword)
  document.querySelector('.xiaomi').style.display = 'none'

  var pageSize = 12
  var currentPage = 1

  var pagination = document.querySelector('#pagination')

  var sortByUp = document.querySelector('.product-list-title a.up')
  var sortByDown = document.querySelector('.product-list-title a.down')
  var sortBySynthesis = document.querySelector(
    '.product-list-title a.synthesis'
  )
  // $.ajax({
  //   url:
  //     'http://106.54.118.86:7300/mock/5e5896b6e223352bdc59b09f/badpear/query',
  //   data: {
  //     keyword: '手机',
  //     size: 12,
  //     page: 2
  //   },
  //   success: function(info) {
  //     console.log(info)
  //   }
  // })
  $.ajax({
    // url: '/mock/db.json',
    // url:
    //   'http://106.54.118.86:7300/mock/5e42acfd7b1ef5069aae3d8b/badpear/productData',
    url:
      'http://106.54.118.86:7300/mock/5e5896b6e223352bdc59b09f/badpear/proList',

    dataType: 'json',
    // 成功的回调函数
    data: {
      keyword: keyword,
      size: pageSize,
      page: currentPage
    },
    success: function(info) {
      var productData = info.data.keyword.keywordData
      console.log(productData)
      sortByUp.onclick = function() {
        sortByDown.classList.remove('current')
        sortBySynthesis.classList.remove('current')
        sortByUp.classList.add('current')
        sortData(productData, 'price', 'up')
        render(productData)
        document.querySelector('.firstPage').classList.add('disabled')
        document.querySelector('.currentPage').classList.remove('currentPage')
        document
          .querySelector('span[data-value="1"]')
          .classList.add('currentPage')
      }
      sortByDown.onclick = function() {
        sortByUp.classList.remove('current')
        sortBySynthesis.classList.remove('current')
        sortByDown.classList.add('current')
        sortData(productData, 'price', 'down')
        render(productData)
      }
      sortBySynthesis.onclick = function() {
        sortByDown.classList.remove('current')
        sortByUp.classList.remove('current')
        sortBySynthesis.classList.add('current')
        sortData(productData, 'rate', 'down')
        render(productData)
      }
      sortData(productData, 'rate', 'down')
      render(productData)

      var total = info.data.keyword.total
      var totalPage = Math.ceil(total / pageSize)
      if (totalPage > 1) {
        pagePlug(pagination, pageSize, function(currentPage) {
          $.ajax({
            url:
              'http://106.54.118.86:7300/mock/5e5896b6e223352bdc59b09f/badpear/proList',

            dataType: 'json',
            // 成功的回调函数
            data: {
              keyword: keyword,
              size: pageSize,
              page: currentPage
            },
            success: function(info) {
              render(info.data.keyword.keywordData)
              document.documentElement.scrollTop = 0
            }
          })
        })
      }

      //分页
      function pagePlug(box, pageSize, callback) {
        var pagehtml = ''
        if (currentPage == 1) {
          pagehtml += `<span class="disabled firstPage"><</span>`
        } else {
          pagehtml += `<span class="firstPage"><</span>`
        }
        for (var i = 1; i <= totalPage; i++) {
          if (i == currentPage) {
            pagehtml += `<span class="currentPage" data-value = ${i}>${i}</span>`
          } else {
            pagehtml += `<span data-value = ${i}>${i}</span>`
          }
        }
        if (currentPage == totalPage) {
          pagehtml += `<span class="disabled lastPage" >></span>`
        } else {
          pagehtml += `<span class="lastPage" >></span>`
        }

        pagination.innerHTML = pagehtml

        var pageButton = Array.from(
          document.querySelectorAll('#pagination span')
        )

        var firstPage = document.querySelector('.firstPage')
        var lastPage = document.querySelector('.lastPage')
        for (var i = 0; i < pageButton.length; i++) {
          ;(function(i) {
            if (i != 0 && i != pageButton.length - 1) {
              pageButton[i].onclick = function() {
                if (pageButton[i].getAttribute('class') == 'currentPage') {
                  return
                }
                document
                  .querySelector('.currentPage')
                  .classList.remove('currentPage')
                currentPage = pageButton[i].dataset.value
                pageButton[i].classList.add('currentPage')
                if (currentPage == 1) {
                  firstPage.classList.add('disabled')
                  lastPage.classList.remove('disabled')
                } else if (currentPage == totalPage) {
                  firstPage.classList.remove('disabled')
                  lastPage.classList.add('disabled')
                } else {
                  firstPage.classList.remove('disabled')
                  lastPage.classList.remove('disabled')
                }
                callback(currentPage)
              }
            }
          })(i)
        }

        firstPage.onclick = function() {
          if (firstPage.getAttribute('class').indexOf('disabled') != -1) {
            return
          }
          currentPage = 1
          document.querySelector('.currentPage').classList.remove('currentPage')
          pageButton[1].classList.add('currentPage')
          firstPage.classList.add('disabled')
          callback(currentPage)
        }
        lastPage.onclick = function() {
          if (lastPage.getAttribute('class').indexOf('disabled') != -1) {
            return
          }
          currentPage = totalPage
          document.querySelector('.currentPage').classList.remove('currentPage')
          pageButton[totalPage].classList.add('currentPage')
          lastPage.classList.add('disabled')
          callback(currentPage)
        }
      }
      //商品渲染
      function render(value) {
        var html = ''
        for (var i = 0; i < value.length; i++) {
          var title = keywordStyle(value[i].title, 'span', keyword)
          html += `<div class="product-box-item">`
          html += `<div class="item-thumb">
        <a href="./details.html?productId=${value[i].id}" target="_blank">
          <img src="http://badpear-1300271589.cos.ap-shanghai.myqcloud.com${value[i].thumbnail[0]}" />
        </a>
      </div>
      <div class="item-detail">
        <h3 class="detail-title">
          <a href="./details.html?productId=${value[i].id}" target="_blank"
            >${title}</a
          >
        </h3>
        <div class="item-rating">`
          for (var h = 0; h < value[i].rate; h++) {
            html += `<span class="star active"></span> `
          }
          for (var s = 0; s < 5 - value[i].rate; s++) {
            html += `<span class="star"></span> `
          }
          html += `
        </div>
        <div class="item-price">￥${value[i].price}</div>
      </div>`
          html += `</div>`
        }
        var productListBox = document.querySelector('#productListBox')
        productListBox.innerHTML = html
      }
      //商品排序
      function sortData(arr, field, uod) {
        arr.sort(function sortId(a, b) {
          if (uod === 'up') {
            return a[field] - b[field]
          } else if (uod === 'down') {
            return b[field] - a[field]
          }
        })
      }
      //商品关键词变色
      function keywordStyle(str, tag, keyword) {
        keyword = decodeURI(keyword)
        var reg = RegExp(keyword, 'g')
        return str.replace(reg, '<' + tag + '>' + keyword + '</' + tag + '>')
      }
    }
  })
  function getQueryVariable(variable) {
    var query = window.location.search.substring(1)
    var vars = query.split('&')
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=')
      if (pair[0] == variable) {
        return pair[1]
      }
    }
    return false
  }
})()
