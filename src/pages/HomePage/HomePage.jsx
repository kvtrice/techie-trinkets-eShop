import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Hero from "../../components/Hero/Hero";
import styles from "./HomePage.module.scss";

const HomePage = () => {
	return (
		<div className={styles.home}>
			<Hero />
			<FeaturedProducts />
		</div>
	);
};
export default HomePage;
