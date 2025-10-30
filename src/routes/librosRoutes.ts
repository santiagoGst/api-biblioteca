import { Router } from 'express';
import { getBooks, getBooksByUser, getBookById, createBook, updateBook, deleteBook } from '../controllers/librosController';
import { validateId } from '../middlewares';

const booksRouter = Router();

booksRouter.get('/books/', getBooks);
booksRouter.get('/books/user/:id', validateId, getBooksByUser);
booksRouter.get('/books/:id', validateId, getBookById);
booksRouter.post('/books/', createBook);
booksRouter.put('/books/:id', validateId, updateBook);
booksRouter.delete('/books/:id', validateId, deleteBook);

export default booksRouter;
