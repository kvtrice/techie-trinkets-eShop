import styles from "./CartItem.module.scss";

const CartItem = ({ cartItem, onRemove }) => {
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
				onClick={() => onRemove(cartItem)}
			>
				Remove from cart
			</button>
		</div>
	);
};
export default CartItem;
