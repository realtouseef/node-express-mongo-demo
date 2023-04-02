import express from 'express';
import {
  createGoal,
  deleteGoal,
  getAllGoals,
  getSingleGoal,
  updateGoal,
} from '../controllers/goals.controller.js';

const router = express.Router();

router.route('/').get(getAllGoals).post(createGoal);
router.route('/:id').get(getSingleGoal).patch(updateGoal).delete(deleteGoal);

export default router;
