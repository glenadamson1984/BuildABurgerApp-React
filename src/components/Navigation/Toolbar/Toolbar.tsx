import React from 'react';
import classes from './Toolbar.module.css'
import Logo from '../../../components/Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = (props:any) => (
    <>
        <header className={classes.Toolbar}>
            <div>MENU</div>
            <Logo />
            <NavigationItems />
        </header>
    </>
);

export default toolbar;