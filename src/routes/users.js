import { Router } from 'express';
import UserService from '../services/UserService';

const router = Router();
const service = new UserService();

router.get('/', (req, res, next) => {
  const users = service.findAll();
  res.send(users);
});

export default router;
