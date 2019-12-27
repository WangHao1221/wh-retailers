// pages/classifyGoods/classifyGoods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isHavaChild: false, //当前分类是否有商品
    goodsList: [], //当前分类商品集合
  },
  // 详情
  toDetail: function (e) {
    let detailItem = JSON.stringify(e.currentTarget.dataset.item);
    wx.navigateTo({
      url: '../details/details?detailItem=' + encodeURIComponent(detailItem)
    })
  },
  // 加入购物车
  addCart: function (e) {
    // 当前商品
    let cuObj = e.currentTarget.dataset.item;
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
        oldItem.count += 1;
        goodsCarData[goodsCarData.indexOf(oldItem)] = oldItem;
      } else {
        cuObj.count = 1;
        cuObj.selected = true;
        // 默认规格
        cuObj.selecteGuige = 1;
        goodsCarData.push(cuObj);
      }
    } else {
      cuObj.count = 1;
      cuObj.selected = true;
      // 默认规格
      cuObj.selecteGuige = 1;
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
    } catch (e) {
      //弹框提示
      wx.showToast({
        title: '存储本地缓存数据失败，请检查相关配置，是否联网等',
        icon: 'none',
        duration: 2000
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var details = decodeURIComponent(options.detailItem);
    let currentItem = JSON.parse(details);
    this.setData({
      isHavaChild: currentItem.ishaveChild,
      goodsList: currentItem.children
    })
    wx.setNavigationBarTitle({
      title: currentItem.nameGood
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