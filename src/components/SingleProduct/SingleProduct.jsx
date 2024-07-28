import { useState } from "react";
import AddToCart from "../AddToCart/AddToCart";
import styles from "./SingleProduct.module.scss";

const SingleProduct = ({ product }) => {
	const [currentImage, setCurrentImage] = useState(
		product?.variants[0]?.image
	);
	const [currentStyle, setCurrentStyle] = useState();

	const handleStyleChange = style => {
		setCurrentStyle(style);
		const variant = product.variants.find(
			variant => variant.style === style
		);
		if (variant) {
			setCurrentImage(variant.image);
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
						{product.variants?.map(variant => (
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
					<h1 className={styles.product__info__content__heading}>
						{product.name}
					</h1>
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
					<AddToCart />
				</div>
			</div>
		</div>
	);
};
export default SingleProduct;
