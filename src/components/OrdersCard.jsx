import { formatDate } from "../helpers";

const OrdersCard = (props) => {
	const { totalPrice, totalProducts } = props;

	return (
		<div className="flex justify-between p-4 mb-3 border border-black">
			<p>
				<span>{formatDate(Date.now())}</span>
				<span>{totalProducts}</span>
				<span>{totalPrice}</span>
			</p>
		</div>
	);
};

export { OrdersCard };
