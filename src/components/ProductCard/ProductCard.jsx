import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }) => {
	return (
		<Link
			style={{ textDecoration: "none" }}
			to={`/products/${product.id}`}
		>
			<div className={styles.card}>
				<div className={styles.card__imgContainer}>
					<img
						className={styles.card__imgContainer__img}
						src={product.variants[0].image}
						alt={product.name}
					/>
				</div>
				<div className={styles.card__info}>
					<p className={styles.card__info__name}>{product.name}</p>
					<p className={styles.card__info__price}>${product.price}</p>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
