import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import opn from 'opn';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import authorServer from './rest/inMemoryAuthorServer';
import courseServer from './rest/inMemoryCourseServer';

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

app.get('/rest/authors', (req, res) => {
  authorServer.getAllAuthors().then(authors => {
    res.json(authors);
  });
});

app.get('/rest/courses', (req, res) => {
  courseServer.getAllCourses().then(courses => {
    res.json(courses);
  });
});

app.post('/rest/courses', (req, res) => {
  courseServer.saveCourse(req.body).then(course => {
    res.json(course);
  });
});

app.put('/rest/courses/:courseId', (req, res) => {
  courseServer.saveCourse(req.body).then(course => {
    res.json(course);
  });
});

app.delete('/rest/courses/:courseId', (req, res) => {
  courseServer.deleteCourse(req.param("courseId")).then(() => {
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
