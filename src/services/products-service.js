import { db } from "../config/firestore";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

export const getAllProducts = async () => {
	const collectionRef = collection(db, "products");

	const snapshot = await getDocs(collectionRef);

	const cleanedData = snapshot.docs.map(doc => ({
		id: doc.id,
		...doc.data(),
	}));

	return cleanedData;
};

export const getProductById = async id => {
	const docRef = doc(db, "products", `${id}`);
	const snapshot = await getDoc(docRef);

	let data;
	if (snapshot.exists()) {
		data = {
			id: id,
			...snapshot.data(),
		};
	} else {
		return "No products found!";
	}
	return data;
};