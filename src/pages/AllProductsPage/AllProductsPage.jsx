import AllProducts from "../../components/AllProducts/AllProducts";
import styles from "./AllProductsPage.module.scss";

const AllProductsPage = () => {
	return (
		<div className={styles.allProducts}>
			<h1 className={styles.allProducts__heading}>Browse All Products</h1>
			<AllProducts />
		</div>
	);
};
export default AllProductsPage;
