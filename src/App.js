import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { useState } from 'react';
import { AppRouter } from './routes/AppRouter';
import { theme } from './themeConfig';
import { UserContext } from './UserContext';
import pika from './images/pikachu.jpg';

function App() {

  const [data, setData] = useState({
    result: {
      name: 'Example',
      types: [
        {
          type: {
            name: 'Example'
          }
        }
      ],
      moves: [
        {
          move: {
            name: 'Example'
          }
        },
        {
          move: {
            name: 'Example2'
          }
        }
      ],
      sprites: {
        front_shiny: pika 
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
