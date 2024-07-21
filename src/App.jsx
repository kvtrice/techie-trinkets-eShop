import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import ProductContextProvider from "./contexts/ProductContextProvider";

function App() {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<ProductContextProvider>
					<Routes>
						<Route
							path="/"
							element={<HomePage />}
						/>
						<Route
							path="/products/:id"
							element={<ProductPage />}
						/>
						<Route
							path="/cart"
							element={<ShoppingCart />}
						/>
					</Routes>
				</ProductContextProvider>
			</BrowserRouter>
		</>
	);
}

export default App;
