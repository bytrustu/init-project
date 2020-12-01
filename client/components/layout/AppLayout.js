import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const AppLayout = ({ children }) => {
  return (
    <>
      <div className={`main ${(true) ? 'overflow-hidden' : ''}`}>
        <Header />
        <Content children={children} />
        <Footer />
      </div>
    </>
  )
    ;
};

export default AppLayout;
