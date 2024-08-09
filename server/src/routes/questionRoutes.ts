import { Router } from 'express';
import { createQuestion, getQuestions } from '../controllers/questionController';
import { protect } from '../middleware/authMiddleware';
import roleMiddleware from '../middleware/roleMiddleware';

const router = Router();

router.post('/questions', protect, roleMiddleware('Admin'), createQuestion);
router.get('/questions', protect, getQuestions);

export default router;
