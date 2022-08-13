import React from "react";
// import { useQuery } from '@apollo/client';

import { } from "semantic-ui-react";
import Snippet from "../components/Snippet/index";
import DropMenu from "../components/Dropdown/index";

// import { QUERY_REQUEST } from '../utils/queries';
// import { } from '../utils/mutations';
// import { useQuery } from '@apollo/client';

const Home = () => {

	// const { username: userParam } = useParams();

	// const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
	// 	variables: { username: userParam },
	// });

	// const user = data?.me || data?.user || {};
	// // navigate to personal profile page if username is yours
	// if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
	// 	// naviagte to something different?
	// 	return <Navigate to="/home" />;
	// }

	// if (loading) {
	// 	return <div>Loading...</div>;
	// }

	// if (!user?.username) {
	// 	return (
	// 		<h4>
	// 			You need to be logged in to see this. Use the navigation links above to
	// 			sign up or log in!
	// 		</h4>
	// 	);
	// }
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
			<Snippet hidden={true} ></Snippet>
		</main>
	);
};

export default Home;
