import express from 'express';
import {
  createGoal,
  deleteGoal,
  getAllGoals,
  getGoal,
  updateGoal,
} from '../controllers/goals.controller.js';

const router = express.Router();

router.route('/').get(getAllGoals).post(createGoal);
router.route('/:id').get(getGoal).patch(updateGoal).delete(deleteGoal);

export default router;
