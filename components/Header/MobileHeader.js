import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Header.module.css';
import { Drawer } from 'antd';
import { MenuFoldOutlined, CloseSquareFilled } from '@ant-design/icons';
import HeaderRight from './HeaderRight';
import HeaderLeft from './HeaderLeft';

export default function MobileHeader() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      <div className={styles.headers}>
        <HeaderLeft mobile={true} />
        <MenuFoldOutlined onClick={showDrawer} />
      </div>
      <Drawer
        title={<HeaderLeft mobile={true} />}
        placement="left"
        closable={true}
        closeIcon={<CloseSquareFilled style={{ color: 'white' }} />}
        onClose={onClose}
        visible={visible}
        bodyStyle={{
          background: 'rgb(21 39 46)',
          color: 'white',
          fontSize: '22px',
        }}
        headerStyle={{
          background: 'rgb(21 39 46)',
        }}
      >
        <div className={styles.mobile_headers}>
          <HeaderRight />
        </div>
      </Drawer>
    </div>
  );
}
