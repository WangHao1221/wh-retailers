// pages/ShoppingCart/ShoppingCart.js
const API = require('../../API/API.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    carisShow: true, //购物车是否有商品
    isCheckedAll: false, //全选状态设置
    isEdit: true, //是否编辑状态
    goodsCar: [], //用来接收接口返回数据
    delBtnWidth: 150//删除按钮宽度单位（rpx）
  },
  // 手指移动事件监听
  touchS: function (e) {
    // 开始触摸时 重置所有删除
    this.data.goodsCar.forEach(function (v, i) {
      if (v.isCanDelete)//只操作为true的
        v.isCanDelete = false;
    })
    this.setData({
      startX: e.touches[0].clientX,
      goodsCar: this.data.goodsCar
    })
  },
  //触摸时触发，手指在屏幕上每移动一次，触发一次
  touchM: function (e) {
    var that = this
    if (e.touches.length == 1) {
      //记录触摸点位置的X坐标
      var moveX = e.touches[0].clientX;
      //计算手指起始点的X坐标与当前触摸点的X坐标的差值
      var disX = that.data.startX - moveX;
      //delBtnWidth 为右侧按钮区域的宽度
      var delBtnWidth = that.data.delBtnWidth;
      //获取手指触摸的是哪一个item
      var index = e.currentTarget.dataset.index;
      var list = that.data.goodsCar;
      if (disX == 0 || disX < 0) {//如果移动距离小于等于0，文本层位置不变
        list[index].isCanDelete = false;
      } else if (disX > 0) {//移动距离大于0，文本层left值等于手指移动距离
        if (disX >= delBtnWidth) {
          //将拼接好的样式设置到当前item中
          list[index].isCanDelete = true;
        }
      }
      //更新列表的状态
      this.setData({
        goodsCar: list
      });
    }
  },
  // 商品详情
  toDetail: function (e) {
    console.log("商品详情页");
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '购物车'
    })
  },
  // 是否有商品未被选中
  isNoCheckedOne: function (list){
    let isCheck = true;
    for (let i = 0; i < list.length; i++) {
      if (!list[i].selected) {
        isCheck = false; //有商品未被选中
        break;
      }
    }
    return isCheck;
  },
  // 是否有商品被选中
  isCheckOne: function (list) {
    let isCheck = false;
    for(let i=0;i<list.length;i++){
      if (list[i].selected){
       isCheck = true;
        break;
      }
    }
    return isCheck;
  },
  // 编辑事件
  editGood: function () {
    this.setData({
      isEdit: false //是否编辑状态
    })
  },
  // 完成事件
  editComplete: function () {
    this.setData({
      isEdit: true //是否编辑状态
    })
  },
  // 全选事件
  checkAll: function () { 
    // 获取全选中态
    let isCheckAll = this.data.isCheckedAll;
    isCheckAll = !isCheckAll;
    let list = this.data.goodsCar;
    for (var i = 0; i < list.length;i++){
      list[i].selected = isCheckAll;
    }
    this.setData({
      isCheckedAll: isCheckAll,
      goodsCar: list
    })
    this.totalPrice();
  },
  //单选事件
  selectShop: function (e) {
    let _this = this;
    // 获取当前选项的索引
    let index = e.currentTarget.dataset.index;
    // 获取商品列表
    let list = this.data.goodsCar;
    // 操作当前选项
    list[index].selected = !list[index].selected;
    this.setData({
      goodsCar: list,
      isCheckedAll: this.isNoCheckedOne(list)
    })
    this.totalPrice();
  },
  //减少数量
  subNum: function (e) {
    // 获取点击的索引
    const index = e.currentTarget.dataset.index;
    // 获取商品数据
    let list = this.data.goodsCar;
    // 获取商品数量
    let num = list[index].count;
    // 点击递减
    num = num - 1;
    if(num <= 0){
      wx.showToast({
        icon: 'none',
        title: '受不了了，宝贝不能再减少了额',
      })
    }else{
      list[index].count = num;
      // 重新渲染 ---显示新的数量
      this.setData({
        goodsCar: list
      });
      this.totalPrice();
    }
  },
  //增加数量
  addNum: function (e) {
    // 获取点击的索引
    const index = e.currentTarget.dataset.index;
    // 获取商品数据
    let list = this.data.goodsCar;
    // 获取商品数量
    let num = list[index].count;
    // 点击递增
    num = num + 1;
    list[index].count = num;
    // 重新渲染 ---显示新的数量
    this.setData({
      goodsCar: list
    });
    this.totalPrice();
  },
  // 计算金额
  totalPrice: function () {
    let list = this.data.goodsCar;
    let total = 0;
    // 循环列表得到每个数据
    for (let i = 0; i < list.length; i++) {
      // 判断选中计算价格
      if (list[i].selected) {
        // 所有价格加起来 count_money
        total += list[i].count * list[i].npriceGood;
      }
    }
    // 最后赋值到data中渲染到页面
    this.setData({
      goodsCar: list,
      totalPrice: total.toFixed(2)
    });
    // 缓存操作
    wx.setStorageSync('goodsCar', list);
  },
  // 批量删除
  deteleMore: function () {
    var _this = this;
    let list = this.data.goodsCar;
    if (this.isCheckOne(list)){
      wx.showModal({
        title: '提示',
        content: '确认删除这些商品吗',
        success: function (res) {
          if (res.confirm) {
            for (let i = list.length - 1; i >= 0; i--) {
              if (list[i].selected) {
                list.splice(i, 1);
                _this.setData({
                  goodsCar: list
                });
                // 如果数据为空
                if (!list.length) {
                  _this.setData({
                    carisShow: true
                  });
                } else {
                  // 调用金额渲染数据
                  _this.totalPrice();
                }
              } else {
              }
            }
          }
        }
      })
    }else{
      wx.showToast({
        icon: 'none',
        title: '您还没有选择宝贝额',
      })
    }
  },
  //删除单个商品
  deteleGood: function (e) {
    var that = this;
    // 获取索引
    const index = e.currentTarget.dataset.index;
    // 获取商品列表数据
    let list = this.data.goodsCar;
    wx.showModal({
      title: '提示',
      content: '确认删除吗',
      success: function (res) {
        if (res.confirm) {
          // 删除索引从1
          list.splice(index, 1);
          // 页面渲染数据
          that.setData({
            goodsCar: list
          });
          // 如果数据为空
          if (!list.length) {
            that.setData({
              carisShow: true
            });
          } else {
            // 调用金额渲染数据
            that.totalPrice();
          }
        } else {
        }
      },
      fail: function (res) {
      }
    })
  },
  // 结算生成订单
  goOrder: function () {
    let _this = this;
    if(this.isCheckOne(this.data.goodsCar)){
      wx.showModal({
        title: '提示',
        content: '确认生成订单？',
        success: function (res) {
          if (res.confirm) {
            // 携带订单信息生成订单
            let list = _this.data.goodsCar;
            let nlist = [];
            for (let i = 0; i < list.length; i++) {
              if (list[i].selected) {
                nlist.push(list[i]);
              }
            }
            API.orderinfo = nlist;//将订单的信息传给API.js
            wx.navigateTo({
              url: '../order/order'
            })
          } else {
          }
        }
      })
    }else{
      wx.showToast({
        icon: 'none',
        title: '您好没有选择宝贝额',
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
    this.setData({
      isEdit: true,
      goodsCar: wx.getStorageSync("goodsCar") //从缓存获取
    })
    if(this.data.goodsCar.length > 0){
      this.setData({
        carisShow: false,
        isCheckedAll: this.isNoCheckedOne(this.data.goodsCar),
      })
      this.totalPrice();
    }else{
      this.setData({
        carisShow: true,
        isCheckedAll: false,
      })
    }
  }
})