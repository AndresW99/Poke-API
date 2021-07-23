import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography, Button, Box } from '@material-ui/core';
import pika from '../images/pikachu.jpg';

const useStyles = makeStyles({

    root: {
        maxWidth: 345,
    },
    margen: {
        marginTop: 24,
        marginBottom: 24
    },
    media: {
        height: 120,
    },
    details: {
        display: "flex",
        flexDirection: 'column'
    }
});

export const Informacion = () => {

    const classes = useStyles();

    return (
        <div className={ classes.margen } >
            <Box display="flex" justifyContent="center" alignItems="center">
                <Card className={ classes.root } justify="center" >
                    <div className={ classes.details }>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" >
                                    Pokemon
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" >
                                    Esta es una prueba de como se deberian de ver los datos una vez renderizados en la tarjeta
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button  size="small" variant="contained" color="primary">
                                Poke                      
                            </Button>
                        </CardActions>
                            <CardMedia 
                                className={ classes.media }
                                image={pika}
                                title="Pikachu"
                            />
                    </div>
                </Card>
            </Box>
        </div>
    )
}
