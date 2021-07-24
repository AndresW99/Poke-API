import { Box,
         Card,
         CardContent,
         CardMedia,
         Divider,
         makeStyles,
         Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { UserContext } from '../UserContext';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      maxWidth: 345,
      borderRadius: 20,
      background: '#8BA8F9'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 200,
      height: 225,
    },
    margen: {
        marginTop: 24,
        marginBottom: 24,
    },
  }));

export const Informacion = () => {

    //Recibimos la data de la tabla por medio de context y la renderizamos
    const userContext = useContext(UserContext);

    const classes = useStyles();

    return (
        <div className={ classes.margen } >
            <Box display="flex" justifyContent="center" alignItems="center"  >
                <Card className={classes.root}  >
                    <CardMedia
                        className={classes.cover}
                        image={ userContext.data.result.sprites.front_shiny }
                        title="Live from space album cover"
                    />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>

                        <Typography component="h5" variant="h5">
                            {  userContext.data.result.name  }
                        </Typography>

                        <Divider/>

                        <Typography variant="subtitle1" color="textPrimary">
                            Tipo:
                        </Typography>

                        <Typography variant="body1" color="textSecondary">
                            { userContext.data.result.types[0].type.name } 
                        </Typography>

                        <Typography variant="subtitle1" color="textPrimary">
                            Ataque primario:
                        </Typography>

                        <Typography variant="body1" color="textSecondary">
                            { userContext.data.result.moves[0].move.name }
                        </Typography>

                        <Typography variant="subtitle1" color="textPrimary">
                            Ataque secundario:
                        </Typography>

                        <Typography variant="body1" color="textSecondary">
                            { userContext.data.result.moves[1].move.name  }
                        </Typography>

                        </CardContent>
                    </div>
                </Card>
            </Box>
        </div>
    )
}
