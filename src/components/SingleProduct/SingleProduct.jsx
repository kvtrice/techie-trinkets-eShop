import styles from "./SingleProduct.module.scss";

const SingleProduct = ({ product }) => {
	return (
		<div className={styles.product}>
			<div className={styles.product__info}>
				<div className={styles.product__info__images}>
					<div
						className={styles.product__info__images__mainContainer}
					>
						<img
							className={styles.product__info__images__main}
							src={product.variants[0].image}
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
					<p>{product.price}</p>
				</div>
			</div>
		</div>
	);
};
export default SingleProduct;
