import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as opn from 'opn';

import artists from './routes/artists';

const app = express();
const port = 4200;

const CONNECTION_STRING = 'mongodb://inkedingroup:inkedin123@ds127783.mlab.com:27783/inkeddb';

if (CONNECTION_STRING) {
  mongoose.connect(CONNECTION_STRING)
  .then(() => {
    console.log(`Successfully connected to ${CONNECTION_STRING}.`);
  })
  .catch((err) => {
    console.log(`Failed to connect to ${CONNECTION_STRING}.`);
  });
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('./public/'));

app.use('/api/artists', artists);

app.get('*', (req, res) => {
  res.sendfile('public/index.html');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
  opn(`http://localhost:${port}`);
});
