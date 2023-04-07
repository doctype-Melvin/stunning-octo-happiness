import { useState } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Main from "./components/Main/Main";
import Entries from "./components/Entries/Entries";
import "./App.css";

export default function App() {
  console.clear();
  return (
    <div className="App">
      <Header />
      <Main />
      {/* <Footer /> */}
    </div>
  );
}
