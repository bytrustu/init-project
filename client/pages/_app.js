import React  from 'react';
import PropTypes from 'prop-types';
import wrapper from '../store/configureStore';
import AppLayout from '../components/Layout/AppLayout';
import "bootstrap/dist/css/bootstrap.min.css";
import { Head } from 'next/document';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" className="next-head"/>
      <AppLayout>
        <Head>
          <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=Edge; chrome=1" />
          <meta property="og:type" content="website" />
          <title>도화</title>
        </Head>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(MyApp);