import { useEcommerce } from "../hooks/useEcommerce";

const ProductDetail = () => {
	const { isProductDetailOpen, closeProductDetail } = useEcommerce();
	return (
		<>
			{isProductDetailOpen && (
				<aside className="w-[260px] h-[calc(95vh-68px)] flex flex-col fixed right-0 border border-black rounded-lg bg-white">
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
				</aside>
			)}
		</>
	);
};

export { ProductDetail };
