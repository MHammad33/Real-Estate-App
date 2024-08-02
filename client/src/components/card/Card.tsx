import { FC } from "react";
import "./card.scss";
import { Link } from "react-router-dom";

type CardItem = {
	id: number;
	title: string;
	img: string;
	bedroom: number;
	bathroom: number;
	price: number;
	address: string;
	latitude: number;
	longitude: number;
};

type CardProps = {
	item: CardItem;
};

const Card: FC<CardProps> = (props) => {
	const item = props.item;
	return (
		<div className="card">
			<div className="imgContainer">
				<Link to={`/${item.id}`}>
					<img src={item.img} alt="" />
				</Link>
			</div>
			<div className="textContainer">
				<h2 className="title">
					<Link to={`/${item.id}`}>{item.title}</Link>
				</h2>
				<p className="address">
					<img src="/pin.png" alt="Location Pin" />
					<span>{item.address}</span>
				</p>
				<p className="price">Rs. {item.price}</p>

				<div className="bottom">
					<div className="features">
						<div className="feature">
							<img src="/bed.png" alt="Bedroom" />
							<span>{item.bedroom} bedroom</span>
						</div>
						<div className="feature">
							<img src="/bath.png" alt="Bathroom" />
							<span>{item.bathroom} bathroom</span>
						</div>
					</div>

					<div className="icons">
						<div className="icon">
							<img src="/save.png" alt="Save" />
						</div>
						<div className="icon">
							<img src="/chat.png" alt="Chat" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Card;
