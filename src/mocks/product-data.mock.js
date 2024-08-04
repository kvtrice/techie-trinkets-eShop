export const generateFakeProduct = (
	productName,
	productPrice,
	v1Fav,
	v1Quantity,
	v1Style,
	v2Fav,
	v2Quantity,
	v2Style
) => {
	const fakeProduct = {
		description: "Some description",
		name: productName,
		price: productPrice,
		variants: [
			{
				favourite: v1Fav,
				featured: true,
				image: "testImage.png",
				quantity: v1Quantity,
				style: v1Style,
			},
			{
				favourite: v2Fav,
				featured: true,
				image: "testImage.png",
				quantity: v2Quantity,
				style: v2Style,
			},
		],
	};

	return fakeProduct;
};
