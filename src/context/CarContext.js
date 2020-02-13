import React, { createContext, useState, useEffect } from 'react';
import uniqid from 'uniqid';
import api from '../api/api';

export const CarContext = createContext();

const CarContextProvider = ({ children }) => {

    const [allCars, setCars] = useState([]);

    const fetchAllCars = async () => {
      const cars = await api.get("/cars?search=");
      console.log(cars);
      setCars(cars.data.cars);
	  }

	useEffect(() => {
		fetchAllCars()
	}, []);

    const addCar = car => {
      setCars([...allCars, { ...car, id: uniqid() }]);
    };
  
    return (
      <CarContext.Provider value={{ allCars, addCar }}>
        {children}
      </CarContext.Provider>
    );
  };
  
  export default CarContextProvider;