import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<div className={styles.nav}>
			<div></div>
			<NavLink to="/" className={styles.nav__title}>Techie Trinketts</NavLink>
			<NavLink to="/cart" className={styles.nav__cart}>Cart</NavLink>
		</div>
	);
};
export default NavBar;
