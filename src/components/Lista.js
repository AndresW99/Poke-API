import { 
         TableCell,
         TableRow, Button} from '@material-ui/core'
import React, { useContext, useState } from 'react'
import { UserContext } from '../UserContext'



export const Lista = (props) => {

    const { obtener } = useContext(UserContext);

    const [, setPokeSelec] = useState([]);
    
    // Extrae los datos de la tabla
    const seleccionarFila = ( poke ) => {

        setPokeSelec( poke );
        obtener(poke)
    }
    
    return (

        <>
            <TableRow key={ props.info.id }>
                <TableCell component="th" scope="row">
                    { props.info.id }
                </TableCell>
                <TableCell align="right">{ props.info.name }</TableCell>
                <TableCell align="right">{ props.info.abilities[0].ability.name}</TableCell>
                <TableCell align="right">
                    <img src={ props.info.sprites.front_default } alt={ props.info.name } style={{ height: 60 }} />
                </TableCell>
                <TableCell align="right">
                    <Button 
                        variant="contained" 
                        color="primary" 
                        size="small" 
                        // Aqui extraigo la data de la tabla
                        onClick={ () => seleccionarFila( props.info ) }
                    >
                        Seleccionar
                    </Button>
                    </TableCell>
            </TableRow>
        </>
    )
}
