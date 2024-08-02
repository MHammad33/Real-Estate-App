import { FC } from "react";
import "./singlePage.scss";
import { Card, Filter } from "../../components";
import { listData } from "../lib/dummyData";

const SinglePage: FC = () => {
	const data = listData;
	return (
		<div className="singlePage">
			<div className="listContainer">
				<div className="wrapper"></div>
				<Filter />
				{data.map((item) => (
					<Card key={item.id} />
				))}
			</div>
			<div className="mapContainer">Map</div>
		</div>
	);
};
export default SinglePage;
