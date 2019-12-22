Page({

  

  data: {
   
    text: "提交",    
    input: "",     //input输入框的值，用于更新记录成功后清空输入框的值
    inputnumber:"",
    banner: [
      '/images/emoji/hurryUp.png',
      '/images/emoji/question.png',
      '/images/emoji/smart.png',
      '/images/emoji/nice.png',
      '/images/emoji/worry.png'

    ],
    },
  
   go:function(){
    wx.redirectTo({
      url:'../post/post',
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

      name: 'search',

      // 传给云函数的参数

      data: {

        content: e.detail.value.input_content,  
        number: e.detail.value.input_number, 
       

        tag: 1
        

      },

      success: function (res) {

        console.log(res.result)

        //更新成功后清空输入框的值

        _this.setData({
          input: "",
          inputnumber:"",
        
        })
      },

      fail: console.error
    })
  },
  
  
  
  
})