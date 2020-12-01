import * as mysql from 'mysql2/promise';
import config from '../config/index';

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = config;

const mysqlConfig = {
  host: DB_HOST,
  port: 3306,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  connectionLimit: 100,
  waitForConnections: true,
};

const pool = mysql.createPool(mysqlConfig);

export const connect = (fn) => async (...args) => {
  const con = await pool.getConnection();
  const result = await fn(con, ...args).catch(async (error) => {
    con.release();
    throw error;
  });
  con.release();
  return result;
};

export const transction = (fn) => async (...args) => {
  const con = await pool.getConnection();
  await con.beginTransaction();
  const result = await fn(con, ...args).catch(async (error) => {
    await con.rollback();
    con.release();
    throw error;
  });
  await con.commit();
  con.release();
  return result;
};