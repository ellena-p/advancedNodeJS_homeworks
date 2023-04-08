import mongoose from "mongoose";


const MONGO_URL ='mongodb+srv://ellenaP:ellenaP@cluster0.swvq2xw.mongodb.net/?retryWrites=true&w=majority'

export const mongo_connection = async () => {
    try {
        
        await mongoose.connect(MONGO_URL, {
           dbName: "Food_app" 
        })

        console.log("Connected to Mongo database.")

    } catch (error) {
        throw new Error("Connection to Mongo database failed.")
    }
};
