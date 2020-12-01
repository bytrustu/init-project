import * as db from '../config/mysql_connect';

export const findUserByEmail = async (email) => {
  try {
    const SQL = `select id, pw from User where id = ?`;
    const SQL_VALUES = [email];
    const [row] = await db.connect((con) => con.query(SQL, SQL_VALUES))();
    return row;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};