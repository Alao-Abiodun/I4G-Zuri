import mongoose from 'mongoose';

const schema = mongoose.Schema;

const userSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model('user', userSchema);

export default userModel;
