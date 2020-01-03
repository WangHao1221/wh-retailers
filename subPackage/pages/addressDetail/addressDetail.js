// pages/addressDetail/addressDetail.js
//获取应用实例
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '', //收货人
    tel: '', //电话
    address: '', //地区
    detailAddress: '', //详细地址
    defaultChecked: false, //默认地址
  },
  nameInput: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  telInput: function (e) {
    this.setData({
      tel: e.detail.value
    })
  },
  // 弹出地区选择
  bindRegionChange: function (e) {
    this.setData({
      address: e.detail.value[0] + "/" + e.detail.value[1] + "/" + e.detail.value[2]
    })
  },
  detailAddressInput: function (e) {
    this.setData({
      detailAddress: e.detail.value
    })
  },
  defaultChange: function (e){
    this.setData({
      defaultChecked: e.detail.value
    })
  },
  // 删除收货地址
  deleAddress: function () {
    const that = this;
    wx.showModal({
      title: '',
      content: '请确认是否删除该地址',
      success: function (res){
        if(res.confirm){
          let _addressList = that.data.addressList;
          _addressList.splice(_addressList.indexOf(that.data.detailItem), 1);
          wx.setStorageSync('addressList', _addressList);
          wx.navigateBack({//返回
            delta: 1
          })
        }
      }
    })
  },
  // 保存收货地址
  toSave: function () {
    let msg = '';
    if(!this.data.name){
      msg = '收货人姓名不能为空';
    }else if(!this.data.tel){
      msg = '收货人电话不能为空';
    } else if (!app.globalData.regexp.phone.test(this.data.tel)){
      msg = '收货人电话号码不正确'
    } else if (!this.data.address) {
      msg = '地区不能为空';
    } else if (!this.data.address) {
      msg = '详细地址不能为空';
    }
    if(msg === ''){
      // 保存信息
      let _addressList = this.data.addressList;
      let detailAddress = {
        name: this.data.name, //收货人
        tel: this.data.tel, //电话
        address: this.data.address, //地区
        detailAddress: this.data.detailAddress, //详细地址
        defaultChecked: this.data.defaultChecked, //默认地址
      };
      // 不论是新增还是修改，如果此次操作项 设为默认地址，则列表其他全都置为false
      if (detailAddress.defaultChecked){
        _addressList.forEach(function(item){
          item.defaultChecked = false;
        });
      }
      if (this.data.detailItem){
        // 修改
        _addressList.splice(_addressList.indexOf(this.data.detailItem),1, detailAddress);
      }else{
        // 新增
        _addressList.push(detailAddress);
      }
      wx.setStorageSync('addressList', _addressList);
      wx.navigateBack({//返回
        delta: 1
      })
    }else{
      wx.showToast({
        icon: 'none',
        title: msg
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '地址详情',
    })
    let _addressList = wx.getStorageSync("addressList") || [];
    this.setData({
      addressList: _addressList
    })
    if (options.detailItemIndex){
      let detailItem = _addressList[options.detailItemIndex];
      this.setData({
        detailItem: detailItem,
        name: detailItem.name, //收货人
        tel: detailItem.tel, //电话
        address: detailItem.address, //地区
        detailAddress: detailItem.detailAddress, //详细地址
        defaultChecked: detailItem.defaultChecked, //默认地址
      })
    }
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