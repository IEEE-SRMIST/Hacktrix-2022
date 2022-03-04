import React, { useEffect } from "react";
import styled from "styled-components";
import ieeeLogo from "../../assets/img/ieeeLogo.png";
import "./Navbar.css";

const NavbarComponent = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	padding: 1em 1.5em;
	display: flex;
	align-items: center;
	justify-content: space-between;
	z-index: 100;
	@media (max-width: 800px) {
		/* border-bottom: 2px solid #b741ff; */
		box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
		background-color: black;
	}

	@media (max-width: 600px) {
		justify-content: center;
	}
`;

const NavbarList = styled.ul`
	list-style: none;
	display: flex;
	height: 25px;
	margin-bottom: 0;
	justify-content: space-evenly;
	gap: 2em;
	align-items: center;
	transition: all 500ms;
	font-size: 14pt;
	backdrop-filter: blur(7px);
	-webkit-backdrop-filter: blur(7px);
	border-radius: 30px;
	z-index: 100;
	padding: 1.2em 1em;

	@media (max-width: 800px) {
		gap: 20px;
		justify-content: space-evenly;
		position: fixed;
		bottom: 4rem;
		left: 50%;

		transform: translateX(-50%);
		height: 40px;
		padding: 1em 0.25em;
		font-size: 1rem;
		background: rgba(255, 255, 255, 0.1);
		box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		border-radius: 8px;
		border: 1px solid rgba(255, 255, 255, 0.18);
		z-index: 100;
	}
	@media (max-width: 425px) {
		gap: 10px;
		font-size: 0.8rem;
	}
`;

const NavbarItem = styled.li`
	@media (max-width: 800px) {
		padding: 0 0.5em;
	}
`;

const NavbarLink = styled.a`
	text-decoration: none;
	color: #d898ff;
	font-weight: 500;
	text-shadow: 0px 0px 24px #b741ff;
	:hover {
		color: #cb7efb;
		text-shadow: 0px 0px 24px #ab24ff;
	}
`;

const LogoImage = styled.a`
	min-width: clamp(90px, 10%, 120px);
	width: clamp(90px, 10%, 120px);
	img {
		width: 100%;
		height: auto;
	}
	@media (max-width: 600px) {
		display: none;
	}
`;

function Navbar() {
	const navLinks = [
		// { path: "#About", name: "HackTrix?" },
		{ path: "#tracks", name: "Tracks" },
		{ path: "#sponsors", name: "Sponsors" },
		{ path: "#prizes", name: "Prizes" },
		{ path: "#faqs", name: "FAQs" },
	];

	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://apply.devfolio.co/v2/sdk.js";
		script.async = true;
		script.defer = true;
		document.body.appendChild(script);
		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<NavbarComponent>
			<LogoImage href="https://www.ieeesrmist.in/" target="_blank">
				<img src={ieeeLogo} alt="IEEE Logo" />
			</LogoImage>
			<NavbarList>
				{navLinks.map(({ path, name }) => (
					<NavbarItem key={name}>
						<NavbarLink href={`${path}`}>{name}</NavbarLink>
					</NavbarItem>
				))}
			</NavbarList>
			<div
				className="apply-button"
				data-hackathon-slug="hacktrixtake2"
				data-button-theme="light"
				style={{ height: "44px", width: "312px" }}
			></div>
		</NavbarComponent>
	);
}

export default Navbar;
