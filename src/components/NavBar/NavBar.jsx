import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";

const NavBar = () => {
	return (
		<div className={styles.nav}>
			<div></div>
			<div className={styles.nav__mainLinks}>
				<NavLink
					style={{ textDecoration: "none" }}
					to="/"
					className={styles.home}
				>
					Home
				</NavLink>
				<NavLink
					style={{ textDecoration: "none" }}
					to="/products"
					className={styles.nav__products}
				>
					All Products
				</NavLink>
			</div>
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
