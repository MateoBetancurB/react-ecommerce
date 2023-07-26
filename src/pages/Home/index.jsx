import { useEcommerce } from "../../hooks/useEcommerce";
import { Layout } from "../../components/Layout";
import { Card } from "../../components/Card";
import { ProductDetail } from "../../components/ProductDetail";

const Home = () => {
	const { items } = useEcommerce();

	return (
		<Layout>
			<div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4 w-full max-w-screen-lg">
				{items?.map((item) => (
					<Card key={item.id} data={item} />
				))}
			</div>
			<ProductDetail />
		</Layout>
	);
};

export { Home };
