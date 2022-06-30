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

    async findById(req: Request, res: Response){
        const { id } = req.params;
        const product = await prismaClient.task.findUnique({
            where: {id: +id},
            include: {TaskUser: true}
        })
        return res.json(product);
    }
}