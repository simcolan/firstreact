import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Router } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { BrowserRouter } from "react-router-dom";
import { Prodottipage } from "./pages/Prodottipage";
import { history } from "./utils/history";
import { Loginpage } from "./pages/Loginpage";
import { UtenteProvider } from "./providers/utente.provider";
import { Carrellopage } from "./pages/Carrellopage";
import { CarrelloProvider } from "./providers/carrello.provider";
import { AggiungiProdottopage } from "./pages/AggiungiProdottopage";

function App() {
  return (
    <BrowserRouter>
      <Router history={history}>
        <UtenteProvider>
          <CarrelloProvider>
            <Route exact path={"/"} component={Homepage} />
            <Route exact path={"/prodotti"} component={Prodottipage} />
            <Route exact path={"/login"} component={Loginpage} />
            <Route exact path={"/carrello"} component={Carrellopage} />
            <Route exact path={"/prodotti/inserimento"} component={AggiungiProdottopage} />
          </CarrelloProvider>
        </UtenteProvider>
      </Router>
    </BrowserRouter>
  );
}

export default App;