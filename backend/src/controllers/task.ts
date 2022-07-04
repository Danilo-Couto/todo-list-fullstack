import { Request, Response } from 'express';
import TaskModel from '../models/task';

export default class TaskController {
  constructor(private taskModel= new TaskModel()){
  }

  // async create(req: Request, res: Response) {
  //   const { name, content, userId } = req.body;
  //   const task = this.taskModel.create(name, content, userId);
  //   return res.json({ 'task created': task });
  // }

  findAll = async(_req: Request, res: Response) => {
    const tasks = await this.taskModel.findAll();
    return res.json({ 'tasks': tasks });
  }

  async updateOne(req: Request, res: Response) {
    const { id } = req.params;
    const { name, editedContent, taskId } = req.body;
    const task = this.taskModel.updateOne(+id, name, editedContent, taskId);
    return res.json({ 'task updated': task });
  }

  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const task = this.taskModel.findOne(+id);
    return res.json({ 'task': task });
  }

  async deleteOne(req: Request, res: Response) {
    const { id } = req.params;
    const task = this.taskModel.deleteOne(+id);
    return res.json({ 'deleted task': task });
  }

  async deleteAll(_req: Request, res: Response) {
    this.taskModel.deleteAll();
    return res.json('all tasks deleted');
  }
}
