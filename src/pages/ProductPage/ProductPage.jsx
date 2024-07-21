import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.scss";
import { useEffect, useState } from "react";
import { getItemById } from "../../services/test-service";

const ProductPage = () => {
	const { id } = useParams();
	const [item, setItem] = useState();

	useEffect(() => {
		if (id) {
			getItemById(id).then(item => setItem(item));
		}
	}, [id]);

	return (
		<>
			{item && (
				<div>
					<p>{item.name}</p>
					<p>{item.description}</p>
					<p>{item.color}</p>
					<p>{item.qty}</p>
				</div>
			)}
		</>
	);
};
export default ProductPage;
