import express from 'express';
import bodyParser from 'body-parser';
import contactRouter from './controllers/ContactController';

const app = express();
app.use(bodyParser.json());
app.use(contactRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
