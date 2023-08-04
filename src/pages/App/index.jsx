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
		{ path: "/man-clothes", element: <Home /> },
		{ path: "/electronics", element: <Home /> },
		{ path: "/jewelery", element: <Home /> },
		{ path: "/woman-clothes", element: <Home /> },
		{ path: "/my-account", element: <MyAccount /> },
		{ path: "/my-order", element: <MyOrder /> },
		{ path: "/my-orders", element: <MyOrders /> },
		{ path: "/my-orders/last", element: <MyOrder /> },
		{ path: "/my-orders/:id", element: <MyOrder /> },
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
