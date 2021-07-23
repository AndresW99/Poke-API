import { Box,
         Card,
         CardContent,
         CardMedia,
         Divider,
         makeStyles,
         Typography } from '@material-ui/core'
import React from 'react'
import pika from '../images/pikachu.jpg';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      maxWidth: 345
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
      height: 228
    },
    margen: {
        marginTop: 24,
        marginBottom: 24
    },
  }));

export const Informacion = (props) => {

    const classes = useStyles();

    return (
        <div className={ classes.margen } >
            <Box display="flex" justifyContent="center" alignItems="center">
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.cover}
                        image={pika}
                        title="Live from space album cover"
                    />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>

                        <Typography component="h5" variant="h5">
                            Pikachu
                        </Typography>

                        <Divider/>

                        <Typography variant="subtitle1" color="textPrimary">
                            Tipo:
                        </Typography>

                        <Typography variant="body1" color="textSecondary">
                            Electrico
                        </Typography>

                        <Typography variant="subtitle1" color="textPrimary">
                            Primera habilidad:
                        </Typography>

                        <Typography variant="body1" color="textSecondary">
                            Impactrueno
                        </Typography>

                        <Typography variant="subtitle1" color="textPrimary">
                            Segunda habilidad:
                        </Typography>

                        <Typography variant="body1" color="textSecondary">
                            Rayo
                        </Typography>

                        </CardContent>
                    </div>
                </Card>
            </Box>
        </div>
    )
}
