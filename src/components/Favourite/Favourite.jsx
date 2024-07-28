import { useEffect, useState } from "react";
import styles from "./Favourite.module.scss";
import { FiHeart } from "react-icons/fi";
import { setProductFavouriteById } from "../../services/products-service";

const Favourite = ({ product, currentStyle }) => {
	const [isSelected, setIsSelected] = useState(false);

	useEffect(() => {
		const currentVariant = product.variants.find(
			variant => variant.style === currentStyle
		);
		if (currentVariant) {
			setIsSelected(currentVariant.favourite);
		}
	}, [currentStyle, product]);

	const handleClick = async () => {
		setIsSelected(!isSelected);
		await setProductFavouriteById(product.id, currentStyle, !isSelected);
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
