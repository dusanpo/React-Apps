

import { Fragment } from "react";
import { Header } from "./components/Header.jsx";
import { Main } from "./components/Main.jsx"
import { Footer } from "./components/Footer.jsx";

import './App.css';


 function App() {

  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );

}

export default App;
