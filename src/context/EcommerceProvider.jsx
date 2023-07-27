import { createContext, useState, useEffect } from "react";

const EcommerceContext = createContext();

const EcommerceProvider = ({ children }) => {
	//products from API
	const [items, setItems] = useState([]);

	//shopping cart - counter
	let [count, setCount] = useState(0);

	//product detail - open/close modal
	const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
	const openProductDetail = () => setIsProductDetailOpen(true);
	const closeProductDetail = (e) => {
		e.stopPropagation();
		setProduct({});
		setIsProductDetailOpen(false);
	};

	//product detail - show product
	const [product, setProduct] = useState({});

	useEffect(() => {
		const getApiData = async () => {
			const url = "https://fakestoreapi.com/products";
			const response = await fetch(url);
			const data = await response.json();
			setItems(data);
		};
		getApiData();
	}, []);

	const incrementShoppingCart = () => {
		setCount(count + 1);
	};

	const showProduct = (productDetail) => {
		setProduct(productDetail);
		openProductDetail();
	};

	return (
		<EcommerceContext.Provider
			value={{
				items,
				count,
				setCount,
				incrementShoppingCart,
				isProductDetailOpen,
				openProductDetail,
				closeProductDetail,
				product,
				setProduct,
				showProduct,
			}}
		>
			{children}
		</EcommerceContext.Provider>
	);
};

export { EcommerceProvider, EcommerceContext };
