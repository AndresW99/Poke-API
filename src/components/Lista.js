import { 
         TableCell,
         TableRow, Button} from '@material-ui/core'
import React from 'react'

export const Lista = (props) => {
    
    return (

        <>
            <TableRow key={ props.info.id }>
                <TableCell component="th" scope="row">
                    { props.info.id }
                </TableCell>
                <TableCell align="right">{ props.info.name }</TableCell>
                <TableCell align="right">{ props.info.abilities[0].ability.name}</TableCell>
                <TableCell align="right">
                    <img src={ props.info.sprites.front_default } alt={ props.info.name } style={{ height: 50 }} />
                </TableCell>
                <TableCell align="right">
                    <Button variant="contained" color="primary" size="small" >
                        Seleccionar
                    </Button>
                    </TableCell>
            </TableRow>
        </>
    )
}
