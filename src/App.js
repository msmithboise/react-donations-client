
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from "./Actions/Store";
import { Provider } from "react-redux";
import  DonationCandidates from "./Components/DonationCandidates";
import { Container } from "@material-ui/core";
import { ToastProvider } from "react-toast-notifications";

function App() {
  return (
    <Provider store={store}>
      <ToastProvider autoDismiss={true}><Container maxWidth="lg">
      <DonationCandidates /></Container></ToastProvider>
      </Provider>
  );
}

export default App;
