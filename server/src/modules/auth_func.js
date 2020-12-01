import jwt from 'jsonwebtoken';
import config from '../config';
import * as db from '../modules/db_query';

const { JWT_SECRET } = config;

export const createToken = (id) => {
  return jwt.sign({
    user: id,
  }, JWT_SECRET, {
    expiresIn: '2 days',
  });
};

export const isLogin = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(404).json({ msg: '토큰이 없음. 인증이 거부됨.' });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const findUserByEmail = await db.findUserByEmail(decoded.user);
    if (findUserByEmail.length === 0) {
      return res.status(404).json({ msg: '유저가 존재하지 않습니다.' });
    }
    req.params.userId = findUserByEmail[0].id;
    next();
  } catch (e) {
    console.error(e);
    res.status(404).json({ msg: '토큰이 유효하지 않습니다.' });
  }
};