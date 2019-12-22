const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database();
exports.main = async (event, context) => {

  return db.collection('dish_time').where({

   
   dish:event.dish,

  })

    .get()

}