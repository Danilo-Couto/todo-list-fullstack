import prismaClient from "../dataBase/prismaClient"

export const select =  {
    id: true,
    name: true, 
    content: true,
    TaskUser: {
        select: { id: true, id_user: true }
    }
}
export const createModel = async ({name, content, userId}:any) => {
    const task = await prismaClient.taskUser.create({
        data: { 
            task: { create: { name, content } },
            user: { connect: { id: userId } }
        }
    });
    return task;
}

export const updateOneModel = async ({id, name, editedContent, taskId}:any) => {
    const task = await prismaClient.task.update({
        where: {id: Number(id)},          
        data: {
            name,
            content: editedContent,
            TaskUser: { connect: {id: taskId}},
        }
    });
    return task;
};

export const findAllModel = async () => {
    return await prismaClient.task.findMany({
        select
    });
};

export const findOneModel = async (id:any) => {
    console.log(id);
    const task = await prismaClient.task.findUnique({
        where: {id: +id},
        select
    })
    return task;
}

export const deleteOneModel = async (id:Number) => {
    console.log('delete')
    const task = await prismaClient.task.delete({
        where: {id},
    });
    return task;
}

export const deleteAllModel = async () => {
    await prismaClient.task.deleteMany()
    return true;
}
