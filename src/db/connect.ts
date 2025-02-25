import mongoose from "mongoose"

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}

const connectDb = async (): Promise<void> => {
    if (connection.isConnected) {
        console.log("Already connected to database");
        return
    }

    try {
        const db = await mongoose.connect(process.env.DB_URL || "", {}) // study {} options, 
        // console.log("db", db)
        // console.log("db.connections", db.connections)
        connection.isConnected = db.connections[0].readyState
        console.log("Database Connected!");
    } catch (error) {
        console.error("Database connection failed", error)
        process.exit(1)
    }
}

export default connectDb;