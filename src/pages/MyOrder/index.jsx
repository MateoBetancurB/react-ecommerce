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
		</Layout>
	);
};

export { MyOrder };
