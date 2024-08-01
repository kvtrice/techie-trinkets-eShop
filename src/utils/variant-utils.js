// Function to find a variant by style
export const findVariantByStyle = (product, variantStyle) => {
	return product.variants.find(variant => variant.style === variantStyle);
};

// Function to generate an id (unique key) for a variant
export const generateVariantId = (product, variantStyle) => {
	return `${product.id}-${variantStyle}`;
};

// Function to update favourites when a variant's favourite state is changed
export const updateFavourites = (
	currentFavourites,
	product,
	variantStyle,
	newFavouriteState
) => {
	// Need a unique id to use as a key when mapping through the variants
	const variantId = generateVariantId(product, variantStyle);

	if (newFavouriteState) {
		// Add to favourites if it doesn't already exist
		const variant = findVariantByStyle(product, variantStyle);
		if (
			variant &&
			!currentFavourites.some(variant => variant.id === variantId)
		) {
			return [
				...currentFavourites,
				{ ...variant, product: product, id: variantId },
			];
		}
	} else {
		// Otherwise remove it from favourites
		return currentFavourites?.filter(variant => variant.id !== variantId);
	}

	return currentFavourites;
};
