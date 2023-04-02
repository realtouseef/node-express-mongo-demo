import mongoose from 'mongoose';

const GoalsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title for your goal.'],
      trim: true,
    },
    description: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Goals = mongoose.model('Goals', GoalsSchema);
