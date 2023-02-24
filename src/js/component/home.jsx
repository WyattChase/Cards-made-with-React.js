import React from "react";
import Card from "./Card.jsx";
import {Jumbotron} from "./jumbotron.jsx"
import { Navbar } from "./Navbar.jsx";


//create your first component
const cardArray = [
	{
		name: "Florida",
		location: "Warm, Sunny, Hurricanes",
		description :"SE USA",
		image : "https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkzMTcwMzU4OTEwNTkyNjcx/gettyimages-643977867.jpg",
		link : "#"
	},
	{
		name: "Georgia",
		location: "Swampy, Skating Rink, Hillbillies",
		description :"SE USA",
		image : "https://www.wildfrontierstravel.com/media/cache/page_image_large/upload/mirror/www-wildfrontierstravel-com/83b08925_Tbilisi-dreamstime_m_95312132.jpeg",
		link : "#"
	},
	{
		name: "New York",
		location: "Never Sleeps, Liberty Statue, Windy",
		description :"NE USA",
		image : "https://lp-cms-production.imgix.net/2020-11/shutterstockRF_1564421236.jpg?auto=format&q=75&w=3840",
		link : "#"
	},
	{
		name: "California",
		location: "Surfs Up, Earthquakes, Never Rains",
		description :"SW USA",
		image : "https://visitoceanside.org/wp-content/uploads/2016/06/Hollywood-Sign.jpg",
		link : "#"
	}
	

]





const Home = () => {
	return (
		<><div><Navbar /></div><div className="container-fluid">
			<div id="jumbo" className="container-fluid">
				<h1 className="text-center mt-4"></h1>
				<Jumbotron />
			</div>

			<div id="card" className="container">
				<div className="row">
					{cardArray.map((element, index) => {
						return (
							<div className="col-3" key={index}>
								<Card image={element.image} name={element.name} description={element.description} location={element.location} link={element.link} />
							</div>
						)
					})}
				</div>
				
			</div>
		</div></>
	);
};

export default Home;
