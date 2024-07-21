import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<div>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/cart">Cart</NavLink>
		</div>
	);
};
export default NavBar;
