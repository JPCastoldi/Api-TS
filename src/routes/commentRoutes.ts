import express from 'express';
import {
  createComment,
  getComments,
  getCommentById,
  updateComment,
  deleteComment
} from '../controllers/commentController';

const router = express.Router();

router.post('/comments', createComment);
router.get('/comments', getComments);
router.get('/comments/:id', getCommentById);
router.put('/comments/:id', updateComment);
router.delete('/comments/:id', deleteComment);

export default router;
