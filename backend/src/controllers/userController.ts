import prismaClient from "../dataBase/prismaClient"
import { Request, Response } from 'express';
import { createUserModel, findAllUserModel, findByIdUserModel } from "../model/userModel";

export const createUser = async (req: Request, res: Response) => {
    const { name, email, password, role } = req.body;
    const user = await createUserModel({ name, email, password, role});
    return res.json(user);
}

export const findAllUser = async (req: Request, res: Response)=>{
    const users = await findAllUserModel()
    return res.json(users);
}

export const findByIdUser = async (req: Request, res: Response)=>{
    const { id } = req.params;
    const user = await findByIdUserModel(+id)
    return res.json(user);
}
