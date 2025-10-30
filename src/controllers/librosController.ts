import { Request, Response } from 'express';
import Book from '../models/libro';
import UserModel from '../models/usuario';
import mongoose from 'mongoose';


export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find().populate('user', 'name email');
    res.json(books);
  } catch {
    res.status(500).json({ message: 'Error al obtener los libros' });
  }
};


export const getBooksByUser = async (req: Request, res: Response) => {
  try {
    const userObjectId = new mongoose.Types.ObjectId(req.params.id);
    const books = await Book.find({ user: userObjectId }).populate('user', 'name email');
    res.json(books);
  } catch {
    res.status(500).json({ message: 'Error al obtener los libros del usuario' });
  }
};


export const getBookById = async (req: Request, res: Response) => {
  try {
    const book = await Book.findById(req.params.id).populate('user', 'name email');
    if (!book) return res.status(404).json({ code:404, message: 'Libro no encontrado' });
    res.json(book);
  } catch {
    res.status(500).json({ code:500, message: 'Error al obtener el libro' });
  }
};


export const createBook = async (req: Request, res: Response) => {
  try {
    const userExists = await UserModel.findById(req.body.user);
    if (!userExists) {
      return res.status(400).json({ code:400, message: 'El usuario especificado no existe' });
    }
    const newBook = new Book(req.body);
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error: any) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'El usuario ya tiene un libro con este título' });
    }
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: 'Error al crear el libro' });
  }
};


export const updateBook = async (req: Request, res: Response) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedBook) return res.status(404).json({ message: 'Libro no encontrado' });
    res.json(updatedBook);
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: 'Error al actualizar el libro' });
  }
};


export const deleteBook = async (req: Request, res: Response) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) return res.status(404).json({ message: 'Libro no encontrado' });
    res.json({ message: 'Libro eliminado correctamente' });
  } catch {
    res.status(500).json({ message: 'Error al eliminar el libro' });
  }
};
