import { Request, Response } from 'express';
import UserModel from '../models/usuario';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener usuarios' });
  }
};


export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener usuario' });
  }
};


export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = new UserModel(req.body); 
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err: any) => err.message);
      return res.status(400).json({ message: messages.join(', ') });
    }
    res.status(500).json({ message: 'Error al crear el usuario ' + error });
  }
};


export const updateUser = async (req: Request, res: Response) => {
  try {
    const existingUser = await UserModel.findById(req.params.id);
    if (!existingUser) return res.status(404).json({ message: 'Usuario no encontrado' });
    const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true  });
    res.json(updatedUser);
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err: any) => err.message);
      return res.status(400).json({ message: messages.join(', ') });
    }
    res.status(500).json({ message: 'Error al actualizar usuario ' + error  });
  }
};


export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deletedUser = await UserModel.findByIdAndDelete(req.params.id);  // Eliminar el usuario por ID
    if (!deletedUser) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json({ message: 'Usuario eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar usuario' });
  }
};
