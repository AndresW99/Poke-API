import { 
         TableCell,
         TableRow, Button} from '@material-ui/core'
import React, { useState } from 'react'
// import { Informacion } from './Informacion'

export const Lista = (props) => {
    
    const [, setPokeSelec] = useState({
    })
    
    const seleccionarFila = ( poke ) => {

        setPokeSelec( poke );
        console.log(poke);
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
                        onClick={ () => seleccionarFila( props.info ) }
                    >
                        Seleccionar
                    </Button>
                    </TableCell>
            </TableRow>
        </>
    )
}
