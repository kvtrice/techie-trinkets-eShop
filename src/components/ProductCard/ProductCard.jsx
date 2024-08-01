import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";
import Favourite from "../Favourite/Favourite";

const ProductCard = ({ product, variant = null }) => {
	return (
		<div className={styles.card}>
			<Link
				style={{ textDecoration: "none" }}
				to={`/products/${product.id}`}
			>
				<div className={styles.card__imgContainer}>
					<img
						className={styles.card__imgContainer__img}
						src={
							variant ? variant.image : product.variants[0].image
						}
						alt={product.name}
					/>
				</div>
				<div className={styles.card__info}>
					<div className={styles.card__infoContainer}>
						<p className={styles.card__info__name}>
							{product.name}
						</p>
						<p className={styles.card__info__price}>
							${product.price}
						</p>
					</div>
					{variant && (
						<div className={styles.card__infoContainer}>
							<p className={styles.card__info__style}>
								{variant.style}
							</p>
						</div>
					)}
				</div>
			</Link>
			{variant && (
				<div className={styles.favourite__container}>
					<Favourite
						className={styles.favourite}
						product={product}
						currentVariant={variant}
					/>
				</div>
			)}
		</div>
	);
};

export default ProductCard;
