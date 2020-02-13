import React, { useState, useEffect } from 'react';
import CarForm from './CarForm';
import api from '../api/api';

export default props => {
    const [newCar, setNewCar] = useState({});

    const addNewCar = car => {
        console.log(car)

        let record = {
          title: car.title,
          model: car.model,
          brand: car.brand,
          year: car.year,
          color: car.color,
          km: car.km,
          price: car.price
        };
        setNewCar(record);
      };

      const sendData = async () => {
        const postData = await api.post('/cars', newCar);
        console.log(postData);
        props.history.push('/');
      };

    useEffect(() => {
        if (newCar.title) {
        sendData();
        }
    }, [newCar]);

    return (
        <>

        <CarForm call={addNewCar} />

        </>
    );
}
