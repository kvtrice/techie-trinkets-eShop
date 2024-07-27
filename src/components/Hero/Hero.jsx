import styles from "./Hero.module.scss";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<header className={styles.hero}>
			<h1 className={styles.hero__heading}>Techie Trinkets</h1>
			<Link to="/products">
				<button className={styles.hero__btn}>View All Products</button>
			</Link>
		</header>
	);
};
export default Hero;
