import express from 'express';
import mongoose from 'mongoose';
import productRouter from './router/productRouter.js';
import userRouter from './router/userRouter.js';

const app = express();
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/luxury', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

//* Users API
app.use('/api/users', userRouter);
//* Products API
app.use(`/api/products`, productRouter);

//* Server is ready information
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
