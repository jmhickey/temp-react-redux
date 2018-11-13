import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import opn from 'opn';
import compression from 'compression';
import genderRouter from './rest/genderRouter';
import memberRouter from './rest/memberRouter';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(compression());
app.use(express.static('dist'));

app.use('/rest/genders', genderRouter);
app.use('/rest/members', memberRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    opn(`http://localhost:${port}`);
  }
});
