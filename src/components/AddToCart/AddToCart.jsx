import { useEffect, useState } from "react";
import styles from "./AddToCart.module.scss";
import { subtractProductQtyById } from "../../services/products-service";
import { getCartItems, saveCartItems } from "../../utils/cart-utils";

const AddToCart = ({
	product,
	currentVariant,
	setMaxQuantity,
	setItemCount,
	itemCount,
	maxQuantity,
}) => {
	const [addedToCart, setAddedToCart] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		if (maxQuantity === 0) {
			setError("This item is currently out of stock");
		} else if (maxQuantity === 1) {
			setError("Hurry, only 1 left!");
		} else {
			setError("");
		}
	}, [maxQuantity, currentVariant]);

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
		const newItemCount = Number(itemCount) + 1;
		setItemCount(newItemCount);
	};

	const decrement = e => {
		e.preventDefault();
		setError("");
		const newItemCount = Number(itemCount) - 1;
		setItemCount(newItemCount);
	};

	const handleCart = async () => {
		if (Number(itemCount) > 0 && Number(itemCount) <= maxQuantity) {
			const newCartItem = {
				id: product.id,
				variantId: `${product.id}-${currentVariant.style}`,
				name: product.name,
				style: currentVariant.style,
				price: product.price,
				image: currentVariant.image,
				quantity: Number(itemCount),
			};

			const currentCartItems = getCartItems();

			const existingItemIndex = currentCartItems.findIndex(
				item => item.variantId === newCartItem.variantId
			);

			if (existingItemIndex !== -1) {
				currentCartItems[existingItemIndex].quantity +=
					newCartItem.quantity;
				saveCartItems(currentCartItems);
			} else {
				const updatedCartItems = [...currentCartItems, newCartItem];
				saveCartItems(updatedCartItems);
			}

			await subtractProductQtyById(
				product.id,
				currentVariant,
				newCartItem.quantity
			);

			const newMaxQuantity = maxQuantity - newCartItem.quantity;
			setMaxQuantity(newMaxQuantity);
			setItemCount(0);
			setAddedToCart(true);
		} else if (itemCount === 0 && maxQuantity !== 0) {
			setError("Please add at least one item");
		} else {
			setItemCount(0);
			setError(`Must enter a value less than or equal to ${maxQuantity}`);
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
					disabled={Number(itemCount) <= 0 || itemCount === ""}
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
					disabled={Number(itemCount) >= maxQuantity}
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
