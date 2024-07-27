import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.scss";
import { useEffect, useState } from "react";
import { getProductById } from "../../services/products-service";

const ProductPage = () => {
	const { id } = useParams();
	const [product, setProduct] = useState();

	useEffect(() => {
		if (id) {
			getProductById(id).then(product => setProduct(product));
		}
	}, [id]);

	return (
		<>
			{product && (
				<div>
					<p>{product.name}</p>
					<p>{product.description}</p>
					<p>{product.price}</p>
					{product.variants?.map(variant => <div key={variant.style}> 
						<p>{variant.style}</p>
						<p>{variant.quantity}</p>
						<p>{variant.favourite ? "Favourited" : "Not Favourited"}</p>
						<img src={variant.image} />
					</div>)}
				</div>
			)}
		</>
	);
};
export default ProductPage;
