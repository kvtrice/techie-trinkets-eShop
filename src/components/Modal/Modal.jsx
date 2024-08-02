import styles from "./Modal.module.scss";

const Modal = ({ children }) => {
	return (
		<div className={styles.modal__container}>
			<div className={styles.modal}>
				<div className={styles.modal__content}>{children}</div>
			</div>
		</div>
	);
};

export default Modal;
