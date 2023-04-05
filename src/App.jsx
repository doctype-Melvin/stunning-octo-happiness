import { useState } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Main from "./components/Main/Main";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Form />
        <Entries />
      </Main>
      <Footer />
    </div>
  );
}
