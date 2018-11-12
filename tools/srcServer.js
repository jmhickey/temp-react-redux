import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import opn from 'opn';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import genderServer from './rest/inMemoryGenderServer';
import memberServer from './rest/inMemoryMemberServer';

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

app.get('/rest/genders', (req, res) => {
  genderServer.getAllGenders().then(genders => {
    res.json(genders);
  });
});

app.get('/rest/members', (req, res) => {
  memberServer.getAllMembers().then(members => {
    res.json(members);
  });
});

app.post('/rest/members', (req, res) => {
  memberServer.saveMember(req.body).then(member => {
    res.json(member);
  }).catch(err => {
    res.status(500).send({error: err});
  });
});

app.put('/rest/members/:memberId', (req, res) => {
  memberServer.saveMember(req.body).then(course => {
    res.json(course);
  }).catch(err => {
    res.status(500).send({error: err});
  });
});

app.delete('/rest/members/:memberId', (req, res) => {
  memberServer.deleteMember(req.params.memberId).then(() => {
    res.json({});
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    opn(`http://localhost:${port}`);
  }
});
