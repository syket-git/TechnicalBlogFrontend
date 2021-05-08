import Link from 'next/link';
import styles from '../../styles/Header.module.css';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

export default function desktopHeader() {
  return (
    <div className={styles.headers}>
      <HeaderLeft />
      <HeaderRight />
    </div>
  );
}
