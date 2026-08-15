import { GlobalStyle } from "./components/GlobalStyle";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Forecast from "./components/Forecast/Forecast";
import Gallery from "./components/Gallery/Gallery";
import News from "./components/News/News";
// import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Forecast />
      <News />
      <Gallery />
      {/* <Footer /> */}
      <GlobalStyle />
    </>
  );
}

export default App;
