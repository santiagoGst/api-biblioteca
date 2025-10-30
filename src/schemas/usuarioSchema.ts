import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: [true, 'El nombre es requerido'],
      maxlength: [50, 'El nombre no puede tener más de 50 caracteres']
    },
    email: { 
      type: String, 
      required: [true, 'El correo electrónico es requerido'], 
      unique: [true, 'El correo electrónico ya se encuentra registrado'],
      match: [/.+\@.+\..+/, 'El formato del correo electrónico no es válido']
    }
  },
  { timestamps: true }
);

export default userSchema;