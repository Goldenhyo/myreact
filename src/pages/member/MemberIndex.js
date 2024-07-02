import { Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";

const MemberIndex = () => {
	return (
		<BasicLayout>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<main>
					<Outlet />
				</main>
			</div>
		</BasicLayout>
	);
};

export default MemberIndex;
