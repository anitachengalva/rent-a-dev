import React from "react";

const Footer = () => {
	return (
		<footer className="">
			<div className="">
				<Image src={image} />
				<section className="linkedinPros">
					<div
						class="badge-base LI-profile-badge"
						data-locale="en_US"
						data-size="medium"
						data-theme="light"
						data-type="VERTICAL"
						data-vanity="zane-pisano-a24177230"
						data-version="v1"
					>
						<a
							class="badge-base__link LI-simple-link"
							href="https://www.linkedin.com/in/zane-pisano-a24177230?trk=profile-badge"
						>
							zane pisano
						</a>
					</div>
					<div
						class="badge-base LI-profile-badge"
						data-locale="en_US"
						data-size="medium"
						data-theme="light"
						data-type="VERTICAL"
						data-vanity="anitachengalva"
						data-version="v1"
					>
						<a
							class="badge-base__link LI-simple-link"
							href="https://www.linkedin.com/in/anitachengalva?trk=profile-badge"
						>
							Anita Chengalva
						</a>
					</div>
					<div
						class="badge-base LI-profile-badge"
						data-locale="en_US"
						data-size="medium"
						data-theme="light"
						data-type="VERTICAL"
						data-vanity="cameronbuss-webdev"
						data-version="v1"
					>
						<a
							class="badge-base__link LI-simple-link"
							href="https://www.linkedin.com/in/cameronbuss-webdev?trk=profile-badge"
						>
							Cameron Buss
						</a>
					</div>
				</section>
			</div>
		</footer>
	);
};

export default Footer;
