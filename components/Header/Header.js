import React from 'react';
import styles from '../../styles/Header.module.css';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';
const Header = () => {
  return (
    <div>
      <div className={styles.desktopHeader}>
        <DesktopHeader />
      </div>
      <div className={styles.mobileHeader}>
        <MobileHeader />
      </div>
    </div>
  );
};
export default Header;
