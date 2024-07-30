const mongoose = require('mongoose');
const mongooseURI = "mongodb://127.0.0.1:27017/healthcare"; // You should specify the name of the database you want to connect to

const connectToMongo = () => {
    mongoose.connect(mongooseURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });
}

module.exports = connectToMongo; // Export the function without calling it
