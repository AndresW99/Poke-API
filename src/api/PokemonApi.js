import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Lista } from '../components/Lista'

import { Container,
         makeStyles,
         Paper,
         Table,
         TableBody,
         TableCell,
         TableContainer,
         TableHead,
         TableRow } from '@material-ui/core';


const useStyles = makeStyles({
    table: {
        minWidth: 350,
    },
    margin: {
        marginTop: 32
    }
});

export const PokemonApi = () => {

    const classes = useStyles();
    const [poke, setPoke] = useState([]);

    const data = () => {        
        
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=20').then(( response ) => {
    
            setPoke(response.data.results);
            console.log(response.data.results);
    
        })
        .catch( err => {
            console.log(err);
        })

    }

    useEffect(() => {

        data()

    }, []);

    return (

        <div>
            <Container maxWidth="md">
                <TableContainer className={ classes.margin } component={Paper}>
                    <Table className={ classes.table } size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nombre</TableCell>
                                <TableCell align="right">URL&nbsp;</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {poke.map((infos, name) => <Lista key={name} info={infos}/>)}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    )
}