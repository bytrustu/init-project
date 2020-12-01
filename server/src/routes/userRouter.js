import express from 'express';
import bcrypt from 'bcrypt';
import * as db from '../modules/db_query';
import * as auth_func from '../modules/auth_func';
const router = express.Router();


/**
 * @route   POST api/user/auth
 * @return  { string } email
 * @desc    유저 인증
 * @access  private
 */
router.get('/auth', auth_func.isLogin, async (req, res, next) => {
  const userId = req.params.userId;
  res.status(200).json(userId);
});

export default router;