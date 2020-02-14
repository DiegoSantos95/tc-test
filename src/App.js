import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CarContextProvider from './context/CarContext';
import ListCars from "./components/ListCars";
import AddCars from "./components/AddCar";
import EditCar from "./components/EditCar";

class App extends Component {

  state = {
    carSelected: ""
  };

  getCarToBeEdited = car => {
    this.setState({ carSelected: car });
  };

  render() {

    return ( 
      <>
      <CarContextProvider>
      <BrowserRouter>
        <Switch>
        <Route
              exact
              path="/"
              render={props => (
                <ListCars
                  {...props}
                  parentState={this.state}
                  selectCar={this.getCarToBeEdited}
                />
              )}
            />
  
        </Switch>
        </BrowserRouter>
        </CarContextProvider>
    </>
      );
  }
}

export default App;
