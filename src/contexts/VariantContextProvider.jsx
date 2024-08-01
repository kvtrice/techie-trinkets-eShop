import { createContext, useContext, useState, useEffect } from "react";
import { AllProductsContext } from "./AllProductsContextProvider";
import { generateVariantId } from "../utils/variant-utils";

export const VariantContext = createContext();

const VariantContextProvider = ({ children }) => {
	const [favourites, setFavourites] = useState();
	const { products } = useContext(AllProductsContext);

	useEffect(() => {
		const favouritedVariants = products?.reduce((acc, product) => {
			const favVariants = product.variants
				.filter(variant => variant.favourite)
				.map(variant => ({
					...variant,
					product: product,
					id: generateVariantId(product, variant.style),
				}));

			return [...acc, ...favVariants];
		}, []);

		setFavourites(favouritedVariants);
	}, [products]);

	return (
		<VariantContext.Provider value={{ favourites, setFavourites }}>
			{children}
		</VariantContext.Provider>
	);
};
export default VariantContextProvider;
