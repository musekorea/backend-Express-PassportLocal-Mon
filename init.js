import app from './app';
import dotenv from 'dotenv';
import './db';
import pug from 'pug';

dotenv.config();

app.set('view engine', 'pug');
app.set('views', './views');

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on ${process.env.PORT}`);
});
