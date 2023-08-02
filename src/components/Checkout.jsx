import { useEcommerce } from "../hooks/useEcommerce";
import { OrderCard } from "./OrderCard";

const Checkout = () => {
	const {
		isCheckoutOpen,
		closeCheckout,
		cartProducts,
		setCartProducts,
		totalPrice,
		order,
		setOrder,
	} = useEcommerce();

	const handleCheckout = () => {
		const orderToAdd = {
			date: "01/02/2023",
			products: cartProducts,
			totalProducts: cartProducts.length,
			totalPrice: totalPrice,
		};
		setOrder([...order, orderToAdd]);
		setCartProducts([]);
	};

	return (
		<>
			{isCheckoutOpen && (
				<aside className="w-[360px] h-[calc(95vh-68px)] overflow-y-auto flex flex-col fixed right-3 border border-black rounded-lg top-20 bg-white pb-5">
					<div className="flex justify-between items-center p-6">
						<h2 className="font-bold text-lg">My Order</h2>
						<button
							onClick={closeCheckout}
							className="hover:bg-gray-300 p-1 rounded-full transition-colors"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
					<div className="flex justify-center py-4 items-center">
						{cartProducts.length > 0 && (
							<button
								onClick={() => handleCheckout()}
								className="bg-blue-200 w-[150px] py-2 rounded-lg hover:bg-blue-300 transition-colors shadow-md"
							>
								Checkout
							</button>
						)}
						{cartProducts.length > 0 ? (
							<h1 className="px-4 pb-3 text-end">
								Total: <span className="font-bold text-lg">${totalPrice}</span>
							</h1>
						) : (
							<p className="p-4 text-center">Shopping cart is empty</p>
						)}
					</div>
					{cartProducts.map((product) => (
						<OrderCard
							key={product.id}
							id={product.id}
							title={product.title}
							image={product.image}
							price={product.price}
						/>
					))}
				</aside>
			)}
		</>
	);
};

export { Checkout };
