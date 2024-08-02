import { FC } from "react";
import "./listPage.scss";
import { Card, Filter } from "../../components";
import { listData } from "../lib/dummyData";

const ListPage: FC = () => {
	const data = listData;

	return (
		<div className="listPage">
			<div className="listContainer">
				<div className="wrapper">
					<Filter />
					{data.map((item) => (
						<Card key={item.id} />
					))}
				</div>
			</div>
			<div className="mapContainer">Map</div>
		</div>
	);
};
export default ListPage;
