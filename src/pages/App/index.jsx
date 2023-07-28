import { useRoutes, BrowserRouter } from "react-router-dom";
import { EcommerceProvider } from "../../context/EcommerceProvider";
import { Home } from "../Home";
import { MyAccount } from "../MyAccount";
import { MyOrder } from "../MyOrder";
import { MyOrders } from "../MyOrders";
import { NotFound } from "../NotFound";
import { SignIn } from "../SignIn";
import { Navbar } from "../../components/Navbar";
import { Checkout } from "../../components/Checkout";

const AppRoutes = () => {
	let routes = useRoutes([
		{ path: "/", element: <Home /> },
		{ path: "/my-account", element: <MyAccount /> },
		{ path: "/my-order", element: <MyOrder /> },
		{ path: "/my-orders", element: <MyOrders /> },
		{ path: "/sign-in", element: <SignIn /> },
		{ path: "*", element: <NotFound /> },
	]);
	return routes;
};

const App = () => {
	return (
		<EcommerceProvider>
			<BrowserRouter>
				<AppRoutes />
				<Navbar />
				<Checkout />
			</BrowserRouter>
		</EcommerceProvider>
	);
};

export { App };
