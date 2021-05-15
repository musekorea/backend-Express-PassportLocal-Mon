import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
export const connection = mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
});

mongoose.model('users', UserSchema);
