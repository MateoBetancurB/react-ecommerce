import { createContext, useState, useEffect } from "react";

const EcommerceContext = createContext();

const EcommerceProvider = ({ children }) => {
	//products from API
	const [items, setItems] = useState([]);

	//product detail - open/close modal
	const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
	const openProductDetail = () => setIsProductDetailOpen(true);
	const closeProductDetail = (e) => {
		e.stopPropagation();
		setProduct({});
		setIsProductDetailOpen(false);
	};

	//shopping cart - open/close modal
	const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
	const openCheckout = () => setIsCheckoutOpen(true);
	const closeCheckout = () => setIsCheckoutOpen(false);

	//product detail - show product
	const [product, setProduct] = useState({});

	//shopping cart
	const [cartProducts, setCartProducts] = useState([]);

	//shopping cart - counter
	const count = cartProducts.length;

	useEffect(() => {
		const getApiData = async () => {
			const url = "https://fakestoreapi.com/products";
			const response = await fetch(url);
			const data = await response.json();
			setItems(data);
		};
		getApiData();
	}, []);

	const addProductsToShoppingCart = (e, productData) => {
		e.stopPropagation();
		setCartProducts([...cartProducts, productData]);
		openCheckout();
	};

	const showProduct = (productDetail) => {
		setProduct(productDetail);
		openProductDetail();
	};

	const deleteProductFromShoppingCart = (id) => {
		const productsFilter = cartProducts.filter((product) => product.id != id);
		setCartProducts(productsFilter);
	};

	// calc shopping cart total price
	const totalPrice = cartProducts.reduce(
		(acc, product) => acc + product.price,
		0
	);

	return (
		<EcommerceContext.Provider
			value={{
				items,
				count,
				isProductDetailOpen,
				openProductDetail,
				closeProductDetail,
				product,
				setProduct,
				showProduct,
				cartProducts,
				setCartProducts,
				addProductsToShoppingCart,
				isCheckoutOpen,
				openCheckout,
				closeCheckout,
				deleteProductFromShoppingCart,
				totalPrice,
			}}
		>
			{children}
		</EcommerceContext.Provider>
	);
};

export { EcommerceProvider, EcommerceContext };
