import React from 'react';
import styles from '../../styles/Header.module.css';
import Link from 'next/link';

const HeaderRight = () => {
  const authLink = () => (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/dashboard">
              <a>Dashboard</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
  const guestLink = () => (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/signup">
              <a>Sign up</a>
            </Link>
          </li>
          <li>
            <Link href="/signin">
              <a>Sign in</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
  return <div>{guestLink()}</div>;
};

export default HeaderRight;
