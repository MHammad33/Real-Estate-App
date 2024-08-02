import { FC } from "react";
import "./homePage.scss";
import { SearchBar } from "../../components";

const HomePage: FC = () => {
	return (
		<div className="homepage">
			<div className="textContainer">
				<div className="wrapper">
					<h1 className="title">Find Real Estate & Get Your Dream Place</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
						praesentium, assumenda accusantium facere pariatur delectus nesciunt
						voluptatibus dolores inventore ipsam earum id reiciendis
						perspiciatis temporibus debitis fuga dicta commodi quibusdam
						deleniti? Doloremque, velit.
					</p>
					<SearchBar />
					<div className="boxes">
						<div className="box">
							<h1>16+</h1>
							<h2>Years of Experience</h2>
						</div>
						<div className="box">
							<h1>200</h1>
							<h2>Award Gained</h2>
						</div>
						<div className="box">
							<h1>1200+</h1>
							<h2>Property Ready</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="imgContainer">
				<img src="/bg.png" alt="" />
			</div>
		</div>
	);
};
export default HomePage;
