const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    id : {type : String , required : true},
    title : {type : String , require : true}, 
    description : {type : String , require : true} ,
    price : {type : String , require : true} , 
    stock : {type : String , require : true} , 
    brand : {type : String , require : true} , 
    images : {type : String , require : true}  
  }
);
// const Product = mongoose.model('Product', productSchema);

module.exports = mongoose.model('Products', productSchema);

