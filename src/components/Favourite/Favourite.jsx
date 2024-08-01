import { useContext, useEffect, useState } from "react";
import styles from "./Favourite.module.scss";
import { FiHeart } from "react-icons/fi";
import {
	setProductFavouriteById,
	subscribeToFavourite,
} from "../../services/products-service";
import { VariantContext } from "../../contexts/VariantContextProvider";
import {
	findVariantByStyle,
	updateFavourites,
} from "../../utils/variant-utils";

const Favourite = ({ product, currentVariant }) => {
	const [isSelected, setIsSelected] = useState(currentVariant.favourite);
	const { favourites, setFavourites } = useContext(VariantContext);

	useEffect(() => {
		if (currentVariant) {
			setIsSelected(currentVariant.favourite);
		}

		const unsub = subscribeToFavourite(product.id, updatedProduct => {
			const updatedVariant = findVariantByStyle(
				updatedProduct,
				currentVariant.style
			);

			if (updatedVariant) {
				setIsSelected(updatedVariant.favourite);
				setFavourites(favourites =>
					updateFavourites(
						favourites,
						product,
						updatedVariant.style,
						updatedVariant.favourite
					)
				);
			}
		});

		// Cleanup
		return () => unsub();
	}, [currentVariant, product]);

	const handleClick = async () => {
		const newFavouriteState = !isSelected;
		setIsSelected(newFavouriteState);
		await setProductFavouriteById(
			product.id,
			currentVariant,
			newFavouriteState
		);
	};

	return (
		<div
			className={styles.favourite}
			onClick={() => handleClick()}
		>
			<FiHeart
				className={styles.favourite__icon}
				fill={isSelected ? "#eaa39e" : "#f9f5e3"}
				color={isSelected ? "#eaa39e" : ""}
			/>
		</div>
	);
};

export default Favourite;
