//index.js
const API = require('../../API/API.js');
//获取应用实例
const app = getApp()

Page({
  data: {
    goods: [], //商品列表
  },
  //事件处理函数
  toDetail: function() {
    wx.navigateTo({
      // url: '../details/details'
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
    if(goodsCarData.length > 0){
      let isOld = false;
      let oldItem = {};
      for(let i = 0; i < goodsCarData.length; i++){
        oldItem = goodsCarData[i];
        if(oldItem.id === cuObj.id){
          isOld = true;
          break;
        }
      }
      if(isOld){
        // 点击的商品在购物车已存在
        oldItem.count += 1;
        goodsCarData[goodsCarData.indexOf(oldItem)] = oldItem;
      }else{
        cuObj.count = 1;
        cuObj.selected = true;
        goodsCarData.push(cuObj);
      }
    }else{
      cuObj.count = 1;
      cuObj.selected = true;
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
  onLoad: function () {
  },
  onShow: function () {
    this.setData({
      goods: API.goods
    })
  }
})
