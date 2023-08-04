import { Link } from "react-router-dom";
import { useEcommerce } from "../../hooks/useEcommerce";
import { Layout } from "../../components/Layout";
import { OrdersCard } from "../../components/OrdersCard";

const MyOrders = () => {
	const { order } = useEcommerce();

	return (
		<Layout>
			<div className="flex items-center justify-center gap-5 pt-10 pb-5 w-80 ">
				<h1 className="font-extrabold text-lg">My orders</h1>
			</div>
			{order.map((order, index) => (
				<Link key={index} to={`/my-orders/${order.id}`}>
					<OrdersCard
						totalPrice={order.totalPrice}
						totalProducts={order.totalProducts}
					/>
				</Link>
			))}
		</Layout>
	);
};

export { MyOrders };
