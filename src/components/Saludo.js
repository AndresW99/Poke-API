import { Container, CssBaseline, Typography } from '@material-ui/core';
import React from 'react';

export const Saludo = () => {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="md" >
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
                    Hola como estan?
                </Typography>
            </Container>   
        </>
    )
}
