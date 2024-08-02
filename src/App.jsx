import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import AllProductsContextProvider from "./contexts/AllProductsContextProvider";
import AllProductsPage from "./pages/AllProductsPage/AllProductsPage";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import WishList from "./pages/WishList/WishList";
import VariantContextProvider from "./contexts/VariantContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";

function App() {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<AllProductsContextProvider>
					<VariantContextProvider>
						<CartContextProvider>
							<Routes>
								<Route
									path="/"
									element={<HomePage />}
								/>
								<Route
									path="/products"
									element={<AllProductsPage />}
								/>
								<Route
									path="/products/:id/:variantId?"
									element={<ProductPage />}
								/>
								<Route
									path="/wishlist"
									element={<WishList />}
								/>
								<Route
									path="/cart"
									element={<ShoppingCart />}
								/>
							</Routes>
						</CartContextProvider>
					</VariantContextProvider>
				</AllProductsContextProvider>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
