import { Router } from 'express';
import { UserController } from '../controllers/user';
import { TaskController } from "../controllers/task";
import { TaskUserController } from '../controllers/taskUser';

const router = Router();

const task = new TaskController(); // passar prismaClient por arg
const user = new UserController(); 
const taskUser = new TaskUserController(); 


router.post('/task', task.create);
router.get('/task', task.findAll);
router.get('/task/:id', task.findOne);
router.post('/taskwithuser', task.createWithUser);

router.delete('/task/', task.deleteAll);
router.delete('/task/:id', task.deleteOne);

router.post('/user', user.create);
router.get('/user', user.findAll);
router.get('/user/:id', user.findById);

router.post('/taskuser', taskUser.create);
router.get('/taskuser', taskUser.findAll);


export default router;
