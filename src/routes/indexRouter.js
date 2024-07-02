import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import LoadingPage from "../components/common/LoadingPage";
import memberRouter from "./memberRouter";

const Main = lazy(() => import("../pages/MainPage"));
const MemberIndex = lazy(() => import("../pages/member/MemberIndex"));

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
		{
			path: "member",
			element: (
				<Suspense fallback={<LoadingPage />}>
					<MemberIndex />
				</Suspense>
			),
			children: memberRouter(),
		},
	]);
};

export default Router;
