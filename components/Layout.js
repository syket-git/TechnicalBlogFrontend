import React from 'react';
import Head from 'next/head';
import 'antd/dist/antd.css';
import Header from './Header/Header';

const Layout = ({ children, title, description, keywords }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      {children}
    </div>
  );
};

Layout.defaultProps = {
  title: 'Technical Blog',
  description:
    'This is a single user blog,this blog basically based on technical, developer resource',
  keywords:
    'Technical Blog, Developer Resource, React JS, web developer, Node JS',
};

export default Layout;
