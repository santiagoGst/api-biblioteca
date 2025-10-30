import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'El título es requerido'],
      maxlength: [100, 'El titulo no puede tener más de 100 caracteres']
    },
    author: {
      type: String,
      required: [true, 'El autor es requerido'],
      maxlength: [100, 'El nombre del autor no puede tener más de 50 caracteres']
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'El usuario es requerido']
    }
  },
  { timestamps: true }
);
bookSchema.index({ title: 1, user: 1 }, { unique: true });

export default bookSchema;
