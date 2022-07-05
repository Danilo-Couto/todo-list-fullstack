import TaskModel from '../models/task';

export default class TaskService {
  taskModel: TaskModel;
  constructor(){
    this.taskModel = new TaskModel();
  }

  async create(name: string, content: string, userId: number) {
    const task = this.taskModel.create(name, content, userId);
    return;
  }

  async updateOne(id: number, name: string, editedContent: string, taskId: number) {
    const task = this.taskModel.updateOne( id, name, editedContent, taskId);
    return;
  }

  async findAll() {
    const tasks = this.taskModel.findAll();
    return;
  }

  async findOne(id: number) {
    const task = this.taskModel.findOne(id);
    return;
  }

  async deleteOne(id: number) {
    const task = this.taskModel.deleteOne(id);
    return;
  }

  async deleteAll() {
    const task = this.taskModel.deleteAll();
    return;
  }
}
