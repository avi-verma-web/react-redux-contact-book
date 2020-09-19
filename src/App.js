import React from "react";
// import logo from './logo.svg';
import "./styles/App.scss";

import { Provider } from "react-redux";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import store from "./redux/store";

import Navbar from "./components/Navbar";
import Contacts from "./components/Contacts";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <div className="py-3">
            <Switch>
              <Route exact path="/" component={Contacts}></Route>
              <Route exact path="/contacts/add" component={AddContact}></Route>
              <Route
                exact
                path="/contacts/edit/:id"
                component={EditContact}
              ></Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
