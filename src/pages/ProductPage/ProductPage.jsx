import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.scss";
import { useEffect, useState } from "react";
import { getProductById } from "../../services/products-service";
import SingleProduct from "../../components/SingleProduct/SingleProduct";

const ProductPage = () => {
	const { id } = useParams();
	const [product, setProduct] = useState();

	useEffect(() => {
		if (id) {
			getProductById(id).then(product => setProduct(product));
		}
	}, [id]);

	return (
		<div className={styles.productPage}>
			{product && <SingleProduct product={product} />}
		</div>
	);
};
export default ProductPage;
