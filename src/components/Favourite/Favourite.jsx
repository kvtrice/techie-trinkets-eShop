import { useEffect, useState } from "react";
import styles from "./Favourite.module.scss";
import { FiHeart } from "react-icons/fi";
import {
	setProductFavouriteById,
	subscribeToFavourite,
} from "../../services/products-service";

const Favourite = ({ product, currentVariant }) => {
	const [isSelected, setIsSelected] = useState();

	useEffect(() => {
		if (currentVariant) {
			setIsSelected(currentVariant.favourite);
		}

		const unsub = subscribeToFavourite(product.id, updatedProduct => {
			const updatedVariant = updatedProduct.variants.find(
				variant => variant.style === currentVariant.style
			);

			if (updatedVariant) {
				setIsSelected(updatedVariant.favourite);
			}
		});

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
				size={30}
				fill={isSelected ? "#eaa39e" : "#f9f5e3"}
				color={isSelected ? "#eaa39e" : ""}
			/>
		</div>
	);
};

export default Favourite;
