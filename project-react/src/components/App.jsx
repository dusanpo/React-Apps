import { Fragment } from "react";//na prvom mestu su importi nekih biblioteka

import { Header } from "./Header/Header.jsx";// sledeći su naši importi
import { BlogList } from "./BlogList/BlogList.jsx";

import './App.css';//na kraju su css importi

function App() {
  return (
    <Fragment>

 <Header />
  <BlogList />

  </Fragment>
  );
}

export default App;
