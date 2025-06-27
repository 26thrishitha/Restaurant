import mongoose from "mongoose";

export const dbConnection = () => {
    console.log("Connecting to:", process.env.MONGO_URI);
    mongoose.connect(process.env.MONGO_URI,{
        dbname: "RESTAURANT"
}).then(()=>{
    console.log("Connected to DB successfully");
}).catch(err=>{
    console.log(`Some error occured while connecting to DB ${err}`);
})
}