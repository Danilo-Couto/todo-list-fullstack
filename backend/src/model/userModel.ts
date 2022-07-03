import prismaClient from "../dataBase/prismaClient"

export const createUserModel = async ({name, email, password, role}: any) => {
    return await prismaClient.user.create({
        data: { name, email, password, role }
    });
}

export const findAllUserModel = async () =>{
    return await prismaClient.user.findMany()
}

export const findByIdUserModel = async (id:Number) => {
    return await prismaClient.user.findUnique({
        where: {id},
        include: {TaskUser: true}
    })
}
