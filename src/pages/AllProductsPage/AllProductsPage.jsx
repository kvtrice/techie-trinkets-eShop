import AllProducts from "../../components/AllProducts/AllProducts";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import styles from "./AllProductsPage.module.scss";

const AllProductsPage = () => {
	return (
		<PageWrapper>
			<div className={styles.allProducts}>
				<h1 className={styles.allProducts__heading}>
					Browse All Products
				</h1>
				<AllProducts />
			</div>
		</PageWrapper>
	);
};
export default AllProductsPage;
