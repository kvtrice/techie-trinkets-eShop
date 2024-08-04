import NavBar from "../NavBar/NavBar";
import styles from "./Hero.module.scss";
import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<header className={styles.hero}>
			<div className={styles.heroContainer}>
				<NavBar heroNav={true} />
				<div className={styles.hero__main}>
					<img
						className={styles.hero__main__img}
						src="src/assets/title.png"
						alt="Techie Trinkets"
					/>
					<p className={styles.hero__main__text}>
						Your dream setup awaits
					</p>
					<Link to="/products">
						<button className={styles.hero__main__btn}>
							View All Products →
						</button>
					</Link>
				</div>
			</div>
		</header>
	);
};
export default Hero;
