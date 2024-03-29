const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
    {
      name: { type: String},
      comment: { type: String, required: true },
      rating: { type: Number, required: true },
    },
    {
      timestamps: true,
    }
  );

const productSchema = new mongoose.Schema({
    name:{type: String, required: true},
    image:{type: String, required: true},
    price:{type: Number, required: true},
    description:{type: String , required: true},
    category:{type: mongoose.Types.ObjectId ,  ref: "Category"},
    countInStock:{type: Number,  required: true},
    rating:{type: Number,  required: true},
    numReviews:{type: Number,  required: true},
    reviews: [reviewSchema],

},{timestamps: true}
);
 
const Product  = mongoose.model("Product", productSchema);

 module.exports = Product 

