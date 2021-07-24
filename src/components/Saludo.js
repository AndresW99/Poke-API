import React from 'react';
import { Box,
         Container,
         CssBaseline,
         Grid,
         makeStyles,
         Typography } from '@material-ui/core';

import saludos from '../images/wallpaperPoke.jpg'
import amarillo from '@material-ui/core/colors/yellow';
import morado from '@material-ui/core/colors/purple';


const useStyles = makeStyles((theme) => ({
    avatar: {
      width: theme.spacing(15),
      height: theme.spacing(15),
      margin: theme.spacing(1),
    },
    title: {
      color: amarillo,
      marginTop: 10
    },
    subtitle: {
      color: morado[800],
      textTransform: "uppercase",
    },
    typedContainer: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      width: "100vw",
      textAlign: "center",
      zIndex: 1,
    },
    img: {
      borderRadius: 30,
      width: 500,
    }
  }));

export const Saludo = () => {

    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <Container maxWidth="md" >
                <Box className={classes.typedContainer}>
                    <Grid container justifyContent="center">
                        <img
                          alt="Titulo"
                          src={saludos}
                          className={ classes.img }
                        />
                    </Grid>
                    <Typography className={classes.title} variant="h4">
                        Bienvenido a la Pokemon API!!
                    </Typography>

                    <Typography className={classes.subtitle} variant="h5">
                        Pulsa arriba a la derecha para ver el listado!!
                    </Typography>
                </Box>
            </Container>   
        </>
    )
}
