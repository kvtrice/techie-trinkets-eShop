import { useContext } from "react";
import {
	addProductQtyById,
} from "../../services/products-service";
import { removeCartItem, saveCartItems } from "../../utils/cart-utils";
import styles from "./CartItem.module.scss";
import { CartContext } from "../../contexts/CartContextProvider";

const CartItem = ({ cartItem }) => {
	const { cartItems, setCartItems } = useContext(CartContext);

	const handleRemoveCartItem = async () => {
		await addProductQtyById(cartItem.id, cartItem, cartItem.quantity);
		const newCartItems = removeCartItem(cartItems, cartItem);
		setCartItems(newCartItems);
		saveCartItems(newCartItems);
	};

	return (
		<div className={styles.cartItem}>
			<img
				className={styles.cartItem__img}
				src={cartItem.image}
				alt={cartItem.name}
			/>
			<p className={styles.cartItem__name}>{cartItem.name}</p>
			<p className={styles.cartItem__style}>{cartItem.style}</p>
			<p className={styles.cartItem__qty}>x {cartItem.quantity}</p>
			<p className={styles.cartItem__price}>${cartItem.price}</p>
			<p>${cartItem.price * cartItem.quantity}</p>
			<button
				className={styles.cartItem__remove}
				onClick={handleRemoveCartItem}
			>
				Remove from cart
			</button>
		</div>
	);
};

export default CartItem;
