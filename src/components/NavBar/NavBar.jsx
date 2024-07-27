import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";

const NavBar = () => {
	return (
		<div className={styles.nav}>
			<div></div>
			<NavLink
				to="/"
				className={styles.nav__title}
			>
				Techie Trinketts
			</NavLink>
			<NavLink
				to="/cart"
				className={styles.nav__cart}
			>
				<BsCartFill
					className={styles.nav__cart__icon}
					size={25}
					fill="#000000"
				/>
			</NavLink>
		</div>
	);
};
export default NavBar;
