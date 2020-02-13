import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CarContextProvider from './context/CarContext';
import ListCars from "./components/ListCars";
import Home from "./components/Home";
import AddCars from "./components/AddCar";

class App extends Component {
  render() {
    return (
      <>
        <CarContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cars" component={ListCars} />
            <Route path="/addcars" component={AddCars} />
          </Switch>
          </BrowserRouter>
          </CarContextProvider>
      </>
    );
  }
}

export default App;
