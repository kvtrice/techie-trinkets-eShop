import { useContext, useEffect } from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import styles from "./WishList.module.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import { VariantContext } from "../../contexts/VariantContextProvider";

const WishList = () => {
	const { favourites } = useContext(VariantContext);

	return (
		<PageWrapper>
			<h1 className={styles.wishList__heading}>My Wishlist</h1>
			<div className={styles.wishList}>
				{favourites &&
					favourites.map(variant => (
						<ProductCard
							key={variant.id}
							product={variant.product}
							variant={variant}
						/>
					))}
			</div>
		</PageWrapper>
	);
};
export default WishList;
