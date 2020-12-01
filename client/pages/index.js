import React from 'react';
import { END } from 'redux-saga';
import axios from 'axios';
import wrapper from '../store/configureStore';

const IndexPage = () => {
  return (
    <>
      <div>indexjs</div>
    </>
  );

};
export default IndexPage;

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookies = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookies) {
    axios.defaults.headers.Cookie = cookies;
  }
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});