// pages/order/order.js
const API = require('../../API/API.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressIsShow: false, //默认地址
    goods: [], //商品列表
  },
  // 计算金额
  totalPrice: function () {
    let list = this.data.goods;
    let total = 0;
    let totalCount = 0;
    // 循环列表得到每个数据
    for (let i = 0; i < list.length; i++) {
      // 判断选中计算价格
      if (list[i].selected) {
        // 所有价格加起来 count_money
        total += list[i].count * list[i].npriceGood;
        // 所有的件数
        totalCount += list[i].count;
      }
    }
    // 最后赋值到data中渲染到页面
    this.setData({
      totalPrice: total.toFixed(2),
      totalCount: totalCount
    });
  },
  // 添加收货地址
  choseAddress: function (){
    wx.navigateTo({
      url: '../addressList/addressList',
    })
  },
  // 提交订单
  toPay: function () {
    // 先判断是否有收货地址
    if (!this.data.addressIsShow){
      wx.showModal({
        title: '',
        content: '请先添加收货地址',
        showCancel: false
      })
    }else{
      console.log('可以正常下单...');
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '确认订单',
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
    /* *先判断是否从地址列表选择地址，如果有选择，则显示所选择的地址
    * 如果没有选择：则判断地址列表是否有地址（如果有，再判断是否有默认地址，有则显示默认地址；否则显示数组中的第一个作为地址显示；如果数组为空则显示没有地址）
    */
    let _addressIsShow = false;
    let _showAddressItem = {};
    if (this.data.selectedAddressItem){
      _addressIsShow = true;
      _showAddressItem = this.data.selectedAddressItem
    }else{
      let addressData = wx.getStorageSync("addressList") || [];
      if (addressData.length > 0) {
        _addressIsShow = true;
        let hasDefault = false;
        for (let item of addressData) {
          if (item.defaultChecked) {
            hasDefault = true;
            _showAddressItem = item;
            break;
          }
        }
        if (!hasDefault) {
          _showAddressItem = addressData[0];
        }
      }
    }
    this.setData({
      addressIsShow: _addressIsShow,
      showAddressItem: _showAddressItem,
      goods: wx.getStorageSync('orderinfo')
    })
    this.totalPrice();
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