import styles from "./CartItemsContainer.module.scss";
import CartItem from "../CartItem/CartItem";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContextProvider";

const CartItemsContainer = () => {
	const { cartItems } = useContext(CartContext);

	return (
		<>
			<div className={styles.cartItemContainer}>
				{cartItems?.map(cartItem => (
					<CartItem
						key={cartItem.variantId}
						cartItem={cartItem}
					/>
				))}
			</div>
		</>
	);
};

export default CartItemsContainer;
