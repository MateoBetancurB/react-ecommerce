import { useEcommerce } from "../hooks/useEcommerce";

const Card = (data) => {
	const { showProduct, addProductsToShoppingCart, cartProducts } =
		useEcommerce();

	const renderIcon = (id) => {
		const isInCard =
			cartProducts.filter((product) => product.id === id).length > 0;
		if (isInCard) {
			return (
				<div className="absolute top-0 right-0 m-2 flex bg-black text-white p-1 justify-center items-center w-6 h-6 rounded-full cursor-default ">
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
							d="M4.5 12.75l6 6 9-13.5"
						/>
					</svg>
				</div>
			);
		} else {
			return (
				<button
					className="absolute top-0 right-0 m-2 flex justify-center items-center bg-white w-6 h-6 rounded-full hover:bg-black color-black hover:text-white transition-colors duration-200"
					onClick={(e) => addProductsToShoppingCart(e, data.data)}
					aria-label="add product to shopping cart"
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
							d="M12 4.5v15m7.5-7.5h-15"
						/>
					</svg>
				</button>
			);
		}
	};

	return (
		<div
			onClick={() => showProduct(data.data)}
			className="bg-gray-200 cursor-pointer w-56 h-60 rounded-lg hover:bg "
		>
			<figure className="relative mb-2 w-full h-4/5">
				<span className="absolute bottom-0 left-0 m-2 px-2 bg-white/70 rounded-full text-black text-xs">
					{data?.data?.category}
				</span>
				<img
					className="w-full h-full object-cover rounded-lg"
					src={data?.data?.image}
					alt={data?.data?.title}
				/>
				{renderIcon(data.data.id)}
			</figure>
			<p className="flex justify-between px-3">
				<span className="text-sm font-light truncate">{data?.data?.title}</span>
				<span className="text-lg font-bold">${data?.data?.price}</span>
			</p>
		</div>
	);
};

export { Card };
