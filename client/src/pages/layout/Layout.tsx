import { FC } from "react";
import "./layout.scss";
import { Navbar } from "../../components";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
	return (
		<div className="layout">
			<Navbar />
			<div className="content">
				<Outlet />
			</div>
		</div>
	);
};
export default Layout;
