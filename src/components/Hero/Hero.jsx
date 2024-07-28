import styles from "./Hero.module.scss";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<header className={styles.hero}>
			<div className={styles.hero__left}>
				{/* <h1 className={styles.hero__left__heading}>Techie Trinkets</h1> */}
				<img
					className={styles.hero__left__img}
					src="src/assets/title.png"
					alt="Techie Trinkets"
				/>
				<p className={styles.hero__left__text}>
					Your dream setup awaits
				</p>
				<Link to="/products">
					<button className={styles.hero__left__btn}>
						View All Products →
					</button>
				</Link>
			</div>
			<div className={styles.hero__right}>
				<img
					className={styles.hero__right__img}
					src="src/assets/hero.jpeg"
					alt=""
				/>
			</div>
		</header>
	);
};
export default Hero;
