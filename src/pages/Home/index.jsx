import { useEcommerce } from "../../hooks/useEcommerce";
import { Layout } from "../../components/Layout";
import { Card } from "../../components/Card";
import { ProductDetail } from "../../components/ProductDetail";

const Home = () => {
	const { isLoading, searchByTitle, setSearchByTitle, filteredItems } =
		useEcommerce();

	const handleChange = (e) => {
		setSearchByTitle(e.target.value);
	};

	return (
		<Layout>
			<input
				onChange={handleChange}
				value={searchByTitle}
				type="text"
				placeholder="Search a product..."
				className="rounded-lg border border-black w-80 px-4 py-2 mt-4 mb-7"
			/>
			{isLoading ? (
				<p className="font-bold text-lg">
					Products are loading, wait a moment...
				</p>
			) : (
				<div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4 w-full max-w-screen-lg">
					{filteredItems.length > 0 ? (
						filteredItems.map((item) => <Card key={item.id} data={item} />)
					) : (
						<p className="col-span-4 text-center font-bold">No results found</p>
					)}
				</div>
			)}
			<ProductDetail />
		</Layout>
	);
};

export { Home };
