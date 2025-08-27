// seed.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Food from './models/foodModel.js'; // Corrected import
import { food_list } from '../frontend/src/data.js'; // Corrected path
import { connectDB } from './config/db.js'; // Corrected import

dotenv.config();

const importData = async () => {
  try {
    await connectDB();

    await Food.deleteMany();

    await Food.insertMany(food_list);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

importData();
