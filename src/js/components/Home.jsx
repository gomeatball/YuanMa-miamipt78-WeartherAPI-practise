import React from "react";

//include images into your bundle
import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";
import CardRow from "./CardRow";
import Footer from "./Footer";



//create your first component
const Home = () => {
	return (
		<div>
	    <Navbar/>
		<Jumbotron/>
		<CardRow/>
		<Footer />
		</div>
	)
}

export default Home;