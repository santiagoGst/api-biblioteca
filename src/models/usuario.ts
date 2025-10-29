import { model, Document } from 'mongoose';
import userSchema from '../schemas/usuarioSchema';

interface IUser extends Document {
  name: string;
  email: string;
}

const UserModel = model<IUser>('User', userSchema);
export default UserModel;