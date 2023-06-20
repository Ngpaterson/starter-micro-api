const mongoose = require("mongoose");
const testimonialmodel = new mongoose.model("testimonials", mongoose.Schema({

    _id: String,
    avatar: String,
    name: String,
    review: String,  
}))

module.exports = {
     testimonialmodel
}