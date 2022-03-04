import React from "react";
import styled from "styled-components";
import { BottomGlyph, SectionHeading, TopGlyph } from "../../GlobalStyles";
import { ReactComponent as FloralGlyph } from "../../assets/svg/floral-glyph.svg";

const TrackSection = styled.section`
	padding: 4rem 1rem;
	min-height: 100vh;
	position: relative;

	> div {
		max-width: 1024px;
		margin: 0 auto;
	}

	.tracks {
		margin-top: 2rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		column-gap: 1rem;
		row-gap: 1.5rem;

		article {
			display: flex;
			flex-direction: column;
			align-items: center;
			max-width: 280px;
			text-align: center;

			img {
				height: 150px;
				width: auto;
			}

			div {
				font-size: 18pt;
				font-weight: 500;
				color: ${({ theme }) => theme.pink};
			}

			hr {
				all: unset;
				border-top: 2px solid ${({ theme }) => theme.pink};
				width: 60%;
				margin: 0.5rem 0;
			}
		}
	}
`;

const Tracks = () => {
	const track_list = [
		{
			src: "./img/icons/healthcare.svg",
			title: "Healthcare",
			content:
				"Usher the world of medicine and healthcare forward with curious and inspired solutions.",
		},
		{
			src: "./img/icons/edtech.svg",
			title: "EdTech",
			content:
				"Help the field of education move from the dark ages to the golden age of technology.",
		},
		{
			src: "./img/icons/sustainability.svg",
			title: "Sustainability",
			content: "Find innovative solutions to bring relief to our planet Earth.",
		},
		{
			src: "./img/icons/fintech.svg",
			title: "FinTech",
			content:
				"Bring change to transactions and cryptocurrency with promising Blockchain and Financial solutions.",
		},
		{
			src: "./img/icons/arvr.svg",
			title: "AR/VR",
			content:
				"Bring the world of virtual reality closer to actual reality with out-of-the-box solutions.",
		},
		{
			src: "./img/icons/robotics.svg",
			title: "Robotics",
			content:
				"Connecting billions of devices with inspired solutions to the world of IoT.",
		},
		{
			src: "./img/icons/iot.svg",
			title: "IOT",
			content:
				"Connecting billions of devices with inspired solutions to the world of IoT.",
		},
		{
			src: "./img/icons/open.svg",
			title: "The Matrix",
			content:
				"In this Open Track, Let loose your imagination and come up with a unique solution to make the world a better place.",
		},
	];

	return (
		<TrackSection id="tracks">
			<TopGlyph>
				<FloralGlyph />
			</TopGlyph>
			<BottomGlyph>
				<FloralGlyph />
			</BottomGlyph>

			<SectionHeading>Tracks</SectionHeading>

			<div className="tracks">
				{track_list.map((item, index) => {
					return (
						<article key={index}>
							<img alt="HackTrix" src={item.src} />

							<div>{item.title}</div>
							<hr />
							<p>{item.content}</p>
						</article>
					);
				})}
			</div>
		</TrackSection>
	);
};

export default Tracks;
