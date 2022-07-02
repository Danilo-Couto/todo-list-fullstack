import prismaClient from "../dataBase/prismaClient"
import { Request, Response } from 'express';

const select =  {
    id: true,
    name: true, 
    content: true,
    TaskUser: {
        select: { id: true, id_user: true }
    }
}
export class TaskController {
    
    async create(req: Request, res: Response){
        const { name, content, userId} = req.body;
        const task = await prismaClient.taskUser.create({
            data: { 
                task: { create: { name, content } },
                user: { connect: { id: userId } }
            }
        });
        return res.json({'task created': task});
    }

    async updateOne(req: Request, res: Response){
        const { id } = req.params;
        const { name, editedContent, taskId } = req.body;
        const task = await prismaClient.task.update({
            where: {id: Number(id)},          
            data: {
                name,
                content: editedContent,
                TaskUser: { 
                    connect: {
                        id: taskId
                    }
                },
            }
        })
        return res.json({'task updated': task});
    }

    async findAll(_req: Request, res: Response){
        const tasks = await prismaClient.task.findMany({
            select
        })
        return res.json(tasks);
    }

    async findOne(req: Request, res: Response){
        const { id } = req.params;
        const task = await prismaClient.task.findUnique({
            where: {id: +id},
            select
        })
        return res.json(task);
    }

    async deleteOne(req: Request, res: Response){
        const { id } = req.params;
        const task = await prismaClient.task.delete({
            where: {id: +id},
        })
        return res.json(task);
    }

    async deleteAll(_req: Request, res: Response){
        const task = await prismaClient.task.deleteMany()
        return res.json(task);
    }
}