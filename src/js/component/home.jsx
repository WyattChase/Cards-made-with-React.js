import React from "react";
import Card from "./component/Card.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			{element}
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
			<Card name="Florida" description="warm, Sunny, Hurricanes" location="SE USA"/>
			<Card name="Colorado" description="warm, Sunny, Hurricanes" location="SE USA"/>
			<Card name="Florida" description="warm, Sunny, Hurricanes" location="SE USA"/>
		</div>
	);
};

export default Home;
