import * as express from 'express';
import Artist from '../models/artist';

let router = express.Router();

router.get('/', (req, res) => {
  Artist.find().then((foundArtists) => {
    res.json(foundArtists);
  }).catch((err) => {
    res.json(err);
  });
});

router.get('/:id', (req, res) => {
  Artist.findOne({ _id: req.params.id }).then((foundArtist) => {
    res.json(foundArtist);
  }).catch((err) => {
    res.json(err);
  });
});

router.post('/', (req, res) => {
  let newArtist = new Artist();

  newArtist.dateCreated = new Date();
  newArtist.firstName = req.body.firstName;
  newArtist.lastName = req.body.lastName;
  newArtist.email = req.body.email;
  newArtist.username = req.body.username;
  newArtist.password = req.body.password;
  newArtist.address = {};
  newArtist.styles = [];
  newArtist.portfolio = [];

  newArtist.save().then((createdArtist) => {
    res.json(createdArtist);
  }).catch((err) => {
    res.json(err);
  });
});

router.delete('/:id', (req, res) => {
  Artist.remove({ _id: req.params.id }).then((deletedArtist) => {
    res.json(deletedArtist);
  }).catch((err) => {
    res.json(err);
  });
});

export default router;
