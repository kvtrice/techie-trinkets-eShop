import { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../services/products-service";

export const AllProductsContext = createContext(null);

const AllProductsContextProvider = ({ children }) => {
	const [products, setProducts] = useState(null);

	useEffect(() => {
		getAllProducts().then(data => setProducts(data));
	}, []);

	return (
		<AllProductsContext.Provider value={{ products }}>
			{children}
		</AllProductsContext.Provider>
	);
};

export default AllProductsContextProvider;
