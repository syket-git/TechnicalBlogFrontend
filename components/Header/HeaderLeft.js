import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Header.module.css';

const HeaderLeft = ({ mobile }) => {
  return (
    <div className={styles.logo}>
      {mobile ? (
        <h2>
          <Link href="/">
            <a>Technical Blog</a>
          </Link>
        </h2>
      ) : (
        <h1>
          <Link href="/">
            <a>Technical Blog</a>
          </Link>
        </h1>
      )}
    </div>
  );
};

export default HeaderLeft;
