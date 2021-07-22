import React from 'react';
import { Box,
         Container,
         CssBaseline,
         Grid,
         makeStyles,
         Typography, CardMedia } from '@material-ui/core';

import saludos from '../images/saludo.jpg'
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
  }));

export const Saludo = () => {

    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <Container maxWidth="md" >
                <Box className={classes.typedContainer}>
                    <Grid container justifyContent="center">
                        <CardMedia
                          title="Andres"
                          image={saludos}
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
