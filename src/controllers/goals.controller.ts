import { Request, Response } from 'express';

const getAllGoals = (req: Request, res: Response) => {
  res.json({ message: 'Every goals will be here.' });
};

const createGoal = (req: Request, res: Response) => {
  res.json(req.body);
};

const getGoal = (req: Request, res: Response) => {
  res.json({ id: req.params.id });
};

const updateGoal = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Updated Goal ${id}` });
};

const deleteGoal = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Deleted Goal ${id}` });
};

export { getAllGoals, createGoal, getGoal, updateGoal, deleteGoal };
