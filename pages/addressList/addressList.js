// pages/addressList/addressList.js
const API = require('../../API/API.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '收货地址',
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
      addressData: wx.getStorageSync("addressList") || []
    });
  },
  //  选择当前地址
  chosedAddress: function (e) {
    let currenAddress = this.data.addressData[e.currentTarget.dataset.index];
    let pages = getCurrentPages(); //获取当前页面js里面的pages里的所有信息。
    let prevPage = pages[pages.length - 2];
    //prevPage 是获取上一个页面的js里面的pages的所有信息。-1 当前页面 -2 是上一个页面，-3是上上个页面以此类推。

    prevPage.setData({  // 将我们想要传递的参数在这里直接setData。上个页面就会执行这里的操作。
      selectedAddressItem: currenAddress
    })
    wx.navigateBack({//返回
      delta: 1
    })
  },
  // 添加
  toAddAddress: function () {
    wx.navigateTo({
      url: '../addressDetail/addressDetail',
    })
  },
  // 编辑
  editAddress: function (e){
    let detailItemIndex = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../addressDetail/addressDetail?detailItemIndex=' + detailItemIndex
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