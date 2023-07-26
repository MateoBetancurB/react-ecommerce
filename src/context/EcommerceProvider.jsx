import { createContext, useState, useEffect } from "react";

const EcommerceContext = createContext();

const EcommerceProvider = ({ children }) => {
	const [items, setItems] = useState([]);
	let [count, setCount] = useState(0);

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

	return (
		<EcommerceContext.Provider
			value={{
				items,
				count,
				setCount,
				incrementShoppingCart,
			}}
		>
			{children}
		</EcommerceContext.Provider>
	);
};

export { EcommerceProvider, EcommerceContext };
