import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import { Wrapper } from "./styles/Containers";

function App() {
  return (
    <Wrapper className="App">
      <Navigation />
      <Header />
      <Home />
      <Footer />
    </Wrapper>
  );
}

export default App;
