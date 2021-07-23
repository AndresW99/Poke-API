import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { AppRouter } from "./routes/AppRouter";
import { theme } from "./themeConfig";
//TODO: Terminar la tabla mostrando imagen
//TODO: Mostrar el segundo componente con la info

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
