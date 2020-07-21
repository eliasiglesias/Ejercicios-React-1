import React from "react";
import Footer from "./Footer";
import ContactData from "./ContactData";

function MainPage(props) {
	const contactData = (
		<ContactData
			email={props.contactEmail}
			phone={props.contactPhone}
			address={props.contactAddress}
		/>
	);
	return (
		<div>
			<h1>My Ecommerce</h1>
			<p>We sell awesome shoes!!</p>
			<div>
				<img
					style={{ width: "60%" }}
					src="https://st2.depositphotos.com/1177973/6501/i/950/depositphotos_65015437-stock-photo-many-various-female-shoes.jpg"
					alt=""
				></img>
			</div>

			<Footer contactData={contactData} />
		</div>
	);
}

export default MainPage;
