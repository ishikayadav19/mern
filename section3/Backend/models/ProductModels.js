const { Schema,model} = require('../connection'); // import the connection //schema class=> structure, model=>function hota h
const mySchema = new Schema({
    ProductName: String ,
    ProductPrice: {type : Integer, uniques:true},
    ProductQuantity: {type:String, required:true},
    ProductDescription:{type:String, default: "unknown"},
    ProductCategory:{type:String, default: "unknown"},
    ProductImage:{type:String, default: "unknown"},
    createdAt: {type:Date, default: Date.now},
    ProductDiscount:{type:String, default: "unknown"},
    ProductBrand:{type:String, default: "unknown"},
    
}) //schema class ka object bna rhe h

module.exports=model('product', mySchema); //model class ka object bna rhe h, user is the name of the collection in the database, mySchema is the schema we created above