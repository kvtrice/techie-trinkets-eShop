import { db } from "../config/firestore";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

export const getAllItems = async () => {
	const collectionRef = collection(db, "testing");

	const snapshot = await getDocs(collectionRef);

	const cleanedData = snapshot.docs.map(doc => ({
		id: doc.id,
		...doc.data(),
	}));

	return cleanedData;
};

export const getItemById = async id => {
	const docRef = doc(db, "testing", `${id}`);
	const snapshot = await getDoc(docRef);

	let data;
	if (snapshot.exists()) {
		data = {
			id: id,
			...snapshot.data(),
		};
	} else {
		return "No items found!";
	}
	return data;
};
