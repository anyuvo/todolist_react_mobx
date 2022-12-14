import React from 'react';

import styles from './Header.module.scss';

interface HeaderProps {
    todoCount: number;
}

const Header: React.FC<HeaderProps> = ({ todoCount }) => (
    <div className={styles.header_container}>
        <h1 className={styles.header_title}>
            Todo list <b>{todoCount}</b> task(s)
        </h1>
    </div>
);

export default Header;