require('../css/details.css')
;(function() {
  var proId = getQueryVariable('productId')
  console.log(proId)
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
  // $.ajax({
  //   url:
  //     'http://106.54.118.86:7300/mock/5e5896b6e223352bdc59b09f/badpear/proId',
  //   data: {
  //     proId: proId
  //   },
  //   success: function(info) {
  //     console.log(info)
  //   }
  // })
  $.ajax({
    // url: '/mock/db.json',
    url:
      'http://106.54.118.86:7300/mock/5e5896b6e223352bdc59b09f/badpear/proId',
    data: {
      proId: proId
    },
    dataType: 'json',
    // 成功的回调函数
    success: function(info) {
      var product = info.data.proMsg
      var thumbnail = product.thumbnail
      var html = `
        <div class="intro-wrap w1226">
          <div class="row">
            <div class="page-img-wrap">
              <div class="main-img-con">
                <img src="http://badpear-1300271589.cos.ap-shanghai.myqcloud.com${thumbnail[0]}" alt="" />
              </div>
              <div class="page-img-list">`

      thumbnail.forEach(function(item) {
        html += `<a class="page-img-item" href="javascript:;">
                     <img src="http://badpear-1300271589.cos.ap-shanghai.myqcloud.com${item}" alt="" />
                   </a>`
      })
      html += `
              </div>
            </div>
            <div class="page-info-wrap">
              <h4>
                ${product.title}
              </h4>
              <div class="subtitle">
                <p>
                ${product.description}
                </p>
              </div>
              <div class="rating-style info-item">`
      for (var h = 0; h < product.rate; h++) {
        html += `<span class="star active"></span> `
      }
      for (var s = 0; s < 5 - product.rate; s++) {
        html += `<span class="star"></span>`
      }
      html += `
              </div>
              <div class="price info-item">
                <p>价格: <span>￥${product.price}</span></p>
              </div>
              <div class="stocks info-item">
                <span>库存:</span>
                <span>${product.shock}</span>
              </div>
              <div class="count info-item">
                <div class="count-box">
                  <span class="count-down">-</span>
                  <input class="count-num type="text" value="1" />
                  <span class="count-up">+</span>
                </div>
              </div>
              <div class="add-cart info-item">
                <a href="#" class="add-cart-btn">
                  <i class="fa fa-shopping-basket"></i>
                  <span>加入购物车</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="detail-wrap w1226">
          <div class="detail-tab-con">
            <ul class="tab-item">
              <li class="tab-item">商品详情</li>
            </ul>
          </div>
          <div class="detail-con">
            <p><br /></p>
            `
      product.detail.forEach(function(item) {
        html += `<p>
        <img src="http://badpear-1300271589.cos.ap-shanghai.myqcloud.com${item}" alt="" />
      </p>`
      })

      html += `
          </div>
        </div>
      `

      var productDetailBox = document.querySelector('#detail-page')
      productDetailBox.innerHTML = html

      var pageImgItem = Array.prototype.slice.call(
        document.querySelectorAll('.page-img-item > img')
      )
      var mainImgCon = document.querySelector('.main-img-con > img')
      pageImgItem.forEach(function(item) {
        item.onmouseover = function() {
          mainImgCon.src = item.src
        }
      })
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
