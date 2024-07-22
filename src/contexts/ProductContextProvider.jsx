import { createContext, useEffect, useState } from "react";
import { getAllProducts } from '../services/products-service';

export const ProductContext = createContext(null);

const ProductContextProvider = ({ children }) => {
	const [products, setProducts] = useState(null);

	useEffect(() => {
		getAllProducts().then(data => setProducts(data));
	}, []);

	return (
		<ProductContext.Provider value={{ products }}>
			{children}
		</ProductContext.Provider>
	);
};

export default ProductContextProvider;
