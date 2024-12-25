const mongoose = require ("mongoose");
const conn =async () => {
    try {
const response = await mongoose.connect(
  "mongodb+srv://MuhammadAhmadAmir:Ahmed1509$@cluster0.q62ap.mongodb.net/TaskManager "
);
     if(response){
        console.log("Connected to MongoDB");
     }
    } 
    catch (error) {
        console.log("Error in connecting to database");
    }
};

conn();
