import React from "react";
import {NavLink} from "react-router-dom";
import {getNavLinks} from "../../Utilities/methods";

export default function Navbar() {
	return (
		<ul className="navMenu">
			{getNavLinks().map((link) => (
				<NavLink key={link.page} to={link.path} className="navItems">
					<li>{link.page}</li>
				</NavLink>
			))}
		</ul>
	);
}
