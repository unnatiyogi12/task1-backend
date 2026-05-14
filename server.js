import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { saveUser } from './controllers/userController.js';

dotenv.config();
const app = express();
app.use(cors());

// connect to mongodb
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch((error) =>{
    console.error('Error connecting to MongoDB:', error);
})
app.use(express.json());
app.post('/api/users', saveUser);

app.listen(process.env.PORT, () => {
    console.log(`Server Running on Port ${process.env.PORT}`);
});