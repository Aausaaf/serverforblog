const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
       
    },
    
},{timestamps: true});




// hashing the password
userSchema.pre('save', async function(next) {
   
  
        this.password= await bcrypt.hash(this.password,12);
        
        console.log(this.password)
    
    next()
})

const User = mongoose.model('User', userSchema);

module.exports = {User};