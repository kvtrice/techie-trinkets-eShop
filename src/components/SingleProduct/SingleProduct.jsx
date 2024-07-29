import { useEffect, useState } from "react";
import AddToCart from "../AddToCart/AddToCart";
import styles from "./SingleProduct.module.scss";
import Favourite from "../Favourite/Favourite";

const SingleProduct = ({ product }) => {
	const [currentImage, setCurrentImage] = useState(
		product?.variants[0]?.image
	);
	const [currentStyle, setCurrentStyle] = useState(
		product?.variants[0]?.style
	);
	const [currentVariant, setCurrentVariant] = useState(product.variants[0]);

	const handleStyleChange = style => {
		setCurrentStyle(style);
		const variant = product?.variants?.find(
			variant => variant.style === style
		);
		if (variant) {
			setCurrentImage(variant.image);
			setCurrentVariant(variant);
		}
	};

	return (
		<div className={styles.product}>
			<div className={styles.product__info}>
				<div className={styles.product__info__images}>
					<div
						className={styles.product__info__images__mainContainer}
					>
						<img
							className={styles.product__info__images__main}
							src={currentImage}
						/>
					</div>
					<div
						className={
							styles.product__info__images__variantsContainer
						}
					>
						{product?.variants?.map(variant => (
							<div
								className={
									styles.product__info__images__variant
								}
								key={variant.style}
								onClick={() => handleStyleChange(variant.style)}
							>
								<img
									className={
										styles.product__info__images__variant__img
									}
									src={variant.image}
								/>
							</div>
						))}
					</div>
				</div>
				<div className={styles.product__info__content}>
					<div className={styles.product__info__content__header}>
						<h1
							className={
								styles.product__info__content__header__heading
							}
						>
							{product.name}
						</h1>
						<Favourite
							product={product}
							currentVariant={currentVariant}
						/>
					</div>
					<p className={styles.product__info__content__description}>
						{product.description}
					</p>
					<p className={styles.product__info__content__price}>
						${product.price}
					</p>
					<div
						className={
							styles.product__info__content__styleContainer
						}
					>
						<select
							name="style"
							id="style"
							className={styles.product__info__content__style}
							onChange={e => handleStyleChange(e.target.value)}
							value={currentStyle}
						>
							{product.variants?.map(variant => (
								<option
									key={variant.style}
									value={variant.style}
								>
									{variant.style}
								</option>
							))}
						</select>
					</div>
					<AddToCart
						product={product}
						currentVariant={currentVariant}
					/>
				</div>
			</div>
		</div>
	);
};
export default SingleProduct;
