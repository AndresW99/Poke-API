import React from 'react';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';

import { makeStyles } from '@material-ui/core';
import { AppBar,
         Toolbar,
         Typography,
         Button } from '@material-ui/core';
import yellow from '@material-ui/core/colors/yellow';
    
import { NavLink } from 'react-router-dom';     
import poke from '../images/pokemon.png'
    

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
    },
    logo: {
        maxWidth: 120,
    },
    color: {
        color: yellow[300],
    }
})); 

// Barra de navegación con las rutas a cada pagina
export const Navbar = () => {

    const classes = useStyles();

    return (
        <div className={ classes.root }>
                <AppBar position="static">
                    <Toolbar>
                        <HomeIcon className={ classes.color } fontSize="small" />
                        <Typography variant="h6" className={classes.title}>
                            <NavLink className={ classes.text } activeClassName="active" exact to="/home">
                                Home
                            </NavLink>
                        </Typography>

                        <Typography variant="h6" className={classes.title}>
                            <img src={poke} alt="logo" className={classes.logo} />
                        </Typography>

                        <Button color="inherit">
                            <NavLink className={ classes.text } exact to="/pokes">
                                Pokemones
                            </NavLink>
                            <ChevronRightIcon className={ classes.color } />
                        </Button>
                    </Toolbar>
                </AppBar>
        </div>
    )
}
