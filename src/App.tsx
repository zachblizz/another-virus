import React from 'react';
import { ToastContainer } from "react-toastify";

import { CountryProvider } from "./hooks/Form";

import CountryForm from "./components/CountryForm";
import MyChart from "./components/MyChart";

import { Container } from "./components/ui/Container";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Container>
      <ToastContainer />
      <h1>After 9 Coronas</h1>
      <CountryProvider>
        <>
          <CountryForm />
          <MyChart />
        </>
      </CountryProvider>
    </Container>
  );
}

export default App;
