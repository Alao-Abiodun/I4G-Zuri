import express from 'express';
import userRoute from './routes/user.route';
import mongoDBConnection from './databases/db';
import dotenv from 'dotenv';
dotenv.config();

const { PORT } = process.env;

mongoDBConnection.connectDB();

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
