import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://Waweru:Goddid12@mernauth.s1yozqm.mongodb.net/mernauth?retryWrites=true&w=majority');
    console.log(`mongodb connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
