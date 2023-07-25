import { useContext } from "react";

import { EcommerceContext } from "../context/EcommerceProvider";

const useEcommerce = () => {
	return useContext(EcommerceContext);
};

export { useEcommerce };
