import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const dbConnection = await mongoose.connect(
      process.env.DB_URL as string);
    console.log(`MongoDB connected:${dbConnection.connection.host}:${dbConnection.connection.port}/${dbConnection.connection.name}`);
  } catch (error: any) {
    console.log(error.message);
  }
};

export default connectDB;