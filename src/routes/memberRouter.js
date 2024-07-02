import { Suspense, lazy } from "react";
import LoadingPage from "../components/common/LoadingPage";

const Login = lazy(() => import("../pages/member/LoginPage"));
const Logout = lazy(() => import("../pages/member/LogoutPage"));
const KakaoRedirect = lazy(() => import("../pages/member/KakaoRedirectPage"));
const MemberModify = lazy(() => import("../pages/member/ModifyPage"));
const MemberList = lazy(() => import("../pages/member/ListPage"))

const memberRouter = () => {
	return [
		{
			path: "login",
			element: (
				<Suspense fallback={<LoadingPage />}>
					<Login />
				</Suspense>
			),
		},
		{
			path: "logout",
			element: (
				<Suspense fallback={<LoadingPage />}>
					<Logout />
				</Suspense>
			),
		},
		{
			path: "kakao",
			element: (
				<Suspense fallback={<LoadingPage />}>
					<KakaoRedirect />
				</Suspense>
			),
		},
		{
			path: "modify",
			element: (
				<Suspense fallback={<LoadingPage />}>
					<MemberModify />
				</Suspense>
			),
		},
		{
			path: "list",
			element: (
				<Suspense fallback={<LoadingPage />}>
					<MemberList />
				</Suspense>
			),
		},
	];
};

export default memberRouter;
