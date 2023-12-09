import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('This is a stack overflow clone API');
});

const PORT = process.env.PORT || 5000;

const CONNECTION_URl = "mongodb+srv://admin:admin123@stack-overflow-clone.w99uwx8.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URl, { useNewUrlParser:true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => {
  console.log(`Serving running at http://localhost:${PORT}`)
}))
.catch((err) => console.log(err.message))
