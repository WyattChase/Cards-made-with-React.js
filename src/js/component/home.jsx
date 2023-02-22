import React from "react";
import Card from "./Card.jsx";
import {Jumbotron} from "./jumbotron.jsx"
import { Navbar } from "./Navbar.jsx";


//create your first component
const Home = () => {
	return (
		<><div><Navbar /></div><div className="container-fluid">
			<div id="jumbo" className="container-fluid">
				<h1 className="text-center mt-4"></h1>
				<Jumbotron />
			</div>

			<div id="card" className="container text-center">
				<Card name="Florida" description="warm, Sunny, Hurricanes" location="SE USA" />
				<Card name="Colorado" description="warm, Sunny, Hurricanes" location="SE USA" />
				<Card name="Atlanta" description="warm, Sunny, Hurricanes" location="SE USA" />
				<Card name="Atlanta" description="warm, Sunny, Hurricanes" location="SE USA" />
			</div>
		</div></>
	);
};

export default Home;
