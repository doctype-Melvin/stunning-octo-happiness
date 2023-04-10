import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.css";

export default function App() {
  console.clear();
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
