import { useEffect, useState } from "react";
import styles from "./AddToCart.module.scss";

const AddToCart = ({ product, currentVariant }) => {
	const [itemCount, setItemCount] = useState(0);
	const [maxQuantity, setMaxQuantity] = useState();

	useEffect(() => {
		if (currentVariant) {
			setMaxQuantity(currentVariant.quantity);
			setItemCount(0);
		}
	}, [product, currentVariant]);

	const handleSubmit = () => {};

	const onSubmit = e => {
		e.preventDefault();
		handleSubmit();
	};

	return (
		<form
			className={styles.form}
			onSubmit={onSubmit}
		>
			<div className={styles.form__container}>
				<button
					className={styles.form__decrease}
					onClick={() => setItemCount(itemCount - 1)}
					disabled={itemCount === 0 || itemCount === ""}
				>
					-
				</button>
				<input
					className={styles.form__input}
					type="number"
					name="numItems"
					id="numItems"
					min="0"
					max={maxQuantity}
					value={itemCount}
					onChange={e => setItemCount(e.target.value)}
				/>
				<button
					className={styles.form__increase}
					onClick={() => setItemCount(itemCount + 1)}
					disabled={itemCount == maxQuantity}
				>
					+
				</button>
			</div>
			<button className={styles.form__addToCart}>Add to Cart</button>
		</form>
	);
};
export default AddToCart;
