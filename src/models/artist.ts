import * as mongoose from 'mongoose';

export interface Artist extends mongoose.Document {
  dateCreated: Date;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
}

let artistSchema = new mongoose.Schema({
  dateCreated: {
    type: Date,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

export default mongoose.model<Artist>('artist', artistSchema);
