
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from "./Actions/Store";
import { Provider } from "react-redux";
import  DonationCandidates from "./Components/DonationCandidates";

function App() {
  return (
    <Provider store={store}>
      <DonationCandidates />
      </Provider>
  );
}

export default App;
