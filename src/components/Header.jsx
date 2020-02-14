import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'carbon-components-react';

const Header = () => {

    return (
        <div className="container">
            <div className="header">
                <input
                    type="text"
                    className="text-input"
                    placeholder="Pesquise o carro"
                    />
                <NavLink to="/addcars" activeClassName="is-active">
                    <Button kind="ghost">Cadastrar</Button>
                </NavLink>
            </div>
            <div className="menu">
                <h1></h1>
            </div>
        </div>
    );

}

export default Header;