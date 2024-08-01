import { useContext } from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import styles from "./WishList.module.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import { VariantContext } from "../../contexts/VariantContextProvider";
import { Link } from "react-router-dom";

const WishList = () => {
	const { favourites } = useContext(VariantContext);

	return (
		<PageWrapper>
			{favourites?.length > 0 && (
				<h1 className={styles.wishList__heading}>My Wishlist</h1>
			)}
			<div className={styles.wishList}>
				{!favourites?.length && (
					<div className={styles.wishList__noProducts}>
						<p className={styles.wishList__noProducts__text}>
							There are no products in your wish list yet, let's
							add some!
						</p>
						<Link to="/products">
							<button
								className={styles.wishList__noProducts__btn}
							>
								Start Browsing →
							</button>
						</Link>
					</div>
				)}
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
