import { Schema, model, Document } from 'mongoose';
import bookSchema from '../schemas/libroSchema';

export interface IBook extends Document {
  title: string;
  author: string;
  user: Schema.Types.ObjectId;
}

const BookModel = model<IBook>('Book', bookSchema);
export default BookModel;
