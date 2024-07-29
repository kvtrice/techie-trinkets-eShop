import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
	const linkStyles = {
		textDecoration: "none",
		color: "black",
	};

	return (
		<footer className={styles.footer}>
			<div className={styles.footer__main}>
				<h1 className={styles.footer__main__left}>Techie Trinkets</h1>
				<div className={styles.footer__main__right}>
					<Link
						className={styles.link}
						style={linkStyles}
						to="/"
					>
						Home
					</Link>
					<Link
						className={styles.link}
						style={linkStyles}
						to="/products"
					>
						All Products
					</Link>
					<Link
						className={styles.link}
						style={linkStyles}
						to="/wishlist"
					>
						Wish List
					</Link>
					<Link
						className={styles.link}
						style={linkStyles}
						to="/cart"
					>
						Cart
					</Link>
				</div>
			</div>
			<p className={styles.footer__copyright}>
				© Techie Trinkets 2024. All rights reserved 2024.
			</p>
		</footer>
	);
};
export default Footer;
