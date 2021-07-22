import { PokemonApi } from "./api/PokemonApi";
import { AppRouter } from "./routes/AppRouter";


function App() {
  return (
    <div>
      <AppRouter />
      <PokemonApi />
    </div>
  );
}

export default App;
