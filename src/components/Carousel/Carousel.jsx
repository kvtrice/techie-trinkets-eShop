import { useContext, useState } from "react";
import styles from "./Carousel.module.scss";
import { ProductContext } from "../../contexts/ProductContextProvider";
import ProductCard from "../ProductCard/ProductCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Carousel = () => {
	const { products } = useContext(ProductContext);
	const [currentIndex, setCurrentIndex] = useState(0);

	const featuredProducts = products?.filter(product =>
		product.variants?.some(variant => variant.featured)
	);

	const itemsPerPage = 3;
	const totalItems = featuredProducts?.length;

	const nextItem = () => {
		setCurrentIndex(prevIndex => (prevIndex + 1) % totalItems);
	};

	const prevItem = () => {
		setCurrentIndex(prevIndex => (prevIndex - 1 + totalItems) % totalItems);
	};

	const currentProducts = [];
	for (let i = 0; i < itemsPerPage; i++) {
		if (totalItems > 0) {
			const productIndex = (currentIndex + i) % totalItems;
			currentProducts.push(featuredProducts[productIndex]);
		}
	}

	console.log(currentProducts);

	return (
		<div className={styles.carousel}>
			<div
				className={styles.carousel__arrowContainer}
				onClick={prevItem}
			>
				<IoIosArrowBack
					size={30}
					className={styles.carousel__arrow}
				/>
			</div>
			<div className={styles.carousel__items}>
				{currentProducts?.map(product => (
					<ProductCard
						key={product.id}
						product={product}
					/>
				))}
			</div>
			<div
				className={styles.carousel__arrowContainer}
				onClick={nextItem}
			>
				<IoIosArrowForward
					size={30}
					className={styles.carousel__arrow}
				/>
			</div>
		</div>
	);
};
export default Carousel;
