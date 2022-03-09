import React from "react";
import { ReactComponent as DiscordIcon } from "../../assets/svg/Discord-Logo-White.svg";
import styled from "styled-components";

const Atag = styled.a`
	text-decoration: none;
	font-weight: 500;
	font-size: 16px;
	display: flex;
	align-items: center;

	svg {
		width: 28px;
		height: auto;
		margin-right: 0.75rem;
	}
`;
const Button = styled.button`
	display: block;
	width: fit-content;
	margin-top: 1.5rem;
	font-weight: 500;
	text-decoration: none;
	padding: 0.75rem 1.25rem;
	border-radius: 0.5rem;
	background-color: #5661ec;
	outline: none;
	border: none;
`;
const Span = styled.span`
	color: white;
`;

const BelowCountDown = () => {
	return (
		<Atag href="https://discord.gg/cQwSKeFsQA" target="_blank">
			<Button>
				<DiscordIcon />
				<Span>Join Hacktrix</Span>
			</Button>
		</Atag>
	);
};

export default BelowCountDown;
