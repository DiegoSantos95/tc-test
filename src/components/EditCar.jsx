import React, { useState, useEffect } from 'react';
import api from "../api/api";
import CarForm from './CarForm';

export default props =>  {
    const [EditCar, setEditCar] = useState({});
    const carRecord = props.carRecord;


    const UpdateCar = car => {
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
        setEditCar(record);
      };

      const sendData = async () => {
        const putData = await api.put(`/cars/${carRecord.id}`, EditCar);
        console.log(putData);
        props.history.push('/listcars');
      };

    useEffect(() => {
        if (EditCar.title) {
        sendData();
        }
    }, [EditCar]);

    return (
        <>

        <CarForm call={UpdateCar} record={carRecord} props={props}/>

        </>
    );
}