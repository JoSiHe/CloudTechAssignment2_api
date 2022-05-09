const mongoose = require("mongoose");

/**
* Connects to MongoDB using URI from .env
*
*/
async function connectDB() {
    try {
        const connection = await mongoose.connect("mongodb+srv://cloudtech:cloudtech@idg2001cloudtech2.zeihw.mongodb.net/idg2001cloudtech2?retryWrites=true&w=majority", () => {
            console.log("Connected to the database");
        });

    } catch(error) {
        console.log(`Error occured regarding the connection to DB: ${error}`);
    }
}

module.exports = connectDB;