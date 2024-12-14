import { Router, Request, Response } from 'express';

import { UserController } from '../controllers/UserController';

const router = Router();

const userController = new UserController();

/**
 * @swagger
 * /users:
 *   get:
 *     description: Get all users
 *     responses:
 *       200:
 *         description: Successfully fetched users
 */
router.get('/users', (req: Request, res: Response) => {
  userController.getAll(req, res);
});

router.get('/user/:id', (req: Request, res: Response) => {
  userController.getByID(req, res);
});

router.put('/user', (req: Request, res: Response) => {
  userController.update(req, res);
});

router.delete('/user/:id', (req: Request, res: Response) => {
  userController.delete(req, res);
});

router.post('/user', (req: Request, res: Response) => {
  userController.create(req, res);
});

export { router as userRoutes };
