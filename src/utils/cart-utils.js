// Function to get the cart from localStorage
export const getCartItems = () => {
	return JSON.parse(localStorage.getItem("cart")) || [];
};

// Fuinction to save cart items to local storage
export const saveCartItems = cartItems => {
	localStorage.setItem("cart", JSON.stringify(cartItems));
};

// Function to calculate total price of cart items
export const getCartTotalPrice = cartItems => {
	return cartItems.reduce((acc, item) => {
		const subtotal = item.price * item.quantity;
		acc += subtotal;
		return acc;
	}, 0);
};

// Function to clear cart items
export const clearCartItems = () => {
	localStorage.removeItem("cart");
};

// Function to remove an item from the cart
export const removeCartItem = (cartItems, item) => {
	return cartItems.filter(cartItem => cartItem.variantId !== item.variantId);
};
