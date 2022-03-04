import styled from "styled-components";
import { SectionHeading } from "../../GlobalStyles";

const AboutSection = styled.section`
	min-height: 80vh;
	padding: 4rem 1rem;
	text-align: center;
	max-width: 1024px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;

	article {
		&:not(:last-child) {
			margin-bottom: 4rem;
		}

		p {
			margin: 1rem 0;
		}
	}
`;

const About = () => {
	return (
		<AboutSection>
			<article>
				<SectionHeading>Why Choose HackTrix?</SectionHeading>
				<p>
					Coding is today’s language of creativity, and like all creative
					pursuits, it must be refined, practiced, and exercised. IEEE SRM
					Student Branch brings you a unique opportunity to unleash your
					creativity with HackTrix.
				</p>
				<p>
					A hackathon-like-no-other, choose from 8 unique tracks that you can
					revolutionize with your skills. Interact with like-minded individuals
					as you hack your way up the leaderboard, going toe-to-toe with the
					best in your field as you leave your mark on the world of coding.
				</p>
				<p>
					Innovate, inspire and work towards making your ideas a reality and win
					lucrative prizes and SWAGs as you prove yourself to the world
					throughout a three-day spree of a pure coding frenzy.
				</p>
			</article>

			<article>
				<SectionHeading>HackTrix Meet-Up</SectionHeading>
				<p>
					Innovation is the change that unlocks new value. The crusade for
					innovation however is one that cannot be traversed alone.
				</p>
				<p>
					{" "}
					Sharing knowledge with the world is one of the cornerstones of
					innovation and this principle is realized with "HackTrix Meet-UP".
					Learn from various speakers hailing from various industries.{" "}
				</p>
				<p>
					These speakers are some of the most experienced professionals in their
					field, a diverse panel of individuals indeed because knowledge shared
					should not be kept exclusive to a field and its people, but instead be
					within reach of all those who wish to pursue it.
				</p>
			</article>
		</AboutSection>
	);
};

export default About;
