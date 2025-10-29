import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/biblioteca?retryWrites=true&w=majority`;

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB conectado con Mongoose ✅');
  } catch (error) {
    console.error('Error conectando MongoDB:', error);
    process.exit(1);
  }
};

