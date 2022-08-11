import React from "react";
// import { useQuery } from '@apollo/client';

import {} from "semantic-ui-react";
import Snippet from "../components/Snippet/index";
import DropMenu from "../components/Dropdown/index";

// import { QUERY_REQUEST } from '../utils/queries';
// import { } from '../utils/mutations';
// import { useQuery } from '@apollo/client';

const Home = () => {
	//this was copied _________________________________
	// which mutations will be displayed on the hmepage?
	// -users snippets, skills dropdown, "welcome <user name>",
	// const { loading, data } = useQuery(QUERY_USER, QUERY_REQUEST);
	// const { loading2, data } = useQuery(QUERY_REQUEST);
	// const thoughts = data?.thoughts || [];
	// ________________________________________________

	return (
		<main>
			<div>
				<DropMenu></DropMenu>
			</div>
			<Snippet></Snippet>
		</main>
	);
};

export default Home;
