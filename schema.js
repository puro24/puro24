const mongoose = require ("mongoose");
const eShema = new mongoose.Schema({

    first_name:{
              type: String,
              required:true
    },
    last_name: {
              type:String,
              required:true
    },
    email:  {
               type:String,
               required:true,
               unique:true
    },
    country:{
               type:String,
               required:true
            },
    state:  {
               type:String,
               required:true
               
             },
  contact_no:  {
              type:Number,
              required:true,
              unique:true
            }           
})
//we need to create a collection for database
const Register = new mongoose.model("LoginDb",eShema);
module.exports= Register; // Register is the name of collection that is to be created inside database