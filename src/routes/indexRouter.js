import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import LoadingPage from "../components/common/LoadingPage";

const Main = lazy(() => import("../pages/MainPage"));

const Router = () => {
	return useRoutes([
		{
			path: "",
			element: (
				<Suspense fallback={<LoadingPage />}>
					<Main />
				</Suspense>
			),
		},
	]);
};

export default Router;
