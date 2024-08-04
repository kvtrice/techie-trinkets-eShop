import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";

const NavBar = ({ heroNav = false }) => {
	const navButtonStyles = ({ isActive }) =>
		isActive
			? {
					color: "#000000",
					textDecoration: "none",
					border: "1px solid #000000",
					backgroundColor: "#f0deaa",
			  }
			: {
					color: "#000000",
					textDecoration: "none",
			  };

	const heroNavButtonStyles = ({ isActive }) =>
		isActive
			? {
					color: "#000000",
					textDecoration: "none",
					border: "1px solid #000000",
					backgroundColor: "#f0deaa",
			  }
			: {
					color: "#ffffff",
					textDecoration: "none",
			  };

	return (
		<div className={`${styles.nav} ${heroNav ? styles.heroNav : ""}`}>
			<NavLink to="/">
				<div className={styles.nav__logoContainer}>
					<img
						className={styles.nav__logo}
						src="/logo.png"
						alt="Techie Trinkets Logo"
					/>
				</div>
			</NavLink>
			<div className={styles.nav__mainLinks}>
				<NavLink
					style={heroNav ? heroNavButtonStyles : navButtonStyles}
					to="/"
					className={styles.nav__home}
				>
					Home
				</NavLink>
				<NavLink
					style={heroNav ? heroNavButtonStyles : navButtonStyles}
					to="/products"
					className={styles.nav__products}
				>
					All Products
				</NavLink>
				<NavLink
					style={heroNav ? heroNavButtonStyles : navButtonStyles}
					to="/wishlist"
					className={styles.nav__products}
				>
					Wish List
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
