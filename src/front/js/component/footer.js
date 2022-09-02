import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p>
			<Link className="navbar-brand text-color" to="/register">To sign up, click here</Link>
		</p>
	</footer>
);
