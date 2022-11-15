import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Atividade from "./pages/Atividade";
import Home from "./pages/Home";
import { Wrapper } from "./styles/Containers";

function App() {
  return (
    <div className="App">
      <Header />
      <Wrapper>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/atividades/">
            <Atividade />
          </Route>
        </Switch>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
