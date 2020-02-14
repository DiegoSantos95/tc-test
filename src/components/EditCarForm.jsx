import React, { useState } from 'react';


const EditCarForm = ({ call, record = {}, props }) => {
    const [car, setCar] = useState(record);

    const handleModal = e => {
        e.preventDefault();
        props.openEditForm();
    }

    const handleSubmit = e => {
        e.preventDefault();
        call(car);
    };

    const handleChange = e => {
        setCar({ ...car, [e.target.id]: e.target.value });
    };

    return (
        <>
            <div style={{
               paddingTop: "8%",
               zIndex: "999",
               paddingLeft: "25%",
               position: "absolute",
               display: "flex", 
               flexDirection: "column",
               color: "white"
            }}>
                <form onSubmit={handleSubmit} style={{ background: "#1E2D40", position: "relative" }}>

                    <div style={{
                        display: "block",
                        flexDirection: "column",
                        width: "90%",
                        padding: "5%"
                        
                    }}>
                        <input id="title" type="text" placeholder="Titulo" style={{ color: "white" }} onChange={handleChange} value={car.title}/>
                        <input id="model" type="text" placeholder="Modelo" style={{ width: "47%", color: "white"  }} onChange={handleChange} value={car.model}/>
                        <input id="year" type="text" placeholder="Ano" style={{ width: "45%", margin: "0px 0 0 60px", color: "white" }} onChange={handleChange} value={car.year}/>
                        <input id="brand" type="text" placeholder="Marca" style={{ color: "white" }} onChange={handleChange} value={car.brand}/>
                        <input id="color" type="text" placeholder="Modelo" style={{ width: "47%", color: "white" }} onChange={handleChange} value={car.color}/>
                        <input id="price" type="text" placeholder="Preço" style={{ width: "45%", margin: "0px 0 0 60px", color: "white" }} onChange={handleChange} value={car.price}/>
                        <input id="km" type="text" placeholder="km" style={{ width: "45%", color: "white" }} onChange={handleChange} value={car.km}/>

                        <div style={{ display: "flex" }}>

                            <button style={{
                                display: "flex",
                                margin: "20px 0px 0px 0px"
                            }}>
                                Remover
                             </button>

                            <button style={{
                                display: "flex",
                                margin: "20px 10px 0px"
                            }} onClick={handleModal}>
                                Cancelar
                             </button>

                            <button style={{
                                display: "flex",
                                margin: "20px 0px 0px 0px"
                            }} type="submit">
                                Salvar
                             </button>
                        </div>
                    </div>
                    <div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditCarForm;