import { Request, Response } from 'express';
import { createTaskUserModel, findAllTaskUserModel } from '../model/taskUserModel';

export const createTaskUser = async (req: Request, res: Response) =>{
    const { id_task, id_user } = req.body;
    const taskUser = await createTaskUserModel({ id_task, id_user });
    return res.json(taskUser);
}

export const findAlTaskUser = async (req: Request, res: Response) =>{
    const users = await findAllTaskUserModel()
    return res.json(users);
}