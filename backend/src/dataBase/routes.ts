import { Router } from 'express';
import { createTask, deleteAll, deleteOne, findAll, findOne, updateOne } from '../controllers/taskController';
import { createTaskUser } from '../controllers/taskUserController';
import { createUser, findAllUser, findByIdUser } from '../controllers/userController';
import { findAllTaskUserModel } from '../model/taskUserModel';

const router = Router();

router.get('/task/:id', findOne);
router.put('/task/:id', updateOne);
router.delete('/task/:id', deleteOne);
router.post('/task', createTask);
router.get('/task', findAll);
router.delete('/task/', deleteAll);

router.get('/user/:id', findByIdUser);
router.post('/user', createUser);
router.get('/user', findAllUser);

router.post('/taskuser', createTaskUser);
router.get('/taskuser', findAllTaskUserModel);

export default router;
