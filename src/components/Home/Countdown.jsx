import styled from "styled-components";
import Timer from "react-countdown";
import { COUNTDOWN_TIMERS } from "../../config";

const Container = styled.div`
	width: 100%;
	padding: 0.5rem 1.5rem;
	background: rgba(255, 255, 255, 0.05);
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 0.25rem;
	backdrop-filter: blur(4px);
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	font-size: 14pt;
	white-space: nowrap;

	article {
		display: grid;
		grid-template-columns: repeat(4, auto);
		grid-gap: 1rem;
		font-size: 24pt;

		div {
			font-weight: 500;

			span {
				margin-left: 0.25rem;
				font-weight: 400;
				font-size: 10pt;
				vertical-align: text-top;
			}
		}
	}

	@media screen and (max-width: 650px) {
		flex-direction: column;
		background: none;
		border: none;
		backdrop-filter: none;

		.title {
			padding-bottom: 1rem;
			border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		}

		article {
			font-size: 32pt;

			@media screen and (max-width: 480px) {
				font-size: 24pt;
				grid-template-columns: repeat(2, 1fr);
				gap: 1rem 4rem;

				div {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				}
			}
		}
	}
`;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds }) => {
	return (
		<article>
			<div>
				{days}
				<span>DAYS</span>
			</div>
			<div>
				{hours}
				<span>HOURS</span>
			</div>
			<div>
				{minutes}
				<span>MINS</span>
			</div>
			<div>
				{seconds}
				<span>SECS</span>
			</div>
		</article>
	);
};

const Countdown = () => {
	const counter =
		COUNTDOWN_TIMERS.find((timer) => timer.timestamp - Date.now() > 0) ??
		COUNTDOWN_TIMERS[COUNTDOWN_TIMERS.length - 1];

	return (
		<Container>
			<div className="title">{counter.title}:</div>
			<Timer date={counter.timestamp} renderer={renderer} />
		</Container>
	);
};

export default Countdown;
