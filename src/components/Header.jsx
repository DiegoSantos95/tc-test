import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'carbon-components-react';
import '../assets/styles/Shared.css';

const Header = () => {

    return (
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
    );

}

export default Header;