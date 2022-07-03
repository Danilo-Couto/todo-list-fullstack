import prismaClient from "../dataBase/prismaClient"
   
export const createTaskUserModel = async ({id_task, id_user}:any) => {
    const taskUser = await prismaClient.taskUser.create({
        data: {id_task, id_user}
    });
    return taskUser;
}

export const findAllTaskUserModel = async () => {
    return await prismaClient.taskUser.findMany()
}
