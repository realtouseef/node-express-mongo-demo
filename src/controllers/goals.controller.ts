import { Request, Response } from 'express';
import { Goals } from '../models/goals.model.js';

const getAllGoals = async (req: Request, res: Response) => {
  try {
    const allGoals = await Goals.find();
    res.status(200).json({ allGoals });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createGoal = async (req: Request, res: Response) => {
  try {
    const goal = await Goals.create(req.body);
    res.status(201).json({ goal });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getSingleGoal = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const goal = await Goals.findOne({ _id: id });
    if (!goal) {
      return res.status(404).json({ msg: `No goal with the id: ${id}` });
    }
    res.status(200).json({ goal });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateGoal = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const goal = await Goals.findByIdAndUpdate({ _id: id }, req.body);

    if (!goal)
      return res.status(404).json({ msg: `No goal found with the id: ${id}` });

    res.status(200).send({ goal });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};

const deleteGoal = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const goal = await Goals.findOneAndDelete({ _id: id });
    if (!goal)
      return res.status(404).json({ msg: `No goal found with the id: ${id}` });
    res.status(200).json({ goal });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export { getAllGoals, createGoal, getSingleGoal, updateGoal, deleteGoal };
