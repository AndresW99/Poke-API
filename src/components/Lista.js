import { 
         TableCell,
         TableRow, Button} from '@material-ui/core'
import React, { useContext, useState } from 'react'
import { UserContext } from '../UserContext'



export const Lista = (props) => {

    // Mediante context enviamos los datos del poke seleccionado a un state global
    const { obtener } = useContext(UserContext);

    const [, setPokeSelec] = useState([]);
    
    // Extrae los datos de la tabla y setea en context
    const seleccionarFila = ( poke ) => {

        setPokeSelec( poke );
        obtener(poke)
    }
    
    // Por medio de props enviadas de PokemonApi renderizamos los campos que necesitamos
    return (

        <>
            <TableRow key={ props.info.name }>
                <TableCell align="center" component="th" scope="row">
                    { props.info.name }
                </TableCell>
                <TableCell align="center">{ props.info.abilities[0].ability.name}</TableCell>
                <TableCell align="center">
                    <img src={ props.info.sprites.front_default } alt={ props.info.name } style={{ height: 60 }} />
                </TableCell>
                <TableCell align="center">
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
