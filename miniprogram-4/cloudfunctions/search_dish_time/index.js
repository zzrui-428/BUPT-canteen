
const cloud = require('wx-server-sdk')


cloud.init()


const db = cloud.database();


exports.main = async (event, context) => {



  try {

    
    return db.collection('dish_time').where({

      tag: event.tag

    }).update({

      data: {
        num1:event.num1,
        num2: event.num2,
        num3: event.num3,
        num4: event.num4,
        time: event.time,
        dish:event.dish,

      },

      
    })

  

  } catch (e) {
    console.log(e)
  }
}