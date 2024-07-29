import styles from "./PageWrapper.module.scss";

const PageWrapper = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>;
};
export default PageWrapper;
