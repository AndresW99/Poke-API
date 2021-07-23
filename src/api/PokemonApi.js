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
         TableRow, 
         TextField,
         Button, } from '@material-ui/core';


const useStyles = makeStyles({
    table: {
        minWidth: 350,
    },
    margin: {
        marginTop: 20
    }
});

export const PokemonApi = () => {

    const classes = useStyles();
    const [poke, setPoke] = useState([]);
    const [currentPAge, setCurrentPAge] = useState(0);
    const [search, setSearch] = useState('');

    const filtrarPokemons = () => {

        if( search === 0 ) 
            return poke.slice(currentPAge, currentPAge + 5);

        const filtered = poke.filter( poke => poke.name.includes( search ) )
        return filtered.slice( currentPAge, currentPAge + 5);

    }

    const nextPage = () => {

        if( poke.filter( b => b.name.includes( search ) ).length > currentPAge + 5 )
        setCurrentPAge( currentPAge + 5 );
    }

    const prevPage = () => {

        if( currentPAge > 0 )
            setCurrentPAge( currentPAge - 5 );
    }
 

    const data = () => {        
        
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100`).then(( response ) => {

            for(let i = 0; i < response.data.results.length; i++  ) {
                axios.get(response.data.results[i].url)
                .then( result => {
                    setPoke(prevArray => [...prevArray, result.data])
                })
            }
        })
        .catch( err => {
            console.log(err);
        })

    }

    useEffect(() => {

        data()

    }, []);

    const onSearchChange = ({target}) => {

        setCurrentPAge(0);
        setSearch( target.value )

    }

    return (

        <div>

            <Container maxWidth="md">

                <TextField 
                    id="outlined-basic" 
                    label="Busca un Pokemon!!" 
                    variant="standard" 
                    className={ classes.margin }
                    fullWidth
                    value={ search }
                    onChange={ onSearchChange }
                />

                <br />

                <Button 
                    variant="contained" 
                    color="primary" 
                    className={ classes.margin } 
                    onClick={ prevPage }
                >
                    Anterior
                </Button>
                &nbsp;
                <Button 
                    variant="contained" 
                    color="primary" 
                    className={ classes.margin } 
                    onClick={ nextPage }
                >
                    Siguiente
                </Button>

                <TableContainer className={ classes.margin } component={Paper}>
                    <Table className={ classes.table } size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="right">Nombre&nbsp;</TableCell>
                                <TableCell align="right">Primera habilidad&nbsp;</TableCell>
                                <TableCell align="right">Img&nbsp;</TableCell>
                                <TableCell align="right">Acciones&nbsp;</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            { filtrarPokemons && filtrarPokemons().map((infos, name) => <Lista key={name} info={infos}/>)}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    )
}