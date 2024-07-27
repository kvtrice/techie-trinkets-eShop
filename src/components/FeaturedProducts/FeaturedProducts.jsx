import styles from "./FeaturedProducts.module.scss";
import Carousel from "../Carousel/Carousel";

const FeaturedProducts = () => {
	return (
		<div className={styles.featured}>
			<h1 className={styles.featured__heading}>Featured Products</h1>
			<Carousel />
		</div>
	);
};

export default FeaturedProducts;
