import { 
         TableCell,
         TableRow} from '@material-ui/core'
import React from 'react'

export const Lista = (props) => {
    
    return (
       <TableRow key={ props.info.name }>
           <TableCell component="th" scope="row">
              { props.info.name }
           </TableCell>
           <TableCell align="right">{ props.info.url }</TableCell>
       </TableRow>
    )
}
