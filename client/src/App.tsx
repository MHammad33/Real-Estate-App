import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, Layout, ListPage, SinglePage } from "./pages";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <HomePage />,
				},
				{
					path: "/list",
					element: <ListPage />,
				},
				{
					path: "/list/:id",
					element: <SinglePage />,
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
