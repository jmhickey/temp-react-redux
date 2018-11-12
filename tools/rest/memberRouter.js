import express from 'express';
import memberServer from './inMemoryMemberServer';

const memberRouter = express.Router();

memberRouter.get('/', (req, res) => {
  memberServer.getAllMembers().then(members => {
    res.json(members);
  });
});

memberRouter.post('/', (req, res) => {
  memberServer.saveMember(req.body).then(member => {
    res.json(member);
  }).catch(err => {
    res.status(500).send({error: err});
  });
});

memberRouter.put('/:memberId', (req, res) => {
  memberServer.saveMember(req.body).then(member => {
    res.json(member);
  }).catch(err => {
    res.status(500).send({error: err});
  });
});

memberRouter.delete('/:memberId', (req, res) => {
  memberServer.deleteMember(req.params.memberId).then(() => {
    res.json({});
  });
});

export default memberRouter;
