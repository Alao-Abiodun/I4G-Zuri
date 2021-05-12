import express from 'express';
import userRoute from './routes/user.route';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch(() => console.log('Database is not connected'));

const app = express();

app.use(express.json());

const port = PORT || 3422;

app.get('/', (req, res) => {
  res.json({
    message: 'The Express Application is Open 😀😀😀😀😀',
  });
});

app.use('/api/v1', userRoute);

app.listen(port, () => {
  console.log(`The server is running on PORT ${port}`);
});
