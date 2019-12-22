
const app = getApp()

Page({



  data: {

    text: "提交",    

    recordnum1:"", 
    recordnum2: "", 
    recordnum3: "", 
    recordnum4: "", 
    record: "",
    recordnumber: "",
   recordtime:"",
   recorddish:"",
   num1:0,
    num2: 0,
    num3: 0,
    num4: 0,
  },
  read_id() {


    if (!wx.cloud) {

      console.error('请使用 2.2.3 或以上的基础库以使用云能力')

    } else {

      wx.cloud.init({

        traceUser: true,

      })

    }



    var _this = this;



    wx.cloud.callFunction({



      name: 'get_id',



      data: {

        content: this.data.content,
        number: this.data.number,

        tag: 1


      },



      success: function (res) {

        console.log(res.result)

        _this.setData({

          record: res.result.data[0].content,
          recordnumber: res.result.data[0].number,


        })

      },
      fail: console.error

    })
  },
  read_time() {


    if (!wx.cloud) {

      console.error('请使用 2.2.3 或以上的基础库以使用云能力')

    } else {

      wx.cloud.init({

        traceUser: true,

      })

    }



    var _this = this;



    wx.cloud.callFunction({



      name: 'sgettime',



      data: {

        num1: this.data.num1,
        num2: this.data.num2,
        num3: this.data.num3,
        num4: this.data.num4,
        time: this.data.time,
        dish: this.data.dish,
        tag: 2


      },



      success: function (res) {

        console.log(res.result)

        _this.setData({

          recordnum1: res.result.data[0].num1,
          recordnum2: res.result.data[0].num2,
          recordnum3: res.result.data[0].num3,
          recordnum4: res.result.data[0].num4,
          recordtime: res.result.data[0].time,
          recorddish: res.result.data[0].dish,


        })

      },
      fail: console.error

    })
  },




})
  

  