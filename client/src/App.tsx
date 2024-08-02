import { Navbar } from "./components";
import "./layout.scss";
import { HomePage } from "./pages";

function App() {
	return (
		<div className="layout">
			<Navbar />
			<div className="content">
				<HomePage />
			</div>
		</div>
	);
}

export default App;
