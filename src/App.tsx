import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import { Wrapper } from "./styles/Containers";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Wrapper className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Navigation />
      <Header />
      <Home />
      <Footer />
    </Wrapper>
  );
}

export default App;
