const Card = () => {
	return (
		<div className="bg-gray-200 cursor-pointer w-56 h-60 rounded-lg ">
			<figure className="relative mb-2 w-full h-4/5">
				<span className="absolute bottom-0 left-0 m-2 px-2 bg-white/70 rounded-full text-black text-xs">
					Electronics
				</span>
				<img
					className="w-full h-full object-cover rounded-lg"
					src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="headphones"
				/>
				<button className="absolute top-0 right-0 m-2 flex justify-center items-center bg-white w-6 h-6 rounded-full">
					+
				</button>
			</figure>
			<p className="flex justify-between px-3">
				<span className="text-sm font-light">Headphones</span>
				<span className="text-lg font-bold">$300</span>
			</p>
		</div>
	);
};

export { Card };
