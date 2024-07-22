import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }) => {
	return (
		<Link to={`/products/${product.id}`}>
			<div>
				<h1>{product.name}</h1>
				<h4>{product.description}</h4>
				<p>${product.price}</p>
			</div>
		</Link>
	);
};
export default ProductCard;
