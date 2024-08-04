import styles from "./ShoppingCart.module.scss";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import CartItemsContainer from "../../components/CartItemsContainer/CartItemsContainer";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContextProvider";
import {
	clearCartItems,
	getCartItems,
	getCartTotalPrice,
} from "../../utils/cart-utils";
import { addProductQtyById } from "../../services/products-service";
import Modal from "../../components/Modal/Modal";
import NavBar from "../../components/NavBar/NavBar";

const ShoppingCart = () => {
	const [checkoutModal, setCheckoutModal] = useState(false);
	const { cartItems, setCartItems } = useContext(CartContext);

	useEffect(() => {
		const storedCartItems = getCartItems(cartItems);
		setCartItems(storedCartItems);
	}, []);

	const updateAllProductQtys = async () => {
		// Array of promises for updating all product quantity's
		const promises = cartItems.map(cartItem =>
			addProductQtyById(cartItem.id, cartItem, cartItem.quantity)
		);

		// Await all promises
		await Promise.all(promises);
	};

	const handleClearCart = async () => {
		await updateAllProductQtys();
		setCartItems([]);
		clearCartItems();
		window.location.reload();
	};

	const handleCheckout = async () => {
		await updateAllProductQtys();
		setCartItems([]);
		clearCartItems();
		setCheckoutModal(true);
	};

	return (
		<>
			<NavBar />
			<PageWrapper>
				{cartItems.length === 0 && (
					<p className={styles.shoppingCart__noItems}>
						No items in cart
					</p>
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
								className={
									styles.shoppingCart__footer__cartActions
								}
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
									onClick={handleCheckout}
								>
									Checkout
								</button>
							</div>
						</div>
					</>
				)}
				{checkoutModal && (
					<Modal>
						<p className={styles.checkoutContent}>
							Thank you for shopping at Techie Trinkets! 🎉
						</p>
						<button
							className={styles.continueShopping}
							onClick={() => setCheckoutModal(false)}
						>
							Keep Shopping
						</button>
					</Modal>
				)}
			</PageWrapper>
		</>
	);
};
export default ShoppingCart;
