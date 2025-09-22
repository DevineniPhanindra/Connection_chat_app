import mogoose from "mongoose"

export const connectDB = async () =>{
    try {
    const conn = await mogoose.connect(process.env.MONGO_URI)
    console.log(`mongoDB Connected:${conn.connection.host}`)
    } catch (error) {
        console.log(`DB Connection Error`,error)
    }
}
