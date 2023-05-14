import express from 'express';
import * as activitController from '../controllers/activity.Controller';
import { authMiddleware } from '../middlewares/authenticateQuery';

const router = express.Router();

router.post('/activity', activitController.createActivityController);
router.get('/activity/list', activitController.listActivityController);
router.get('/activity', authMiddleware, activitController.fetchActivity);
router.delete('/activity', activitController.clearActivitiesController);

export default router;