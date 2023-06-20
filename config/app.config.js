 require("dotenv").config;

 const MONGO_DB_CONFIG = {
    DB: 'mongodb+srv://patersonnguepi:Paterson@paterson.dalbfiz.mongodb.net/paterson?retryWrites=true&w=majority'
 }

 module.exports = {
    MONGO_DB_CONFIG
 }