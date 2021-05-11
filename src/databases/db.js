import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const { MONGO_URI } = process.env;

const mongoDBConnection = {
  async connectDB() {
    mongoose
      .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log('Database connected'))
      .catch(() => console.log('Database is not connected'));
  },
};

export default mongoDBConnection;
