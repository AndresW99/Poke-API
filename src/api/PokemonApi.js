import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Lista } from '../components/Lista';

export const PokemonApi = () => {

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
            {
                poke.map(( info, id ) => {

                    return <Lista key={ id } info={ info } />

                })
            }
        </div>
    )
}
