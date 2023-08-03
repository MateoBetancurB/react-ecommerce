import { Layout } from "../../components/Layout";
import { useEcommerce } from "../../hooks/useEcommerce";
import { OrderCard } from "../../components/OrderCard";

const MyOrder = () => {
	const { order } = useEcommerce();

	return (
		<Layout>
			<h2 className="pt-10 pb-5 font-extrabold">My Order</h2>
			<div>
				{order?.slice(-1)[0].products.map((product) => (
					<OrderCard
						key={product.id}
						id={product.id}
						title={product.title}
						image={product.image}
						price={product.price}
					/>
				))}
			</div>
		</Layout>
	);
};

export { MyOrder };
