import styles from "./ShoppingCart.module.scss";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import CartItemsContainer from "../../components/CartItemsContainer/CartItemsContainer";
import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContextProvider";
import {
	clearCartItems,
	getCartItems,
	getCartTotalPrice,
} from "../../utils/cart-utils";
import { addProductQtyById } from "../../services/products-service";

const ShoppingCart = () => {
	const { cartItems, setCartItems } = useContext(CartContext);

	useEffect(() => {
		const storedCartItems = getCartItems(cartItems);
		setCartItems(storedCartItems);
	}, []);

	const handleClearCart = async () => {
		// Array of promises for updating all product quantity's
		const promises = cartItems.map(cartItem =>
			addProductQtyById(cartItem.id, cartItem, cartItem.quantity)
		);

		// Await all promises
		await Promise.all(promises);

		setCartItems([]);
		clearCartItems();
		window.location.reload();
	};

	return (
		<PageWrapper>
			{cartItems.length === 0 && (
				<p className={styles.shoppingCart__noItems}>No items in cart</p>
			)}
			{cartItems.length > 0 && (
				<>
					<h1 className={styles.shoppingCart__heading}>
						My Shopping Cart
					</h1>
					<CartItemsContainer />
					<div className={styles.shoppingCart__footer}>
						<h2 className={styles.shoppingCart__footer__total}>
							Cart Total: ${getCartTotalPrice(cartItems)}
						</h2>
						<div
							className={styles.shoppingCart__footer__cartActions}
						>
							<button
								className={
									styles.shoppingCart__footer__cartActions__clear
								}
								onClick={handleClearCart}
							>
								Clear Cart
							</button>
							<button
								className={
									styles.shoppingCart__footer__cartActions__checkout
								}
							>
								Checkout
							</button>
						</div>
					</div>
				</>
			)}
		</PageWrapper>
	);
};
export default ShoppingCart;
