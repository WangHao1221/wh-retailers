// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true, //是否显示面板指示点
    autoplay: false, //是否自动切换
    duration: 1000, //  滑动动画时长1s
    hiddenModalStatus: true, //底部弹出框
    currentCount: 1, //弹出框中默认的该商品数量
    currentIndex: 0, //详情/客服对应的tab
  },
  videoErrorCallback: function (e) {
    console.log('视频错误信息:')
    wx.showToast({
      icon: 'none',
      title: e.detail.errMsg
    })
  },
  //预览图片
  previewImage: function (e) {
    var current = e.target.dataset.src;
    let urls = [];
    this.data.detailItem.imgUrls.forEach((item,index)=>{
      urls[index] = item.url
    })
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: urls // 需要预览的图片http链接列表  
    })
  },
  //用户点击tab时调用
  titleClick: function (e) {
      this.setData({
        //拿到当前索引并动态改变
        currentIndex: e.currentTarget.dataset.idx
      })
  },
  // 点击了购物车
  toShopCart: function () {
    wx.switchTab({
      url: '../ShoppingCart/ShoppingCart',
    })
  },
  // 加入购物车
  addTo: function () {
    this.setData({
      isBuy: false
    })
    this.showModal();
  },
  // 立即购买
  buyNow: function () {
    this.setData({
      isBuy: true
    })    
    this.showModal();
  },
  // 对话框 确定按钮 事件
  isSure: function () {
    if (!this.data.guigeId){
      wx.showToast({
        icon: 'none',
        title: '请选择规格'
      })
      return;
    }
    if (this.data.isBuy){
      // 携带订单信息生成订单
      let orderItem = Object.assign({}, this.data.detailItem);
      orderItem.count = this.data.currentCount;
      orderItem.selected = true;
      let nlist = [];
      nlist.push(orderItem);
      wx.setStorageSync('orderinfo', nlist)//将订单的信息缓存
      wx.navigateTo({
        url: '../order/order'
      })
    }else{
      this.addCart(this.data.currentCount);
    }
  },
  // 加入购物车
  addCart: function (currentCount) {
    const that = this;
    // 当前商品
    let cuObj = this.data.detailItem;
    /**  加入购物车逻辑
    *遍历购物车数据，看看该商品是否已经加入购物车，
    *如果是，则数量 加1
    *否则，加入该商品
    */
    let goodsCarData = wx.getStorageSync("goodsCar") || [];
    if (goodsCarData.length > 0) {
      let isOld = false;
      let oldItem = {};
      for (let i = 0; i < goodsCarData.length; i++) {
        oldItem = goodsCarData[i];
        if (oldItem.id === cuObj.id) {
          isOld = true;
          break;
        }
      }
      if (isOld) {
        // 点击的商品在购物车已存在
        // 商品规格是否相同
        if (that.data.guigeId !== oldItem.selecteGuige){
          // 规格不同
          cuObj.count = currentCount;
          cuObj.selected = true;
          // 所选规格
          cuObj.selecteGuige = that.data.guigeId;
          goodsCarData.push(cuObj);
        }else{ //规格相同
          oldItem.count += currentCount;
          goodsCarData[goodsCarData.indexOf(oldItem)] = oldItem;
        }
      } else {
        cuObj.count = currentCount;
        cuObj.selected = true;
        // 所选规格
        cuObj.selecteGuige = that.data.guigeId;
        goodsCarData.push(cuObj);
      }
    } else {
      cuObj.count = currentCount;
      cuObj.selected = true;
      // 所选规格
      cuObj.selecteGuige = this.data.guigeId;
      goodsCarData.push(cuObj);
    }
    try {
      wx.setStorageSync('goodsCar', goodsCarData);
      //弹框提示
      wx.showToast({
        title: '商品已成功加入购物车',
        icon: 'none',
        duration: 2000
      });
      // 更新购物车数量
      this.setData({
        cartCount: that.data.cartCount += that.data.currentCount
      })
      this.hideModal();
    } catch (e) {
      //弹框提示
      wx.showToast({
        title: '存储本地缓存数据失败，请检查相关配置，是否联网等',
        icon: 'none',
        duration: 2000
      });
    }
  },
  // 规格选择
  choseGuige: function (e) {
    this.setData({
      guigeId: e.currentTarget.dataset.item.guigeId
    })
  },
  //显示对话框
  showModal: function () {
    // 显示遮罩层
    this.setData({
      hiddenModalStatus: false
    })
    // 动画
    const that = this;
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear"
    })
    this.animation = animation
    setTimeout(function () {
      that.fadeIn();
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModal: function () {
    const that = this;
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear"
    })
    this.animation = animation
    that.fadeDown();
    setTimeout(function () {
      // 隐藏遮罩层
      this.setData({
        hiddenModalStatus: true
      })
    }.bind(this), 200)
  },
  // 动画出现
  fadeIn: function () {
    this.animation.translateY(0).step()
    this.setData({
      animationData: this.animation.export()
    })
  },
  // 隐藏动画
  fadeDown: function () {
    this.animation.translateY(450).step()
    this.setData({
      animationData: this.animation.export(),
    })
  },
  //减少数量
  subNum: function (e) {
    let num = this.data.currentCount;
    // 点击递减
    num = num - 1;
    if (num <= 0) {
      wx.showToast({
        icon: 'none',
        title: '受不了了，宝贝不能再减少了额',
      })
    } else {
      // 重新渲染 ---显示新的数量
      this.setData({
        currentCount: num
      });
    }
  },
  //增加数量
  addNum: function (e) {
    let num = this.data.currentCount;
    // 点击递增
    num = num + 1;
    // 重新渲染 ---显示新的数量
    this.setData({
      currentCount: num
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '商品详情'
    })
    var details = decodeURIComponent(options.detailItem);
    let currentItem = JSON.parse(details);
    console.log(currentItem);
    this.setData({
      detailItem: currentItem
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let goodsCar = wx.getStorageSync("goodsCar") //从缓存获取
    let cartCount = 0;
    goodsCar.forEach(item => {
      cartCount += item.count;
    })
    this.setData({
      isEdit: true,
      cartCount: cartCount
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})