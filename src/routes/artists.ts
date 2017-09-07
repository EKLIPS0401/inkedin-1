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
  newArtist.allowContact = false;
  newArtist.address = {};
  newArtist.styles = [];
  newArtist.portfolio = [];

  newArtist.save().then((createdArtist) => {
    res.json(createdArtist);
  }).catch((err) => {
    res.json(err);
  });
});

router.put('/:id', (req, res) => {
  Artist.findOne({ _id: req.params.id }).then((foundArtist) => {
    foundArtist.dateCreated = req.body.dateCreated;
    foundArtist.firstName = req.body.firstName;
    foundArtist.lastName = req.body.lastName;
    foundArtist.email = req.body.email;
    foundArtist.username = req.body.username;
    foundArtist.password = req.body.password;
    foundArtist.allowContact = req.body.allowContact;
    foundArtist.address = req.body.address;
    foundArtist.styles = req.body.styles;
    foundArtist.portfolio = req.body.portfolio;

    foundArtist.save().then((updatedArtist) => {
      res.json(updatedArtist);
    }).catch((err) => {
      res.json(err)
    });
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
