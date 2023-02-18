import React from "react";
import Card from "./Card.jsx";
import {Jumbotron} from "./jumbotron.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid text-center">
			<div id="jumbo" className="container-fluid">
			<h1 className="text-center mt-5"></h1>
			<Jumbotron/>
			</div>

			<div className="container-fluid">
			<Card name="Florida" description="warm, Sunny, Hurricanes" location="SE USA"/>
			<Card name="Colorado" description="warm, Sunny, Hurricanes" location="SE USA"/>
			<Card name="Atlanta" description="warm, Sunny, Hurricanes" location="SE USA"/>
			</div>
		</div>
	);
};

export default Home;
