import React from "react";
import { Link } from "react-router-dom";
import starWars from "../../img/logo2.png"


export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/"><img className="logo" src={starWars} /></Link>
			</div>
		</nav >
	);
};
