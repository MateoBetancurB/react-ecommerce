import { createContext, useState, useEffect } from "react";

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
	const [searchByTitle, setSearchByTitle] = useState("");
	const [searchByCategory, setSearchByCategory] = useState(null);

	useEffect(() => {
		const getApiData = async () => {
			const url = "https://fakestoreapi.com/products";
			const response = await fetch(url);
			const data = await response.json();
			setItems(data);
		};
		getApiData();
	}, []);

	const filteredItemsByTitle = (items, searchByTitle) => {
		return items?.filter((item) =>
			item.title.toLowerCase().includes(searchByTitle.toLowerCase())
		);
	};

	const filteredItemsByCategory = (items, searchByCategory) => {
		return items?.filter((item) =>
			item.category.toLowerCase().includes(searchByCategory.toLowerCase())
		);
	};

	const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
		if (searchType === "BY_TITLE") {
			return filteredItemsByTitle(items, searchByTitle);
		}

		if (searchType === "BY_CATEGORY") {
			return filteredItemsByCategory(items, searchByCategory);
		}

		if (searchType === "BY_TITLE_AND_CATEGORY") {
			return filteredItemsByCategory(items, searchByCategory).filter((item) =>
				item.title.toLowerCase().includes(searchByTitle.toLowerCase())
			);
		}

		if (!searchType) {
			return items;
		}
	};

	useEffect(() => {
		if (searchByTitle && searchByCategory)
			setFilteredItems(
				filterBy(
					"BY_TITLE_AND_CATEGORY",
					items,
					searchByTitle,
					searchByCategory
				)
			);
		if (searchByTitle && !searchByCategory)
			setFilteredItems(
				filterBy("BY_TITLE", items, searchByTitle, searchByCategory)
			);
		if (!searchByTitle && searchByCategory)
			setFilteredItems(
				filterBy("BY_CATEGORY", items, searchByTitle, searchByCategory)
			);
		if (!searchByTitle && !searchByCategory)
			setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [items, searchByTitle, searchByCategory]);

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
				searchByTitle,
				setSearchByTitle,
				filteredItems,
				setFilteredItems,
				searchByCategory,
				setSearchByCategory,
			}}
		>
			{children}
		</EcommerceContext.Provider>
	);
};

export { EcommerceProvider, EcommerceContext };
