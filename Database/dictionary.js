const mongoose = require('mongoose')

const dictionarySchema = new mongoose.Schema({
    name:{
        type:String,
       
    },
    text:{
        type:String,
        
    },
    etymologies:{
        type:Array,
       
    },
    shortDefinitions:{
        type:Array
    },
    definitions:{
        type:Array,
       
    },
    phrases:{
        type:Array
    }
})

const Dictionary = mongoose.model('Dictionary',dictionarySchema)

module.exports ={Dictionary}