import React, { useState } from 'react';
import InputText from './InputText';


const CarForm = ({ call, record = {}, props }) => {
    const [car, setCar] = useState(record);

  const handleSubmit = e => {
    e.preventDefault();
    call(car);
  };

  const handleChange = e => {
    setCar({ ...car, [e.target.id]: e.target.value });
  };

  return (
      <>
        <form onSubmit={handleSubmit}>
              <InputText 
                placeholder="Titulo"
                id="title"
                textValue={car.title}
                changeFunction={handleChange}
              />
              <InputText 
                placeholder="Modelo"
                id="model"
                textValue={car.model}
                changeFunction={handleChange}
              />
                <InputText 
                placeholder="Ano"
                id="year"
                textValue={car.year}
                changeFunction={handleChange}
              />
               <InputText 
                placeholder="Marca"
                id="brand"
                textValue={car.brand}
                changeFunction={handleChange}
              />
               <InputText 
                placeholder="Cor"
                id="color"
                textValue={car.color}
                changeFunction={handleChange}
              />
               <InputText 
                placeholder="Km"
                id="km"
                textValue={car.km}
                changeFunction={handleChange}
              />
                <InputText 
                placeholder="Preço"
                id="price"
                textValue={car.price}
                changeFunction={handleChange}
              />
          <div className='input-field center'>
            <button
              type='submit'
              className='btn waves-effect waves-light amber darken-2'
            >
                <i>Add</i>
            </button>
          </div>
          <div>
              <button type="button"  onClick={() =>  props.history.push('/')}>
                  <i>Cancelar</i>
              </button>
          </div>
        </form>
        </>
  );
};

export default CarForm;