import { createContext, useState } from "react";

const EcommerceContext = createContext();

const EcommerceProvider = ({ children }) => {
	let [count, setCount] = useState(0);

	const incrementShoppingCart = () => {
		setCount(count + 1);
	};

	return (
		<EcommerceContext.Provider
			value={{
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
