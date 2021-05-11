import User from '../models/user.model';
const userController = {
  async addUser(req, res) {
    try {
      const { name, email, country } = req.body;
      const user = await User.findOne({ email });
      if (user) {
        return res.status(401).json({
          message: 'User already exist',
        });
      }
      const newUser = new User({ name, email, country });
      const data = await newUser.save();
      res.status(201).json({
        message: 'User created successfully',
        data,
      });
    } catch (error) {
      res.status(404).json({
        message: 'A new user can not be created...',
        data: error,
      });
    }
  },
  async retrieveUsers(req, res) {
    try {
      const users = await User.find({});
      return res.status(200).json({
        message: 'Users retrieved successfully',
        data: users,
      });
    } catch (error) {
      return res.status(400).json({
        message: 'There is an error',
        data: error,
      });
    }
  },

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { name, email, country } = req.body;
      const user = await User.findOneAndUpdate(
        { _id: id },
        { name, email, country },
        {
          new: true,
          upsert: true,
        },
        { useFindAndModify: false }
      );
      return res.status(200).json({
        message: 'User updated successfully',
        data: user,
      });
    } catch (error) {
      console.log(error);
      return res.status(404).json({
        message: error,
      });
    }
  },

  async removeUser(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findOneAndDelete(
        { _id: id },
        { useFindAndModify: false }
      );
      return res.status(200).json({
        message: 'User deleted successfully',
        data: user,
      });
    } catch (error) {
      return res.status(404).json({
        message: error,
      });
    }
  },
};

export default userController;
