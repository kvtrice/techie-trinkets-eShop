import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";
import {
	generateFakeFavouritedVariant,
	generateFakeProduct,
} from "../../mocks/product-data.mock";
import { MemoryRouter } from "react-router-dom";
import { VariantContext } from "../../contexts/VariantContextProvider";
import { AllProductsContext } from "../../contexts/AllProductsContextProvider";

describe("ProductCard", () => {
	const testProduct = generateFakeProduct(
		"Test product name",
		25,
		true,
		3,
		"Pink",
		false,
		5,
		"Black"
	);

	const testVariant = generateFakeFavouritedVariant(
		true,
		"ABCDEFGH123456",
		25,
		"Test product name",
		5,
		"Black"
	);

	const mockVariantContextValue = {
		favourites: [],
		setFavourites: vitest.fn(),
	};

	const mockProductContextValue = {
		products: [],
		setProducts: vitest.fn(),
	};

	it("Should render the correct card details based on the passed in product", () => {
		render(
			<MemoryRouter>
				<ProductCard product={testProduct} />
			</MemoryRouter>
		);

		const heading = screen.getByText(/Test product name/i);
		expect(heading).toBeInTheDocument();
		const price = screen.getByText("$25");
		expect(price).toBeInTheDocument();
	});

	it("Should render additional variant information when a variant is passed in as a prop", () => {
		render(
			<VariantContext.Provider value={ mockVariantContextValue}>
				<AllProductsContext.Provider
					value={ mockProductContextValue }
				>
					<MemoryRouter>
						<ProductCard
							product={testProduct}
							variant={testVariant}
						/>
					</MemoryRouter>
				</AllProductsContext.Provider>
			</VariantContext.Provider>
		);

		const style = screen.getByText("Black");
		expect(style).toBeInTheDocument();
	});
});
