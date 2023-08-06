import { Link, useParams } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { useEcommerce } from "../../hooks/useEcommerce";
import { OrderCard } from "../../components/OrderCard";

const MyOrder = () => {
	const { order } = useEcommerce();
	const { id } = useParams();
	let orderToShow =
		id === undefined
			? order?.slice(-1)[0]
			: order?.filter((order) => order.id === id)[0];

	return (
		<Layout>
			<div className="flex items-center justify-center w-80 relative pt-10 pb-5">
				<Link
					to="/my-orders"
					className="absolute left-0 hover:bg-gray-200 rounded-full transition-colors p-1"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6 "
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 19.5L8.25 12l7.5-7.5"
						/>
					</svg>
				</Link>
				<h2 className="font-extrabold">My Order</h2>
			</div>
			<div>
				{orderToShow?.products.map((item) => (
					<OrderCard
						key={item.id}
						id={item.id}
						title={item.title}
						image={item.image}
						price={item.price}
					/>
				))}
			</div>
			<Link to="/">
				<button className="flex mt-5 gap-3 shadow-md hover:bg-gray-800 bg-black text-white px-5 py-2 rounded-lg">
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
							d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
						/>
					</svg>
					<span>Continue shopping</span>
				</button>
			</Link>
		</Layout>
	);
};

export { MyOrder };
