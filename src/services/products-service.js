import { db } from "../config/firestore";
import {
	collection,
	getDocs,
	doc,
	getDoc,
	updateDoc,
	onSnapshot,
} from "firebase/firestore";

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

export const setProductFavouriteById = async (id, currentVariant, boolean) => {
	const docRef = doc(db, "products", `${id}`);
	const snapshot = await getDoc(docRef);

	if (snapshot.exists()) {
		const productData = snapshot.data();
		const updatedVariant = productData.variants.map(variant => {
			if (variant.style === currentVariant.style) {
				return { ...variant, favourite: boolean };
			}
			return variant;
		});

		await updateDoc(docRef, { variants: updatedVariant });
	}
};

export const subscribeToFavourite = (id, callback) => {
	const docRef = doc(db, "products", `${id}`);
	const unsub = onSnapshot(docRef, doc => {
		if (doc.exists()) {
			const productData = {
				id: doc.id,
				...doc.data(),
			};
			callback(productData);
		}
	});

	return unsub;
};

export const updateProductQtyById = async (id, currentVariant, qtyChange) => {
	const docRef = doc(db, "products", `${id}`);
	const snapshot = await getDoc(docRef);

	if (snapshot.exists()) {
		const productData = snapshot.data();
		const updatedVariant = productData.variants.map(variant => {
			if (variant.style === currentVariant.style) {
				return { ...variant, quantity: variant.quantity + qtyChange };
			}
			return variant;
		});

		await updateDoc(docRef, { variants: updatedVariant });
	}
};
