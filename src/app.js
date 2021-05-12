import express from 'express';
import userRoute from './routes/user.route';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const { PORT, MONGO_URI } = process.env;

const connection = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected');
  } catch (error) {
    console.log('Database is not connected');
    console.log(error.message);
    process.exit(1);
  }
};
connection();

const app = express();

app.use(express.json());

const port = PORT || 3422;

app.get('/', (req, res) => {
  res.json({
    message: 'The Express Application is Open 😀😀😀',
  });
});

app.use('/api/v1', userRoute);

app.listen(port, () => {
  console.log(`The server is running on PORT ${port}`);
});
