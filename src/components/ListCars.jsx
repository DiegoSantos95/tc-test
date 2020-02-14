import React, { useContext } from 'react';
import  { CarContext } from '../context/CarContext';

import { Title, Details, Container, List } from "../assets/styles/styles";


const ListCars = (props) => {

  const { allCars } = useContext(CarContext);
  
  const editClickHandler = async (carRecord) => {
    props.selectCar(carRecord)
    props.history.push('/editcar')
		return(carRecord)
	}

	return (
	 <List>
		      {allCars.map(car => (
                 <li key={car.id}
                  onClick={() => editClickHandler(car)}
                  className='card car'>
                    <Title>
                      {car.title} 
                      <span>
                        {car.price}
                          <dt> { car.year }</dt>
                        </span>
                      <dt>
                        { car.model } • 
                        { car.brand } • 
                        { car.color } • 
                        { car.km } KM
                      </dt>
                    </Title> 
                </li>
          ))}
  </List>


	);
};

export { ListCars as default };
