import { Request, Response } from 'express';
import { createModel, deleteOneModel, findAllModel, findOneModel, updateOneModel } from "../model/taskModel";

export const createTask = async (req: Request, res: Response) => {
    const { name, content, userId} = req.body;
    const task = await createModel({name, content, userId});
    return res.json({'task created': task});
}

export const findOne = async (req: Request, res: Response) => {
    const { id } = req.params;
    const task = await findOneModel(+id)
    return res.json(task);
}

export const updateOne = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, editedContent, taskId } = req.body;
    const task = await updateOneModel({id, name, editedContent, taskId});
    return res.json({task});
}

export const findAll = async (req: Request, res: Response) => {
    const tasks = await findAllModel();
    return res.json(tasks);
}

export const deleteOne = async (req: Request, res: Response) => {
        const { id } = req.params;
        const task = await deleteOneModel(+id);
        return res.json({'task deleted': task});
    }

export const deleteAll = (req: Request, res: Response) => {
    deleteAll
    return res.json('All task deleted');
};
