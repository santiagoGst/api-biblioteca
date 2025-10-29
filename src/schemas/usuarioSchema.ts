import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: [true, 'El nombre es requerido']
    },
    email: { 
      type: String, 
      required: [true, 'El correo electrónico es requerido'], 
      unique: [true, 'El correo electrónico ya se encuentra registrado']
    }
  },
  { timestamps: true }
);

export default usuarioSchema;