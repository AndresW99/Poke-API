import { Container } from '@material-ui/core'
import React from 'react';
import { PokemonApi } from '../api/PokemonApi'
import { Informacion } from '../components/Informacion'

// Renderizado de los componentes en la pagina Pokemones
export const Pokes = () => {

    return (
        <Container maxWidth="md">
            <PokemonApi />
            
            <Informacion /> 
        </Container>
    )
}
