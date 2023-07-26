import { useEcommerce } from "../hooks/useEcommerce";

const Card = (data) => {
	const { incrementShoppingCart, openProductDetail } = useEcommerce();
	return (
		<div
			onClick={openProductDetail}
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
				<button
					className="absolute top-0 right-0 m-2 flex justify-center items-center bg-white w-6 h-6 rounded-full hover:bg-black color-black hover:text-white transition-colors duration-200"
					onClick={incrementShoppingCart}
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
			</figure>
			<p className="flex justify-between px-3">
				<span className="text-sm font-light truncate">{data?.data?.title}</span>
				<span className="text-lg font-bold">${data?.data?.price}</span>
			</p>
		</div>
	);
};

export { Card };
