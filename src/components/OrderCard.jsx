const OrderCard = (props) => {
	const { title, image, price } = props;

	const truncateTitle = (title, numWords) => {
		const words = title.split(" ");
		return words.slice(0, numWords).join(" ");
	};

	return (
		<div className="flex justify-between p-4 hover:bg-gray-200">
			<div className="flex items-center gap-4">
				<figure className="w-20 h-20">
					<img
						className="w-full h-full rounded-lg object-cover"
						src={image}
						alt={title}
					/>
				</figure>
				<div>
					<h3 className="text-sm font-light">{truncateTitle(title, 5)}</h3>
					<p className="text-md font-extrabold">${price}</p>
				</div>
			</div>
			<div className="flex items-center gap-4">
				<button
					onClick={() => console.log("cerrando...")}
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
		</div>
	);
};

export { OrderCard };
