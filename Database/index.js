const mongoose = require('mongoose')

const ConnectDB = async () => {
  try {

    await mongoose.connect('mongodb+srv://alam:Aausaf123@cluster0.5ruzzlx.mongodb.net/?retryWrites=true&w=majority')

  } catch (error) {

     console.log(error)
     
  }
}

module.exports = {ConnectDB}