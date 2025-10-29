import { Schema, model, Document } from 'mongoose';
import usuarioSchema from '../schemas/usuarioSchema';


interface IUser extends Document {
  name: string;
  email: string;
}

export default model<IUser>('User', usuarioSchema);
