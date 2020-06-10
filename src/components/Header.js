import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import BrushIcon from '@material-ui/icons/Brush';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    typographyStyles: {
        flex: 1,
    },
  }));

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className = {classes.typographyStyles} variant="h3">
                Palette
                </Typography>
                <BrushIcon font-size="large"/>
            </Toolbar>
        </AppBar>
    )
}

export default Header;