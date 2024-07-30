import { useContext, useState } from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import styles from "./WishList.module.scss";
import { AllProductsContext } from "../../contexts/AllProductsContextProvider";
import ProductCard from "../../components/ProductCard/ProductCard";

const WishList = () => {
	const { products } = useContext(AllProductsContext);

	const favouritedVariants = products?.reduce((acc, product) => {
		const favVariants = product.variants
			.filter(variant => variant.favourite)
			.map(variant => ({
				...variant,
				product: product,
			}));

		return [...acc, ...favVariants];
	}, []);

	console.log(favouritedVariants);

	return (
		<PageWrapper>
			<div className={styles.wishList}>
				{favouritedVariants &&
					favouritedVariants.map(variant => (
						<ProductCard
							product={variant.product}
							variantImage={variant.image}
						/>
					))}
			</div>
		</PageWrapper>
	);
};
export default WishList;
