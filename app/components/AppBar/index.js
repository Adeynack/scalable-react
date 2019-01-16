/**
*
* AppBar
*
*/

import React from 'react';


import styles from './styles.css';
import FontAwesome from 'react-fontawesome';

function AppBar() {
  return (
    <div className={styles.appBar}>
      <div className={styles.iconButton}>
        <FontAwesome className={styles.icon} name="bars" />
      </div>
      <div className={styles.heading}>
        Coder daily
      </div>
      <div className={styles.linkContainer}>
        Log In
      </div>
    </div>
  );
}

export default AppBar;
