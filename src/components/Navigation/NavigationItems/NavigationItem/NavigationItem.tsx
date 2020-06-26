import React from 'react';
import navigationItems from '../NavigationItems';
import classes from './NavigationItem.module.css'

const navigationItem = (props:any) => (
    <li className={classes.NavigationItem}>
        <a href={props.link}
            className={props.active ? classes.active : ""}>
                {props.children}
        </a>
    </li>
);

export default navigationItem;