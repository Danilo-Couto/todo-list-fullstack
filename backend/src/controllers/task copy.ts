import prismaClient from "../dataBase/prismaClient"
import { Request, Response } from 'express';

export class TaskController {
    async create(req: Request, res: Response){
        const { name, content } = req.body;

        const task = await prismaClient.task.create({
           data: {name, content}
        });
        return res.json(task);
    }

    async createWithUser(req: Request, res: Response){
        const { name, content, id_user} = req.body;

        const task = await prismaClient.taskUser.create({
            data: { 
                task: {
                    create: { name, content }
                },
            user: {
                connect: { id: id_user }
             }
            }
        });
        return res.json(task);
    }

    async findAll(_req: Request, res: Response){
        const tasks = await prismaClient.task.findMany({
            include: {TaskUser: true}
        })
        return res.json(tasks);
    }

    async findOne(req: Request, res: Response){
        const { id } = req.params;
        const task = await prismaClient.task.findUnique({
            where: {id: +id},
            include: {TaskUser: true}
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