import { useEffect, useState } from "react";
import styles from "./AddToCart.module.scss";
import { updateProductQtyById } from "../../services/products-service";

const AddToCart = ({
	product,
	currentVariant,
	setMaxQuantity,
	setItemCount,
	itemCount,
	maxQuantity,
}) => {
	// const [itemCount, setItemCount] = useState(0);
	// const [maxQuantity, setMaxQuantity] = useState();
	const [addedToCart, setAddedToCart] = useState(false);
	const [error, setError] = useState("");

	// useEffect(() => {
	// 	if (currentVariant) {
	// 		setMaxQuantity(currentVariant.quantity);
	// 		setItemCount(0);
	// 	}
	// }, [product, currentVariant]);

	useEffect(() => {
		if (addedToCart) {
			setTimeout(() => {
				setAddedToCart(false);
			}, 3000);
		}
	}, [addedToCart]);

	const handleSubmit = e => {
		e.preventDefault();
		handleCart();
	};

	const increment = e => {
		e.preventDefault();
		setError("");
		const newItemCount = itemCount + 1;
		setItemCount(newItemCount);
	};

	const decrement = e => {
		setError("");
		e.preventDefault();
		const newItemCount = itemCount - 1;
		setItemCount(newItemCount);
	};

	const handleCart = async () => {
		if (itemCount > 0) {
			const newCartItem = {
				id: product.id,
				variantId: `${product.id}-${currentVariant.style}`,
				name: product.name,
				style: currentVariant.style,
				price: product.price,
				image: currentVariant.image,
				quantity: Number(itemCount),
			};

			const currentCartItems =
				JSON.parse(localStorage.getItem("cart")) || [];

			const existingItemIndex = currentCartItems.findIndex(
				item => item.variantId === newCartItem.variantId
			);

			if (existingItemIndex !== -1) {
				currentCartItems[existingItemIndex].quantity +=
					newCartItem.quantity;
				localStorage.setItem("cart", JSON.stringify(currentCartItems));
			} else {
				const updatedCartItems = [...currentCartItems, newCartItem];
				localStorage.setItem("cart", JSON.stringify(updatedCartItems));
			}

			await updateProductQtyById(
				product.id,
				currentVariant,
				0 - newCartItem.quantity
			);

			const newMaxQuantity = maxQuantity - newCartItem.quantity;
			setMaxQuantity(newMaxQuantity);
			setItemCount(0);
			setAddedToCart(true);
		} else {
			setError("Please add at least one item");
		}
	};

	return (
		<form
			className={styles.form}
			onSubmit={handleSubmit}
		>
			<div className={styles.form__container}>
				<button
					className={styles.form__decrease}
					onClick={decrement}
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
					onClick={increment}
					disabled={itemCount == maxQuantity}
				>
					+
				</button>
			</div>
			<div>
				<small className={styles.form__error}>{error}</small>
			</div>
			<button
				type="submit"
				className={styles.form__addToCart}
			>
				{addedToCart ? "✅ Added to cart!" : "Add to Cart"}
			</button>
		</form>
	);
};
export default AddToCart;
