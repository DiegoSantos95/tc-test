import React from 'react';
import ListCars from "./ListCars";
import Header from "./Header";
import '../assets/styles/Shared.css'

const Home = () => {
	return (

		<div className="container">
			<div className="menu"> 
				<h1></h1>
			</div>
			<Header />
			<ListCars />
		
		</div>
		

	);
};

export default Home