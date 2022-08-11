import React from "react";
import { useQuery } from "@apollo/client";

import {} from "semantic-ui-react";

import {} from "../utils/queries";
import {} from "../utils/mutations";


const Home = () => {
	//this was copied _________________________________
	// which mutations will be displayed on the hmepage?
	// -users snippets, skills dropdown, "welcome <user name>",
	const { loading, data } = useQuery(QUERY_THOUGHTS);
	const thoughts = data?.thoughts || [];
	// ________________________________________________

	return (
		<main>
			<div>
				<h3>search bar</h3>
				<h3>dropdown for searchable skills</h3>
				<h3>
					{" "}
					here will be the snippets of the devs profiles you can scroll through
				</h3>
			</div>
		</main>
	);
};

export default Home;
