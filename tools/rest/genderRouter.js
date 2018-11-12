import express from 'express';
import genderServer from './inMemoryGenderServer';

const genderRouter = express.Router();

genderRouter.get("/", (req, res) => {
  genderServer.getAllGenders().then(genders => {
    res.json(genders);
  });
});

export default genderRouter;
