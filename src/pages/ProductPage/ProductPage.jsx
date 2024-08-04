import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.scss";
import { useEffect, useState } from "react";
import { getProductById } from "../../services/products-service";
import SingleProduct from "../../components/SingleProduct/SingleProduct";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import { findVariantByStyle } from "../../utils/variant-utils";
import NavBar from "../../components/NavBar/NavBar";

const ProductPage = () => {
	const { id, variantId } = useParams();
	const [product, setProduct] = useState();
	const [initialVariant, setInitialVariant] = useState();

	useEffect(() => {
		if (id) {
			getProductById(id).then(product => {
				setProduct(product);

				if (variantId) {
					const [productId, variantStyle] = variantId.split("-");
					const variant = findVariantByStyle(product, variantStyle);
					setInitialVariant(variant);
				} else {
					setInitialVariant(product.variants[0]);
				}
			});
		}
	}, [id]);

	return (
		<>
			<NavBar />
			<PageWrapper>
				<div className={styles.productPage}>
					{product && (
						<SingleProduct
							product={product}
							setProduct={setProduct}
							initialVariant={initialVariant}
						/>
					)}
				</div>
			</PageWrapper>
		</>
	);
};

export default ProductPage;
