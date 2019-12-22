
const app = getApp()
Page({
  data: {
    text: "提交",
    inputdish: 0,
   minusStatus: 'disable',
    array: ['黑椒牛柳', '韩国烤肉拌饭', '重庆小面', '变态辣水煮鱼'],
    objectArray: [
      {
        id: 0,
        name: '黑椒牛柳'
      },
      {
        id: 1,
        name: '韩国烤肉拌饭'
      },
      {
        id: 2,
        name: '重庆小面'
      },
      {
        id: 3,
        name: '变态辣水煮鱼'
      }
    ],
    
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      inputdish: e.detail.value
    })
  },
 
  
  formSubmit(e) {
    if (!wx.cloud) {

      console.error('请使用 2.2.3 或以上的基础库以使用云能力')

    } else {
  
      wx.cloud.init({

        traceUser: true,

      })

    }
    var _this = this;



    wx.cloud.callFunction({

      // 云函数名称

      name: 'search_dish_time',
      //this.data.num1=e.datail.value[input_num1],
      // 传给云函数的参数

      data: {

        num1: e.detail.value.input_num1,
        num2: e.detail.value.input_num2,
        num3: e.detail.value.input_num3,
        num4: e.detail.value.input_num4,
        time: e.detail.value.input_time,
        dish: e.detail.value.input_dish,
       tag:1


      },

      success: function (res) {

        console.log(res.result)

        //更新成功后清空输入框的值

        _this.setData({
          inputnum1: "",
          inputnum2: "",
          inputnum3: "",
          inputnum4: "",
          inputtime: "",
          inputdish:"",
        })
      },

      fail: console.error
    })
  },
 

  go: function () {
    wx.redirectTo({
      url: '../payment/payment',
    })
  },

  bindMinus1: function () {
    var num1 = this.data.num1;
    if (num1 > 0) {
      num1--;
    }
   
    var minusStatus = num1 > 0 ? 'normal' : 'disable';
    this.setData({
      num1: num1,
      minusStatus: minusStatus
    })
  },

  bindPlus1: function () {
    var num1 = this.data.num1;
    num1++;
    var minusStatus = num1 > 0 ? 'normal' : 'disable';
    this.setData({
      num1: num1,
      minusStatus: minusStatus
    })
  },
  bindManual1: function (e) {
    var num1 = e.detail.value;
    
    var minusStatus = num1 > 0 ? 'normal' : 'disable';
    this.setData({
      num1: num1,
      minusStatus: minusStatus
    })
  },
  bindMinus2: function () {
    var num2 = this.data.num2;
    if (num2 > 0) {
      num2--;
    }
    var minusStatus = num2 > 0 ? 'normal' : 'disable';
    this.setData({
      num2: num2,
      minusStatus: minusStatus
    })
  },

  bindPlus2: function () {
    var num2 = this.data.num2;
    num2++;
    var minusStatus = num2 > 0 ? 'normal' : 'disable';
    this.setData({
      num2: num2,
      minusStatus: minusStatus
    })
  },
  bindManual2: function (e) {
    var num2 = e.detail.value;
    var minusStatus = num2 > 0 ? 'normal' : 'disable';
    this.setData({
      num2: num2,
      minusStatus: minusStatus
    })
  },
  bindMinus3: function () {
    var num3 = this.data.num3;
    if (num3 > 0) {
      num3--;
    }
    var minusStatus = num3 > 0 ? 'normal' : 'disable';
    this.setData({
      num3: num3,
      minusStatus: minusStatus
    })
  },

  bindPlus3: function () {
    var num3 = this.data.num3;
    num3++;
    var minusStatus = num3 > 0 ? 'normal' : 'disable';
    this.setData({
      num3: num3,
      minusStatus: minusStatus
    })
  },
  bindManual3: function (e) {
    var num3 = e.detail.value;
    var minusStatus = num3 > 0 ? 'normal' : 'disable';
    this.setData({
      num3: num3,
      minusStatus: minusStatus
    })
  },
  bindMinus4: function () {
    var num4 = this.data.num4;
    if (num4 > 0) {
      num4--;
    }
    var minusStatus = num4 > 0 ? 'normal' : 'disable';
    this.setData({
      num4: num4,
      minusStatus: minusStatus
    })
  },

  bindPlus4: function () {
    var num4 = this.data.num4;
    num4++;
    var minusStatus = num4 > 0 ? 'normal' : 'disable';
    this.setData({
      num4: num4,
      minusStatus: minusStatus
    })
  },
  bindManual4: function (e) {
    var num4 = e.detail.value;
    var minusStatus = num4 > 0 ? 'normal' : 'disable';
    this.setData({
      num4: num4,
      minusStatus: minusStatus
    })
  },

  



})
