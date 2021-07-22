import React from 'react';

import { makeStyles } from '@material-ui/core';
import yellow from '@material-ui/core/colors/yellow';
import { AppBar,
         Toolbar,
         Typography,
         Button } from '@material-ui/core';

import { NavLink } from 'react-router-dom';     


const texto = yellow[500];

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
    },
    marginButtom: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    text: {
        textDecoration: 'none',
        color: texto
    }
})); 

export const Navbar = () => {

    const classes = useStyles();

    return (
        <div className={ classes.root }>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            <NavLink className={ classes.text } activeClassName="active" exact to="/home">
                                Home
                            </NavLink>
                        </Typography>

                        <Button color="inherit">
                            <NavLink className={ classes.text } exact to="/pokes">
                                Pokes
                            </NavLink>
                        </Button>
                    </Toolbar>
                </AppBar>
        </div>
    )
}
