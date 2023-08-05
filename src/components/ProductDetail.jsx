import { useEcommerce } from "../hooks/useEcommerce";

const ProductDetail = () => {
	const { isProductDetailOpen, closeProductDetail, product } = useEcommerce();
	return (
		<>
			{isProductDetailOpen && (
				<aside className="w-[260px] h-[calc(95vh-68px)] overflow-y-auto flex flex-col fixed left-3 border border-black rounded-lg bg-white pb-5">
					<div className="flex justify-between items-center p-6">
						<h2 className="font-bold text-lg">Product details</h2>
						<button
							onClick={closeProductDetail}
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
					<figure className="p-4">
						<img
							className="w-full h-50% rounded-lg p-2 border border-black"
							src={product.image}
							alt={product.title}
						/>
					</figure>
					<p className="flex flex-col px-6">
						<span className="font-medium text-2xl">${product.price}</span>
						<span className="font-medium text-md">{product.title}</span>
						<span className="font-light text-md">{product.description}</span>
					</p>
				</aside>
			)}
		</>
	);
};

export { ProductDetail };
