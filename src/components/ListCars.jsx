import React, { useContext } from 'react';
import  { CarContext } from '../context/CarContext';
import '../assets/styles/Shared.css'

const ListCars = () => {

	const { allCars } = useContext(CarContext);

	return (

	<div className='section section-cars'>
      <div className='container'>
        <ul>
		      {allCars.map(car => (
            <li key={car.id}>
              <div 
                onClick={() => alert(car.model)}
                className='card car'>
                <div className='car-details'>
                  <div className='car-title'>{car.title}</div>
                  <div className='car-model'>{car.model}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
	);
};

export { ListCars as default };
