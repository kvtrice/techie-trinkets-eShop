import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.scss";
import { useEffect, useState } from "react";
import { getProductById } from "../../services/products-service";
import SingleProduct from "../../components/SingleProduct/SingleProduct";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

const ProductPage = () => {
	const { id } = useParams();
	const [product, setProduct] = useState();

	useEffect(() => {
		if (id) {
			getProductById(id).then(product => setProduct(product));
		}
	}, [id]);

	return (
		<PageWrapper>
			<div className={styles.productPage}>
				{product && <SingleProduct product={product} />}
			</div>
		</PageWrapper>
	);
};
export default ProductPage;
