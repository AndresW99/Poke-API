import { Container } from '@material-ui/core'
import { PokemonApi } from '../api/PokemonApi'
import { Informacion } from '../components/Informacion'


export const Pokes = () => {


    return (
        <Container maxWidth="md">
            <PokemonApi />
            
            <Informacion /> 
        </Container>
    )
}
