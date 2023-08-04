import { useEcommerce } from "../../hooks/useEcommerce";
import { Layout } from "../../components/Layout";
import { Card } from "../../components/Card";
import { ProductDetail } from "../../components/ProductDetail";

const Home = () => {
	const { items, inputSearch, setInputSearch, filteredItems } = useEcommerce();

	const handleChange = (e) => {
		setInputSearch(e.target.value);
	};

	const renderView = () => {
		if (inputSearch.length > 0) {
			if (filteredItems.length > 0) {
				return filteredItems.map((item) => <Card key={item.id} data={item} />);
			} else {
				return (
					<p className="col-span-4 text-center font-bold">No results found</p>
				);
			}
		} else {
			return items.map((item) => <Card key={item.id} data={item} />);
		}
	};

	return (
		<Layout>
			<input
				onChange={handleChange}
				value={inputSearch}
				type="text"
				placeholder="Search a product..."
				className="rounded-lg border border-black w-80 px-4 py-2 mt-4 mb-7"
			/>
			<div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4 w-full max-w-screen-lg">
				{renderView()}
			</div>
			<ProductDetail />
		</Layout>
	);
};

export { Home };
