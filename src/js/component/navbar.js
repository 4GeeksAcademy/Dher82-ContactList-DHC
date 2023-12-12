import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark mb-3">
					
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-light">Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};
