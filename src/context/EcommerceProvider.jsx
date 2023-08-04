import { createContext, useState, useEffect, useMemo } from "react";

const EcommerceContext = createContext();

const EcommerceProvider = ({ children }) => {
	//products from API
	const [items, setItems] = useState([]);

	//filtered items
	const [filteredItems, setFilteredItems] = useState([]);

	//shopping cart - open/close modal
	const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

	//product detail - open/close modal
	const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

	//product detail - show product
	const [product, setProduct] = useState({});

	//shopping cart
	const [cartProducts, setCartProducts] = useState([]);

	//shopping cart - order
	const [order, setOrder] = useState([]);

	//shopping cart - counter
	const count = cartProducts.length;

	//input search products
	const [inputSearch, setInputSearch] = useState("");

	useEffect(() => {
		const getApiData = async () => {
			const url = "https://fakestoreapi.com/products";
			const response = await fetch(url);
			const data = await response.json();
			setItems(data);
		};
		getApiData();
	}, []);

	const filteredProducts = (items, inputSearch) => {
		return items?.filter((item) =>
			item.title.toLowerCase().includes(inputSearch.toLowerCase())
		);
	};

	useEffect(() => {
		if (inputSearch) setFilteredItems(filteredProducts(items, inputSearch));
	}, [items, inputSearch]);

	const openProductDetail = () => setIsProductDetailOpen(true);
	const closeProductDetail = (e) => {
		e.stopPropagation();
		setProduct({});
		setIsProductDetailOpen(false);
	};
	const openCheckout = () => setIsCheckoutOpen(true);
	const closeCheckout = () => setIsCheckoutOpen(false);

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
				order,
				setOrder,
				inputSearch,
				setInputSearch,
				filteredItems,
				setFilteredItems,
			}}
		>
			{children}
		</EcommerceContext.Provider>
	);
};

export { EcommerceProvider, EcommerceContext };
