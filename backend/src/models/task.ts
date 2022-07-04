import prismaClient from '../dataBase/prismaClient';

const select = {
  id: true,
  name: true,
  content: true,
  TaskUser: {
    select: { id: true, id_user: true },
  },
};

export default class TaskModel {

  async findAll() {
    const tasks = await prismaClient.task.findMany({select})
    return tasks;
  }

  async findOne(id: number) {
    const task = await prismaClient.task.findUnique({
      where: { id: +id },
      select,
    });
    return task;
  }
  
  // async create(name: string, content: string, userId: number) {
  //   const task = await prismaClient.taskUser.create({data: { name, content, userId}});
  //   return task;
  // }

  async updateOne(id: number, name: string, editedContent: string, taskId: number) {
    const task = await prismaClient.task.update({
      where: { id: Number(id) },
      data: {
        name,
        content: editedContent,
        TaskUser: {
          connect: {
            id: taskId,
          },
        },
      },
    });
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
