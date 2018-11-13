import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import opn from 'opn';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import genderRouter from './rest/genderRouter';
import memberRouter from './rest/memberRouter';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use(bodyParser.json());

app.use('/rest/genders', genderRouter);
app.use('/rest/members', memberRouter);

app.get('*', (req, res, next) => {
  // res.sendFile(path.join(__dirname, '../src/index.html'));
  const filename = path.join(compiler.outputPath,'index.html');
  compiler.outputFileSystem.readFile(filename, function(err, result){
    if (err) {
      return next(err);
    }
    res.set('content-type','text/html');
    res.send(result);
    res.end();
  });
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    opn(`http://localhost:${port}`);
  }
});
