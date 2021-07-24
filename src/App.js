import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { useState } from 'react';
import { AppRouter } from './routes/AppRouter';
import { theme } from './themeConfig';
import { UserContext } from './UserContext';
import lupa from './images/lupa.png';

function App() {

  // Estado en donde se guardara el context, data por defecto
  const [data, setData] = useState({
    result: {
      name: 'Selecciona un pokemon!',
      types: [
        {
          type: {
            name: 'Aquí aparecera su tipo!'
          }
        }
      ],
      moves: [
        {
          move: {
            name: 'Su ataque principal!'
          }
        },
        {
          move: {
            name: 'Su ataque secundario!'
          }
        }
      ],
      sprites: {
        front_shiny: lupa 
      }
    }
  });


  const obtener = (value) => {

    setData({ ...data, result:value })
  }

  return (
    <UserContext.Provider value={{
      data,
      obtener
    }}>
      <ThemeProvider theme={ theme }>
        <AppRouter />
      </ThemeProvider>
    </UserContext.Provider>
  );
}

export default App;
