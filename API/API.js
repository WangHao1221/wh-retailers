/*这里是模拟的接口返回数据*/
module.exports = {
  goods: [{
    imgGood: "../../images/1.jpg",//商品图片地址
    nameGood: "生日节日访友水果礼篮.生日节日访友水果礼篮",//商品名称和描述
    nameDes: "送礼自用两相宜，一次订购两盒尊享包邮服务", //描述
    npriceGood: 239,//商品最新价格
    opriceGood: 298,//商品以往价格
    count: 0,//商品数量
    id: 0,//商品id
    selected: false,//商品是否为被选中状态，购物车默认全选
    specifications: [
      {
        guigeName: "500g随机搭配/箱",
        guigeId: 1
      }, 
      {
        guigeName: "促销享会员价 500元/3箱",
        guigeId: 2
      },
      {
        guigeName: "500g纯苹果/箱",
        guigeId: 3
      },
      {
        guigeName: "500g纯香蕉/箱",
        guigeId: 4
      },
    ],//商品规格
    imgUrls: [
      {
        url: 'https://vod.300hu.com/4c1f7a6atransbjngwcloud1oss/31174044181056509244399617/v.f30.mp4?dockingId=c8456f2f-15b7-4cfd-9e49-26005a06bf64&storageSource=3',
        type: 1
      },
      {
        url: 'http://f.hiphotos.baidu.com/image/h%3D300/sign=d985fb87d81b0ef473e89e5eedc551a1/b151f8198618367aa7f3cc7424738bd4b31ce525.jpg',
        type: 0
      },
      {
        url: 'http://a.hiphotos.baidu.com/image/pic/item/f603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg',
        type: 0
      },
      {
        url: 'http://b.hiphotos.baidu.com/image/pic/item/0eb30f2442a7d9337119f7dba74bd11372f001e0.jpg',
        type: 0
      }], //轮播
    isSale: "1000+"
  },
  {
    imgGood: "../../images/2.jpg",
    nameGood: "有机苹果礼盒",
    nameDes: "精选好礼，个大味甜，还不赶紧下单", //描述
    npriceGood: 99,
    opriceGood: 198,
    count: 0,
    id: 1,
    selected: false,
    specifications: [{
      guigeName: "500g/箱",
      guigeId: 1
    }],
    imgUrls: [
      {
        url: 'https://vod.300hu.com/4c1f7a6atransbjngwcloud1oss/31174044181056509244399617/v.f30.mp4?dockingId=c8456f2f-15b7-4cfd-9e49-26005a06bf64&storageSource=3',
        type: 1
      },
      {
        url: 'http://f.hiphotos.baidu.com/image/h%3D300/sign=d985fb87d81b0ef473e89e5eedc551a1/b151f8198618367aa7f3cc7424738bd4b31ce525.jpg',
        type: 0
      },
      {
        url: 'http://a.hiphotos.baidu.com/image/pic/item/f603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg',
        type: 0
      },
      {
        url: 'http://b.hiphotos.baidu.com/image/pic/item/0eb30f2442a7d9337119f7dba74bd11372f001e0.jpg',
        type: 0
      }], //轮播
    isSale: "3000+"
  },
  {
    imgGood: "../../images/3.jpg",
    nameGood: "孕妈礼盒",
    nameDes: "新鲜的猕猴桃、火龙果、多汁的鲜橙，精美搭配，孕妈的福音.新鲜的猕猴桃、火龙果、多汁的鲜橙，精美搭配，孕妈的福音", //描述
    npriceGood: 36.9,
    opriceGood: 39.9,
    count: 0,
    id: 2,
    selected: false,
    specifications: [{
      guigeName: "10斤/箱",
      guigeId: 1
    }],
    imgUrls: [
      {
        url: 'https://vod.300hu.com/4c1f7a6atransbjngwcloud1oss/31174044181056509244399617/v.f30.mp4?dockingId=c8456f2f-15b7-4cfd-9e49-26005a06bf64&storageSource=3',
        type: 1
      },
      {
        url: 'http://f.hiphotos.baidu.com/image/h%3D300/sign=d985fb87d81b0ef473e89e5eedc551a1/b151f8198618367aa7f3cc7424738bd4b31ce525.jpg',
        type: 0
      },
      {
        url: 'http://a.hiphotos.baidu.com/image/pic/item/f603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg',
        type: 0
      },
      {
        url: 'http://b.hiphotos.baidu.com/image/pic/item/0eb30f2442a7d9337119f7dba74bd11372f001e0.jpg',
        type: 0
      }], //轮播
    isSale: "100"
    },
    {
      imgGood: "../../images/4.jpg",
      nameGood: "心想事成礼盒",
      nameDes: "新鲜的猕猴桃、火龙果、多汁的鲜橙，精美搭配，孕妈的福音", //描述
      npriceGood: 139,
      opriceGood: 219,
      count: 0,
      id: 3,
      selected: false,
      specifications: [{
        guigeName: "10斤/箱",
        guigeId: 1
      }],
      imgUrls: [
        {
          url: 'https://vod.300hu.com/4c1f7a6atransbjngwcloud1oss/31174044181056509244399617/v.f30.mp4?dockingId=c8456f2f-15b7-4cfd-9e49-26005a06bf64&storageSource=3',
          type: 1
        },
        {
          url: 'http://f.hiphotos.baidu.com/image/h%3D300/sign=d985fb87d81b0ef473e89e5eedc551a1/b151f8198618367aa7f3cc7424738bd4b31ce525.jpg',
          type: 0
        },
        {
          url: 'http://a.hiphotos.baidu.com/image/pic/item/f603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg',
          type: 0
        },
        {
          url: 'http://b.hiphotos.baidu.com/image/pic/item/0eb30f2442a7d9337119f7dba74bd11372f001e0.jpg',
          type: 0
        }], //轮播
      isSale: "88"
    },
    {
      imgGood: "../../images/5.jpg",
      nameGood: "特级智利加力果",
      nameDes: "新鲜的猕猴桃、火龙果、多汁的鲜橙，精美搭配，孕妈的福音", //描述
      npriceGood: 36,
      opriceGood: 76,
      count: 0,
      id: 4,
      selected: false,
      specifications: [{
        guigeName: "10斤/箱",
        guigeId: 1
      }],
      imgUrls: [
        {
          url: 'https://vod.300hu.com/4c1f7a6atransbjngwcloud1oss/31174044181056509244399617/v.f30.mp4?dockingId=c8456f2f-15b7-4cfd-9e49-26005a06bf64&storageSource=3',
          type: 1
        },
        {
          url: 'http://f.hiphotos.baidu.com/image/h%3D300/sign=d985fb87d81b0ef473e89e5eedc551a1/b151f8198618367aa7f3cc7424738bd4b31ce525.jpg',
          type: 0
        },
        {
          url: 'http://a.hiphotos.baidu.com/image/pic/item/f603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg',
          type: 0
        },
        {
          url: 'http://b.hiphotos.baidu.com/image/pic/item/0eb30f2442a7d9337119f7dba74bd11372f001e0.jpg',
          type: 0
        }], //轮播
      isSale: "67"
    },
    {
      imgGood: "../../images/6.jpg",
      nameGood: "台湾红心芭乐",
      nameDes: "新鲜的猕猴桃、火龙果、多汁的鲜橙，精美搭配，孕妈的福音", //描述
      npriceGood: 45,
      opriceGood: 66,
      count: 0,
      id: 5,
      selected: false,
      specifications: [{
        guigeName: "10斤/箱",
        guigeId: 1
      }],
      imgUrls: [
        {
          url: 'https://vod.300hu.com/4c1f7a6atransbjngwcloud1oss/31174044181056509244399617/v.f30.mp4?dockingId=c8456f2f-15b7-4cfd-9e49-26005a06bf64&storageSource=3',
          type: 1
        },
        {
          url: 'http://f.hiphotos.baidu.com/image/h%3D300/sign=d985fb87d81b0ef473e89e5eedc551a1/b151f8198618367aa7f3cc7424738bd4b31ce525.jpg',
          type: 0
        },
        {
          url: 'http://a.hiphotos.baidu.com/image/pic/item/f603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg',
          type: 0
        },
        {
          url: 'http://b.hiphotos.baidu.com/image/pic/item/0eb30f2442a7d9337119f7dba74bd11372f001e0.jpg',
          type: 0
        }], //轮播
      isSale: "55"
    },
    {
      imgGood: "../../images/7.jpg",
      nameGood: "越南红心火龙果",
      nameDes: "新鲜的猕猴桃、火龙果、多汁的鲜橙，精美搭配，孕妈的福音", //描述
      npriceGood: 59,
      opriceGood: 89,
      count: 0,
      id: 6,
      selected: false,
      specifications: [{
        guigeName: "10斤/箱",
        guigeId: 1
      }],
      imgUrls: [
        {
          url: 'https://vod.300hu.com/4c1f7a6atransbjngwcloud1oss/31174044181056509244399617/v.f30.mp4?dockingId=c8456f2f-15b7-4cfd-9e49-26005a06bf64&storageSource=3',
          type: 1
        },
        {
          url: 'http://f.hiphotos.baidu.com/image/h%3D300/sign=d985fb87d81b0ef473e89e5eedc551a1/b151f8198618367aa7f3cc7424738bd4b31ce525.jpg',
          type: 0
        },
        {
          url: 'http://a.hiphotos.baidu.com/image/pic/item/f603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg',
          type: 0
        },
        {
          url: 'http://b.hiphotos.baidu.com/image/pic/item/0eb30f2442a7d9337119f7dba74bd11372f001e0.jpg',
          type: 0
        }], //轮播
      isSale: "47"
    },
    {
      imgGood: "../../images/8.jpg",
      nameGood: "新西兰佳沛阳光金奇异果王",
      nameDes: "新鲜的猕猴桃、火龙果、多汁的鲜橙，精美搭配，孕妈的福音", //描述
      npriceGood: 69,
      opriceGood: 95,
      count: 0,
      id: 7,
      selected: false,
      specifications: [{
        guigeName: "10斤/箱",
        guigeId: 1
      }],
      imgUrls: [
        {
          url: 'https://vod.300hu.com/4c1f7a6atransbjngwcloud1oss/31174044181056509244399617/v.f30.mp4?dockingId=c8456f2f-15b7-4cfd-9e49-26005a06bf64&storageSource=3',
          type: 1
        },
        {
          url: 'http://f.hiphotos.baidu.com/image/h%3D300/sign=d985fb87d81b0ef473e89e5eedc551a1/b151f8198618367aa7f3cc7424738bd4b31ce525.jpg',
          type: 0
        },
        {
          url: 'http://a.hiphotos.baidu.com/image/pic/item/f603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg',
          type: 0
        },
        {
          url: 'http://b.hiphotos.baidu.com/image/pic/item/0eb30f2442a7d9337119f7dba74bd11372f001e0.jpg',
          type: 0
        }], //轮播
      isSale: "36"
    },
    {
      imgGood: "../../images/9.jpg",
      nameGood: "美国车厘子28.2mm级",
      nameDes: "新鲜的猕猴桃、火龙果、多汁的鲜橙，精美搭配，孕妈的福音", //描述
      npriceGood: 79,
      opriceGood: 99,
      count: 0,
      id: 8,
      selected: false,
      specifications: [{
        guigeName: "10斤/箱",
        guigeId: 1
      }],
      imgUrls: [
        {
          url: 'https://vod.300hu.com/4c1f7a6atransbjngwcloud1oss/31174044181056509244399617/v.f30.mp4?dockingId=c8456f2f-15b7-4cfd-9e49-26005a06bf64&storageSource=3',
          type: 1
        },
        {
          url: 'http://f.hiphotos.baidu.com/image/h%3D300/sign=d985fb87d81b0ef473e89e5eedc551a1/b151f8198618367aa7f3cc7424738bd4b31ce525.jpg',
          type: 0
        },
        {
          url: 'http://a.hiphotos.baidu.com/image/pic/item/f603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg',
          type: 0
        },
        {
          url: 'http://b.hiphotos.baidu.com/image/pic/item/0eb30f2442a7d9337119f7dba74bd11372f001e0.jpg',
          type: 0
        }], //轮播
      isSale: "18"
    },
    {
      imgGood: "../../images/10.jpg",
      nameGood: "桂味荔枝",
      nameDes: "新鲜的猕猴桃、火龙果、多汁的鲜橙，精美搭配，孕妈的福音", //描述
      npriceGood: 98,
      opriceGood: 118,
      count: 0,
      id: 9,
      selected: false,
      specifications: [{
        guigeName: "10斤/箱",
        guigeId: 1
      }],
      imgUrls: [
        {
          url: 'https://vod.300hu.com/4c1f7a6atransbjngwcloud1oss/31174044181056509244399617/v.f30.mp4?dockingId=c8456f2f-15b7-4cfd-9e49-26005a06bf64&storageSource=3',
          type: 1
        },
        {
          url: 'http://f.hiphotos.baidu.com/image/h%3D300/sign=d985fb87d81b0ef473e89e5eedc551a1/b151f8198618367aa7f3cc7424738bd4b31ce525.jpg',
          type: 0
        },
        {
          url: 'http://a.hiphotos.baidu.com/image/pic/item/f603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg',
          type: 0
        },
        {
          url: 'http://b.hiphotos.baidu.com/image/pic/item/0eb30f2442a7d9337119f7dba74bd11372f001e0.jpg',
          type: 0
        }], //轮播
      isSale: "1"
    }],
    // 分类模拟数据
  cateItems: [
    {
      id: 10,
      nameGood: "家用电器",
      ishaveChild: true,
      children:
        [
          {
            id: 11,
            nameGood: '电视',
            imgGood: "https://img10.360buyimg.com/babel/s464x240_jfs/t1/32793/6/1535/10571/5c4ea678Ef1547d3a/2f3a69fa34b4e809.jpg!cc_464x240",
            ishaveChild: true,
            children: [
              {
                id: 12,
                imgUrls: [
                  {
                    url: 'https://vod.300hu.com/4c1f7a6atransbjngwcloud1oss/31174044181056509244399617/v.f30.mp4?dockingId=c8456f2f-15b7-4cfd-9e49-26005a06bf64&storageSource=3',
                    type: 1
                  },
                  {
                    url: 'https://img14.360buyimg.com/n4/jfs/t1/40091/37/8022/347730/5cf29444E5e18cacf/d26cc10a08925d0d.jpg',
                    type: 0
                  }, 
                  {
                    url: 'https://img11.360buyimg.com/n5/jfs/t17722/120/2679265136/83859/a186b11/5b063168N10107933.jpg',
                    type: 0
                  },
                  {
                    url: 'https://img11.360buyimg.com/n5/jfs/t20329/9/252098368/467543/7b5c4abc/5b06316cNe04ea3b9.jpg',
                    type: 0
                  }], //轮播
                npriceGood: '1380',
                opriceGood: '1699',
                isSale: '121', //已售
                nameGood: '小米电视4X 55英寸 4K超高清 HDR 蓝牙语音遥控 2GB+8GB 人工智能语音网络液晶平板电视L55M5-AD',
                nameDes: '超清大屏',
                imgGood: "https://img11.360buyimg.com/n7/jfs/t1/40091/37/8022/347730/5cf29444E5e18cacf/d26cc10a08925d0d.jpg",
                specifications: [
                  {
                    guigeName: "55英寸 小米电视4X55",
                    guigeId: 1
                  }
                ]
              },
              {
                id: 13,
                imgUrls: [
                  {
                    url: 'https://vod.300hu.com/4c1f7a6atransbjngwcloud1oss/7cac9f7b203885979634294785/v.f30.mp4?dockingId=0305b273-e13a-4256-8d63-1356a2f688bd&storageSource=3',
                    type: 1
                  }, 
                  {
                    url: 'https://img14.360buyimg.com/n4/jfs/t1/38532/2/6498/278498/5cd1545dEfaeec114/64ec5f1db6ba1651.jpg',
                    type: 0
                  }, 
                  {
                    url: 'https://img14.360buyimg.com/n1/s160x160_jfs/t1/82505/33/6010/290354/5d415de6Efc0e5596/26bd50d7e30bf278.jpg',
                    type: 0
                  },
                  {
                    url: 'https://img14.360buyimg.com/n1/s160x160_jfs/t1/82505/33/6010/290354/5d415de6Efc0e5596/26bd50d7e30bf278.jpg',
                    type: 0
                  }], //轮播
                npriceGood: '2180',
                opriceGood: '2699',
                isSale: '389', //已售
                nameGood: '长虹 55D7P 55英寸无边全面屏 人工智能超薄全金属 4K超高清语音平板LED液晶电视机',
                nameDes: 'LED液晶电视机',
                imgGood: "https://img14.360buyimg.com/n1/s160x160_jfs/t1/26268/16/12814/150827/5c9b449aE33777846/edd4d4b39672ca75.jpg",
                specifications: [
                  {
                    guigeName: "55英寸 长虹55D7P",
                    guigeId: 1
                  }
                ]
              },
              {
                id: 14,
                imgUrls: [
                  {
                    url: 'https://jdvideo.300hu.com/vodtransgzp1251412368/7447398156586530372/v.f30.mp4?dockingId=137c1c7a-ff58-4d90-b574-0f63a19cd1aa&storageSource=3',
                    type: 1
                  }, 
                  {
                    url: 'https://img13.360buyimg.com/n5/jfs/t1/107818/25/577/145060/5df641d1Ea1e17c24/15d8c3ebd5f073b0.jpg',
                    type: 0
                  }, 
                  {
                    url: 'https://img13.360buyimg.com/n5/jfs/t1/77433/23/463/201823/5cea9993E2f2ae73d/4831c96ef2c8b686.jpg',
                    type: 0
                  },
                  {
                    url: 'https://img13.360buyimg.com/n5/jfs/t1/33102/22/12279/151189/5cea9994E30612e2d/8abd11256311bea2.jpg',
                    type: 0
                  }], //轮播
                npriceGood: '1980',
                opriceGood: '2399',
                isSale: '299', //已售
                nameGood: '康佳KKTV U65V5 65英寸 华为海思芯片 HDR 4K超高清 手机投屏 教育电视 人工智能语音网络液晶平板电视机',
                nameDes: '人工智能语音网络液晶平板电视机',
                imgGood: "https://img11.360buyimg.com/n5/jfs/t1/96791/4/6438/144867/5df36a03Ebf688e44/daa7489245cddd14.jpg",
                specifications: [
                  {
                    guigeName: "65英寸 康佳KKTV",
                    guigeId: 1
                  }
                ]
              }, {
                id: 15,
                imgUrls: [
                  {
                    url: 'https://vod.300hu.com/4c1f7a6atransbjngwcloud1oss/7cac9f7b203885979634294785/v.f30.mp4?dockingId=0305b273-e13a-4256-8d63-1356a2f688bd&storageSource=3',
                    type: 1
                  },
                  {
                    url: 'https://img14.360buyimg.com/n4/jfs/t1/38532/2/6498/278498/5cd1545dEfaeec114/64ec5f1db6ba1651.jpg',
                    type: 0
                  },
                  {
                    url: 'https://img14.360buyimg.com/n1/s160x160_jfs/t1/82505/33/6010/290354/5d415de6Efc0e5596/26bd50d7e30bf278.jpg',
                    type: 0
                  },
                  {
                    url: 'https://img14.360buyimg.com/n1/s160x160_jfs/t1/82505/33/6010/290354/5d415de6Efc0e5596/26bd50d7e30bf278.jpg',
                    type: 0
                  }], //轮播
                npriceGood: '1380',
                opriceGood: '1699',
                isSale: '121', //已售
                nameGood: '小米电视4X 55英寸 4K超高清 HDR 蓝牙语音遥控 2GB+8GB 人工智能语音网络液晶平板电视L55M5-AD',
                nameDes: '超清大屏',
                imgGood: "https://img11.360buyimg.com/n7/jfs/t1/40091/37/8022/347730/5cf29444E5e18cacf/d26cc10a08925d0d.jpg",
                specifications: [{
                  guigeName: "65英寸 康佳KKTV",
                  guigeId: 1
                }]
              },
              {
                id: 16,
                imgUrls: [
                  {
                    url: 'https://jdvideo.300hu.com/vodtransgzp1251412368/7447398156586530372/v.f30.mp4?dockingId=137c1c7a-ff58-4d90-b574-0f63a19cd1aa&storageSource=3',
                    type: 1
                  },
                  {
                    url: 'https://img13.360buyimg.com/n5/jfs/t1/107818/25/577/145060/5df641d1Ea1e17c24/15d8c3ebd5f073b0.jpg',
                    type: 0
                  },
                  {
                    url: 'https://img13.360buyimg.com/n5/jfs/t1/77433/23/463/201823/5cea9993E2f2ae73d/4831c96ef2c8b686.jpg',
                    type: 0
                  },
                  {
                    url: 'https://img13.360buyimg.com/n5/jfs/t1/33102/22/12279/151189/5cea9994E30612e2d/8abd11256311bea2.jpg',
                    type: 0
                  }], //轮播
                npriceGood: '2180',
                opriceGood: '2699',
                isSale: '389', //已售
                nameGood: '长虹 55D7P 55英寸无边全面屏 人工智能超薄全金属 4K超高清语音平板LED液晶电视机',
                nameDes: 'LED液晶电视机',
                imgGood: "https://img14.360buyimg.com/n1/s160x160_jfs/t1/26268/16/12814/150827/5c9b449aE33777846/edd4d4b39672ca75.jpg",
                specifications: [
                  {
                    guigeName: "65英寸 康佳KKTV",
                    guigeId: 1
                  }
                ]
              },
              {
                id: 17,
                imgUrls: [
                  {
                    url: 'https://vod.300hu.com/4c1f7a6atransbjngwcloud1oss/31174044181056509244399617/v.f30.mp4?dockingId=c8456f2f-15b7-4cfd-9e49-26005a06bf64&storageSource=3',
                    type: 1
                  },
                  {
                    url: 'https://img14.360buyimg.com/n4/jfs/t1/40091/37/8022/347730/5cf29444E5e18cacf/d26cc10a08925d0d.jpg',
                    type: 0
                  },
                  {
                    url: 'https://img11.360buyimg.com/n5/jfs/t17722/120/2679265136/83859/a186b11/5b063168N10107933.jpg',
                    type: 0
                  },
                  {
                    url: 'https://img11.360buyimg.com/n5/jfs/t20329/9/252098368/467543/7b5c4abc/5b06316cNe04ea3b9.jpg',
                    type: 0
                  }], //轮播
                npriceGood: '1980',
                opriceGood: '2399',
                isSale: '299', //已售
                nameGood: '康佳KKTV U65V5 65英寸 华为海思芯片 HDR 4K超高清 手机投屏 教育电视 人工智能语音网络液晶平板电视机',
                nameDes: '人工智能语音网络液晶平板电视机',
                imgGood: "https://img11.360buyimg.com/n5/jfs/t1/96791/4/6438/144867/5df36a03Ebf688e44/daa7489245cddd14.jpg",
                specifications: [
                  {
                    guigeName: "65英寸 康佳KKTV",
                    guigeId: 1
                  }
                ]
              }
            ]
          },
          {
            id: 18,
            nameGood: '空调',
            imgGood: "https://img13.360buyimg.com/babel/s464x240_jfs/t1/56582/1/5831/7187/5d380747E8fbff75a/070d8e0c813d337c.jpg!cc_464x240"
          },
          {
            id: 19,
            nameGood: '洗衣机',
            imgGood: "https://img11.360buyimg.com/babel/s464x240_jfs/t1/62681/12/12412/64840/5d9ec628E4a01352d/eea279ea7c33f6e3.jpg!cc_464x240"
          },
          {
            id: 20,
            nameGood: '冰箱',
            imgGood: "https://img12.360buyimg.com/babel/s464x240_jfs/t1/20576/35/4000/7544/5c4ea77cEb47338ad/796c285322c72f86.jpg!cc_464x240"
          }
        ]
    },
    {
      id: 21,
      nameGood: "母婴",
      ishaveChild: true,
      children:
        [
          {
            id: 22,
            nameGood: '奶粉',
            imgGood: "https://img10.360buyimg.com/cms/jfs/t1/49183/2/4145/25599/5d1da998Ee3189d71/bd22bed2f2fa9fd1.jpg"
          },
          {
            id: 23,
            nameGood: '营养辅食',
            imgGood: "https://img10.360buyimg.com/babel/s2000x840_jfs/t16906/15/2482027246/99601/81b28c2d/5af94901Ncc9373c9.jpg!cc_2000x840"
          },
          {
            id: 24,
            nameGood: '尿裤湿巾',
            imgGood: "https://img14.360buyimg.com/cms/jfs/t21259/170/2032614139/13216/fa60258a/5b431bc6N32cdc094.jpg!q80.webp"
          },
          {
            id: 25,
            nameGood: '洗护用品',
            imgGood: "https://img11.360buyimg.com/cms/jfs/t4702/232/546729612/24576/291153f/58d10e2bN7efba382.jpg"
          },
          {
            id: 26,
            nameGood: '妈妈专区',
            imgGood: "https://img14.360buyimg.com/cms/jfs/t20335/259/184665726/26010/1cc71bd4/5b028189N4bc5a4f1.jpg"
          },
          {
            id: 27,
            nameGood: '玩具乐器',
            imgGood: "https://img13.360buyimg.com/cms/jfs/t5074/99/2403106019/23342/d4a315a/58fec9e4Nd0f8b708.jpg"
          },
          {
            id: 28,
            nameGood: '婴童寝居',
            imgGood: "https://img14.360buyimg.com/cms/jfs/t12607/71/737260574/25494/2e09c0a7/5a12c39bNc7986294.jpg"
          },
          {
            id: 29,
            nameGood: '童车童床',
            imgGood: "https://img13.360buyimg.com/cms/jfs/t10039/156/1161675603/31906/e5c943a6/59dd9095N9dcd117a.jpg"
          },
          {
            id: 30,
            nameGood: '喂养用品',
            imgGood: "https://img11.360buyimg.com/n7/jfs/t1/75328/2/15768/149501/5dd7830aE07f2e07c/9c4b167e2d8788a5.jpg"
          },
          {
            id: 31,
            nameGood: '品牌特卖',
            imgGood: "https://img11.360buyimg.com/cms/jfs/t1/58430/23/5652/192267/5d350a21Ec7362123/303c209f127efeec.jpg"
          },
          {
            id: 32,
            nameGood: '成长推荐',
            imgGood: "https://img12.360buyimg.com/n2/jfs/t1/71195/25/104/194621/5ce21c66Ea85bd43b/ee3d4b5509a149b1.jpg!q80.webp"
          },
          {
            id: 33,
            nameGood: '今日大牌',
            imgGood: "https://img14.360buyimg.com/n2/jfs/t14416/12/2313133636/123012/1ef8c961/5a9385cdNe4e4388c.jpg!q80.webp"
          },
          {
            id: 34,
            nameGood: '安全座椅',
            imgGood: "https://img14.360buyimg.com/cms/jfs/t12799/213/1766754546/42699/d500cd1f/5aa0cdaeN7856d444.jpg"
          },
          {
            id: 35,
            nameGood: '全棉时代',
            imgGood: "https://img12.360buyimg.com/cms/jfs/t19117/178/537822476/31222/b3cee4d8/5a9609e8Ne26cccf3.jpg"
          }
        ]
    },
    {
      id: 36,
      nameGood: "汽车",
      ishaveChild: true,
      children:
        [
          {
            id: 37,
            nameGood: '新车首发',
            imgGood: "https://img11.360buyimg.com/babel/s600x480_jfs/t1/105783/25/4677/61729/5de8b728E34f12b35/51bccbc1e6996325.jpg!cc_600x480"
          },
          {
            id: 38,
            nameGood: '家用轿车',
            imgGood: "https://img12.360buyimg.com/babel/s340x340_jfs/t1/73721/40/15922/354167/5dd7d555E99274ec0/4cc5ca4cbb852892.png"
          },
          {
            id: 39,
            nameGood: '热销SUV',
            imgGood: "https://img11.360buyimg.com/babel/s340x340_jfs/t1/105548/19/7074/287538/5df86dcaE95ee221c/e222426ffce6d05d.jpg"
          },
          {
            id: 40,
            nameGood: '新能源车',
            imgGood: "https://img11.360buyimg.com/babel/s340x340_jfs/t1/94100/12/7470/106705/5dfb3e77Ee9938e0b/be1f7eba3b16cda8.jpg"
          }
        ]
    },
    {
      id: 41,
      nameGood: "女装",
      ishaveChild: true,
      children:
        [
          {
            id: 42,
            nameGood: '毛呢大衣',
            imgGood: "https://img11.360buyimg.com/cms/jfs/t1/63305/40/13556/6839/5dad1bb6E3e5ce4f8/9d2affd9cb84d17e.jpg"
          },
          {
            id: 43,
            nameGood: '外套',
            imgGood: "https://img11.360buyimg.com/cms/jfs/t1/7279/30/14864/12006/5c6fbc04E6e2dcf2f/218f6dac35e8ecaa.jpg"
          },
          {
            id: 44,
            nameGood: '卫衣',
            imgGood: "https://img14.360buyimg.com/cms/jfs/t1/52288/31/8243/9879/5d5bbe8fE202cda99/d846af7faca4c3fc.jpg"
          },
          {
            id: 45,
            nameGood: '特色女装',
            imgGood: "https://img11.360buyimg.com/cms/jfs/t3250/4/5616922029/2252/8cb82e34/58760db3N312eeb96.jpg"
          },
          {
            id: 46,
            nameGood: '裙装',
            imgGood: "https://img12.360buyimg.com/cms/jfs/t1/51539/10/8173/7313/5d5bbd44Eaa2050e4/131061cd56b0ee8e.jpg"
          }
        ]
    },
    {
      id: 47,
      nameGood: "内衣配饰",
      ishaveChild: false,
      children: []
    },
    {
      id: 48,
      nameGood: "其他",
      ishaveChild: false,
      children: []
    }
  ],
}