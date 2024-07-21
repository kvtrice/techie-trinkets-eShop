import { createContext, useEffect, useState } from "react";
import { getAllItems } from "../services/test-service";

export const ProductContext = createContext(null);

const ProductContextProvider = ({ children }) => {
	const [products, setProducts] = useState(null);

	useEffect(() => {
		getAllItems().then(data => setProducts(data));
	}, []);

	return (
		<ProductContext.Provider value={{ products }}>
			{children}
		</ProductContext.Provider>
	);
};

export default ProductContextProvider;
