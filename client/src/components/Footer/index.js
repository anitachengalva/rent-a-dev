import React, { useEffect } from "react";
import { ImLinkedin } from "react-icons/im";
import { Segment, } from 'semantic-ui-react';


function Footer() {

	const style = {
		segment: {
			display: 'flex',
			// alignItems: 'center',
			justifyContent: 'center',
			padding: '50px',
		},

	}

	useEffect(() => {
		const script = document.createElement("script");

		script.src = "https://platform.linkedin.com/badges/js/profile.js";
		script.async = true;
		script.defer = true;

		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);
	return (

		<footer className="">

			<section className="bios" style={style.segment} >
				<div
					className="badge-base LI-profile-badge"
					data-locale="en_US"
					data-size="medium"
					data-theme="light"
					data-type="VERTICAL"
					data-vanity="anitachengalva"
					data-version="v1"
				>
					<a
						className="badge-base__link LI-simple-link"
						href="https://www.linkedin.com/in/anitachengalva?trk=profile-badge"
					>

					</a>
				</div>
				<div
					className="badge-base LI-profile-badge"
					data-locale="en_US"
					data-size="medium"
					data-theme="light"
					data-type="VERTICAL"
					data-vanity="cameronbuss-webdev"
					data-version="v1"
				>
					<a
						className="badge-base__link LI-simple-link"
						href="https://www.linkedin.com/in/cameronbuss-webdev?trk=profile-badge"
					>

					</a>
				</div>
				<div
					className="badge-base LI-profile-badge"
					data-locale="en_US"
					data-size="medium"
					data-theme="light"
					data-type="VERTICAL"
					data-vanity="trentyn-powell-862265173"
					data-version="v1"
				>
					<a
						className="badge-base__link LI-simple-link"
						href="https://www.linkedin.com/in/trentyn-powell-862265173?trk=profile-badge"
					>

					</a>
				</div>
				<div
					className="badge-base LI-profile-badge"
					data-locale="en_US"
					data-size="medium"
					data-theme="light"
					data-type="VERTICAL"
					data-vanity="zane-pisano-a24177230"
					data-version="v1"
				>
					<a
						className="badge-base__link LI-simple-link"
						href="https://www.linkedin.com/in/zane-pisano-a24177230?trk=profile-badge"
					>

					</a>
				</div>
			</section>

		</footer>
	);
}

export default Footer;
