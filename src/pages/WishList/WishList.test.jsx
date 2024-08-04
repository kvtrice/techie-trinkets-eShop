import { render, screen } from "@testing-library/react";
import WishList from "./WishList";
import { VariantContext } from "../../contexts/VariantContextProvider";

describe.skip("WishList", () => {
	const mockVariantContextValue = {
		favourites: [],
		setFavourites: vitest.fn(),
	};

	it("Should render the WishList component correctly", () => {
		render(
			<VariantContext.Provider value={mockVariantContextValue}>
				<WishList />
			</VariantContext.Provider>
		);

		const noProductsText = screen.getByText(
			/There are no products in your wish list yet, let's add some!/i
		);
		expect(noProductsText).toBeInTheDocument();

		const browseButton = screen.getByText(/Start Browsing/i);
		expect(browseButton).toBeInTheDocument();
	});
});
