
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from "./Actions/Store";
import { Provider } from "react-redux";
import  DonationCandidates from "./Components/DonationCandidates";
import { Container } from "@material-ui/core";

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
      <DonationCandidates /></Container>
      </Provider>
  );
}

export default App;
