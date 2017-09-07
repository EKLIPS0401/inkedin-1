import * as mongoose from 'mongoose';

export interface Artist extends mongoose.Document {
  dateCreated: Date;
  firstName: string;
  lastName: string;
  email: string;
  profilePic: string;
  username: string;
  password: string;
  allowContact: boolean;
  address: object;
  styles: string[];
  portfolio: object[];
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
  profilePic: {
    type: String,
    default: 'https://d30y9cdsu7xlg0.cloudfront.net/png/175172-200.png',
    required: false
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  allowContact: {
    type: Boolean,
    default: false,
    required: false
  },
  address: {
    type: Object,
    required: false
  },
  styles: {
    type: [String],
    required: false
  },
  portfolio: {
    type: [Object],
    required: false
  }
});

export default mongoose.model<Artist>('artist', artistSchema);
