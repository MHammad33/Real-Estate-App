import { FC, useState } from "react";
import "./searchBar.scss";

const types = ["buy", "rent"];

const SearchBar: FC = () => {
	const [query, setQuery] = useState({
		type: "buy",
		location: "",
		minPrice: 0,
		maxPrice: 10000000,
	});

	const switchType = (typeValue: string) => {
		setQuery((prev) => ({ ...prev, type: typeValue }));
	};

	return (
		<div className="searchBar">
			<div className="type">
				{types.map((type) => (
					<button
						className={query.type === type ? "active" : ""}
						key={type}
						onClick={() => switchType(type)}
					>
						{type}
					</button>
				))}
			</div>
			<form>
				<input type="text" name="location" placeholder="City Location" />
				<input
					type="number"
					name="minPrice"
					min={0}
					max={10000000}
					placeholder="Min Price"
				/>
				<input
					type="number"
					name="maxPrice"
					min={0}
					max={10000000}
					placeholder="Max Price"
				/>
				<button>
					<img src="/search.png" alt="Search" />
				</button>
			</form>
		</div>
	);
};
export default SearchBar;
