import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Lista } from '../components/Lista'

import { makeStyles,
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
        marginTop: 8
    }
});

export const PokemonApi = () => {

    const classes = useStyles();
    //Estado para guardar los resultados de la API
    const [poke, setPoke] = useState([]);
    //Estado para el manejo de la paginación local
    const [currentPAge, setCurrentPAge] = useState(0);
    //Estado para el buscador de pokemon
    const [search, setSearch] = useState('');

    // Funcion para filtrar los pokemones en 5
    const filtrarPokemons = () => {
        // Si estamos en pagina 0 muestra a 5 pokes y suma 5 cada que avanzamos una pag.
        if( search === 0 ) 
            return poke.slice(currentPAge, currentPAge + 5);

        //Filtra los pokes por nombre
        const filtered = poke.filter( poke => poke.name.includes( search ) )
        return filtered.slice( currentPAge, currentPAge + 5);

    }
    // Avanzamos de pagina
    const nextPage = () => {

        if( poke.filter( b => b.name.includes( search ) ).length > currentPAge + 5 )
        setCurrentPAge( currentPAge + 5 );
    }

    // Regresamos pagina validando que estemos una por delante de 0
    const prevPage = () => {

        if( currentPAge > 0 )
            setCurrentPAge( currentPAge - 5 );
    }
    
    // Buscador de pokemon
    const onSearchChange = ({target}) => {

        setCurrentPAge(0);
        setSearch( target.value )

    }
    // Llamada a la API con ayuda de un ciclo for para traer mas info de los podes seleccionados
    const data = () => {        
        
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100`).then(( response ) => {
            // Iteramos la cantidad de pokes que recibimos para tener mas info de cada uno
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
    // Cargamos la data al entrar al componente
    useEffect(() => {

        data()

    }, []);


    return (

        <>
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

            <hr />

            <TableContainer className={ classes.margin } component={Paper}>
                <Table className={ classes.table } size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Nombre</TableCell>
                            <TableCell align="center">Primera habilidad</TableCell>
                            <TableCell align="center">Img</TableCell>
                            <TableCell align="center">Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { filtrarPokemons && filtrarPokemons().map((infos, name) => <Lista key={name} info={infos}/>) }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}