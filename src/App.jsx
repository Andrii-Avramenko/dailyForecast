import { GlobalStyle } from "./components/GlobalStyle";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Forecast from "./components/Forecast/Forecast";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Forecast />
      <Gallery />
      <Footer />
      <Modal />
      <GlobalStyle />
    </>
  );
}

export default App;
