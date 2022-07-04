import prismaClient from '../dataBase/prismaClient';

export default class TaskModel {

  async findAll() {
    const tasks = await prismaClient.task.findMany()
    return tasks;
  }

  async findOne(id: number) {
    const task = await prismaClient.task.findUnique({
      where: { id: +id },
    });
    return task;
  }
  
  async create(name: string, content: string, status: string, userId: number) {
    const task = await prismaClient.task.create({
      data: { name, content, status, userId } ,
    });
    return task;
  }

  async updateOne(id: number, name: string, content: string, status: string, userId: number) {
    const task = await prismaClient.task.update({
      where: { id },
      data: { name, content, status, userId }})
    return task;
  }


  async deleteOne(id: number) {
    const task = await prismaClient.task.delete({
      where: { id: +id },
    });
    return task;
  }

  async deleteAll() {
    const task = await prismaClient.task.deleteMany();
    return task;
  }
}
