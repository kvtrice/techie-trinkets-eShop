import styles from "./ShoppingCart.module.scss";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import CartItemsContainer from "../../components/CartItemsContainer/CartItemsContainer";
import { useEffect, useState } from "react";

const ShoppingCart = () => {
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
		setCartItems(storedCartItems);
	}, []);

	const handleCartUpdate = newCartItems => {
		setCartItems(newCartItems);
	};

	const cartTotalPrice = cartItems.reduce((acc, item) => {
		const subtotal = item.price * item.quantity;
		acc += subtotal;
		return acc;
	}, 0);

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
					<CartItemsContainer onRemove={handleCartUpdate} />
					<h2 className={styles.shoppingCart__total}>
						Cart Total: ${cartTotalPrice}
					</h2>
				</>
			)}
		</PageWrapper>
	);
};
export default ShoppingCart;
