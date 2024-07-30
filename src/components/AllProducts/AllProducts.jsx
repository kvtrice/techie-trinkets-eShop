import { useContext } from "react";
import { AllProductsContext } from "../../contexts/AllProductsContextProvider";
import styles from "./AllProducts.module.scss";
import ProductCard from "../ProductCard/ProductCard";

const AllProducts = () => {
	const { products } = useContext(AllProductsContext);

	return (
		<main className={styles.productsContainer}>
			{products?.map(product => (
				<ProductCard
					key={product.id}
					product={product}
				/>
			))}
		</main>
	);
};
export default AllProducts;
