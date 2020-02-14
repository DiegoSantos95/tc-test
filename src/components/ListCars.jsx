import React, { useContext, useState } from 'react';
import { CarContext } from '../context/CarContext';
import { Button } from 'carbon-components-react';
import Logo from '../assets/img/logo-tc.png';
import AddCars from "./AddCar";
import EditCar from "./EditCar";
import Fundo from '../assets/img/car-wireframe.png';


import { List, Header, Menu } from "../assets/styles/styles";


const ListCars = (props) => {

  const { allCars } = useContext(CarContext);
  const [openModal, setOpenModal] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [carToEdit, setCarToEdit] = useState({});

  const editClickHandler = async (carRecord) => {
    setCarToEdit(carRecord)
    openEditForm()
    return (carRecord)
  }

  const openEditForm = () => setOpenModalEdit(!openModalEdit)
  const openForm = () => setOpenModal(!openModal)

  return (
    <>
      {openModal ? <AddCars openForm={openForm} /> : null}
      {openModalEdit ? <EditCar openEditForm={openEditForm} carToEdit={carToEdit} /> : null}

      <div style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        width: "100vw"
      }}>

        <Menu >
          <img src={Logo} />
        </Menu>
        <div style={{
          width: "100%",
          display: "flex",
          flexDirection: "column"
        }}>
          <Header>
            <input
              type="text"
              placeholder="Pesquisar Veiculo"
              style={{ display: "flex", margin: "auto 10px" }}
            />

            <Button kind="ghost" onClick={openForm}> Cadastrar</Button>

          </Header>

          <List>

            <div style={{
              display: "flex",
              flexDirection: "column",
              // backgroundImage: `url(${Fundo})`,
              // backgroundPosition: "center",
              // height: "100%"
            }}>

              {allCars.map(car => (
                <>
                  <div key={car.id} style={{ display: "flex" }} onClick={() => editClickHandler(car)} >
                    <div style={{ width: "80%" }}>
                      <dt>{car.title}</dt>
                      <dt>{car.model}•{car.brand}•{car.km}</dt>
                    </div>
                    <div style={{ width: "20%" }}>
                      <dt>{car.price}</dt>
                      <dt>{car.year}</dt>
                    </div>
                  </div>

                  <hr style={{
                    display: "block",
                    marginTop: "0.5em",
                    marginBottom: "0.5em",
                    marginLeft: "auto",
                    marginRight: "auto",
                    borderStyle: "solid",
                    borderWidth: "1px",
                    width: "100%"
                  }} />
                </>
              ))}

            </div>

          </List>
        </div>

      </div>

    </>

  );
};

export { ListCars as default };
