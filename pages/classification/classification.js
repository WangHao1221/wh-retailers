// pages/classification/classification.js
const API = require('../../API/API.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curNav: 10, //左侧菜单选中第几个nav,取对应的id(默认左侧第一个选中)
    curIndex: 0, //左侧第一个nav对应的右侧列表是否有数据
  },
  //事件处理函数  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  },
  // 商品详情
  toDetail: function (e) {
    let detailItem = JSON.stringify(e.currentTarget.dataset.item);
    wx.navigateTo({
      url: '../../subPackage/pages/classifyGoods/classifyGoods?detailItem=' + encodeURIComponent(detailItem),
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '分类'
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
    this.setData({
      classificationArray: API.cateItems
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