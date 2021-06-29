import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRouter from './router/productRouter.js';
import userRouter from './router/userRouter.js';

dotenv.config();

const app = express();
//* http request
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/luxury', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

//* API for Users
app.use('/api/users', userRouter);
//* API for Products
app.use('/api/products', productRouter);

app.get('/', (req, res) => {
  res.send('Server is ready!');
});

app.use((err, req, res) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`Serve at http://localhost:${port}`);
});
