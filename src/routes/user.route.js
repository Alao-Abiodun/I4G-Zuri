import express from 'express';
import userController from '../controllers/user.controller';

const router = express.Router();

router.get('/users', userController.retrieveUsers);
router.post('/user', userController.addUser);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.removeUser);

export default router;
