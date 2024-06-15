import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createComment = async (req: Request, res: Response) => {
  const { content, postId, authorId } = req.body;
  try {
    const comment = await prisma.comment.create({
      data: {
        content,
        postId,
        authorId,
      },
    });
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: 'Comment creation failed' });
  }
};

export const getComments = async (req: Request, res: Response) => {
  try {
    const comments = await prisma.comment.findMany({
      include: {
        post: true,
        author: true,
      },
    });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve comments' });
  }
};

export const getCommentById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const comment = await prisma.comment.findUnique({
      where: { id: Number(id) },
      include: {
        post: true,
        author: true,
      },
    });
    if (comment) {
      res.json(comment);
    } else {
      res.status(404).json({ error: 'Comment not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve comment' });
  }
};

export const updateComment = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { content } = req.body;
  try {
    const comment = await prisma.comment.update({
      where: { id: Number(id) },
      data: { content },
    });
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: 'Comment update failed' });
  }
};

export const deleteComment = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.comment.delete({
      where: { id: Number(id) },
    });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Comment deletion failed' });
  }
};
