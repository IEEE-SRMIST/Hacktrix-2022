import styled from "styled-components";

export const ScheduleWrapper = styled.section`
	position: relative;
	min-height: 100vh;
	padding: 4rem 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 90%;
	margin-top: 2rem;

	@media (max-width: 780px) {
		width: 95%;
	}
	@media (max-width: 460px) {
		width: 99%;
	}
`;

export const Hex = styled.div`
	background: #040309;
	position: relative;
	width: 0.79em;
	height: 1.36em;
	border-radius: 0.1em/0.05em;
	border: 2px solid #9a35ff;
	transition: opacity 0.5s;
	font-size: 42px;
	line-height: 62px;
	display: flex;
	justify-content: center;
	align-items: center;
	transform: rotate(90deg);

	:before {
		position: absolute;
		width: inherit;
		height: inherit;
		border-radius: inherit;
		background: inherit;
		content: "";
		-webkit-transform: rotate(-60deg);
		-ms-transform: rotate(-60deg);
		transform: rotate(-60deg);
		border-top: 2px solid #9a35ff;
		border-bottom: 2px solid #9a35ff;
	}
	:after {
		position: absolute;
		width: inherit;
		height: inherit;
		border-radius: inherit;
		background: inherit;
		content: "";
		-webkit-transform: rotate(60deg);
		-ms-transform: rotate(60deg);
		transform: rotate(60deg);
		border-top: 2px solid #9a35ff;
		border-bottom: 2px solid #9a35ff;
	}

	@media (max-width: 940px) {
		font-size: 30px;
	}
	@media (max-width: 780px) {
		font-size: 26px;
	}
	@media (max-width: 430px) {
		font-size: 22px;
		border: 1px solid #9a35ff;
		:before {
			border-top: 1px solid #9a35ff;
			border-bottom: 1px solid #9a35ff;
		}
		:after {
			border-top: 1px solid #9a35ff;
			border-bottom: 1px solid #9a35ff;
		}
	}
`;
export const HexText = styled.div`
	font-style: normal;
	font-weight: normal;
	font-size: 38px;
	line-height: 62px;
	color: #ffffff;
	z-index: 20;
	transform: rotate(-90deg);

	@media (max-width: 940px) {
		font-size: 26px;
	}
	@media (max-width: 780px) {
		font-size: 22px;
	}
	@media (max-width: 460px) {
		font-size: 18px;
	}
`;
export const Text = styled.div`
	text-align: ${(props) => props.align};
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 1.4em;
	letter-spacing: 0.1em;
	width: 39%;
	color: #d898ff;
	padding-left: ${(props) => (props.ml ? props.ml : 0)}px;
	padding-right: ${(props) => (props.mr ? props.mr : 0)}px;

	@media (max-width: 1024px) {
		font-size: 18px;
		line-height: 37px;
		width: 38.2%;
	}

	@media (max-width: 780px) {
		font-size: 16px;
		line-height: 22px;
		// letter-spacing: 0.1em;
		width: 41%;
		padding-left: ${(props) => (props.ml ? 17 : 0)}px;
		padding-right: ${(props) => (props.mr ? 17 : 0)}px;
	}
	@media (max-width: 460px) {
		font-size: 12px;
		line-height: 22px;
		// letter-spacing: 0.1em;
		padding-left: ${(props) => (props.ml ? 13 : 8)}px;
		padding-right: ${(props) => (props.mr ? 13 : 8)}px;
		width: 41%;
	}
	@media (max-width: 345px) {
		font-size: 12px;
		line-height: 22px;
		// letter-spacing: 0.1em;
		padding-left: ${(props) => (props.ml ? 10 : 0)}px;
		padding-right: ${(props) => (props.mr ? 10 : 0)}px;
		width: 41%;
	}
`;
export const Item = styled.div`
	width: 100%;
	min-height: 140px;
	display: flex;
	justify-content: ${(props) => props.justifyContent};
	flex-direction: ${(props) =>
		props.justifyContent === "right" ? "row" : "row-reverse"};
	align-items: center;

	@media (max-width: 1024px) {
		min-height: 122px;
	}

	@media (max-width: 940px) {
		min-height: 100px;
	}

	@media (max-width: 780px) {
		min-height: 68px;
	}
	@media (max-width: 320px) {
		min-height: 55px;
	}
`;
export const Digonal = styled.div`
	border: 1px dashed #ffffff;
	transform: ${(props) =>
		props.direction === "true"
			? `rotate(146.98deg)`
			: `matrix(0.84, 0.54, 0.54, -0.84, 0, 0)`};
	width: 17%;

	@media (max-width: 1024px) {
		width: 17.2%;
	}
	@media (max-width: 780px) {
		width: 12%;
	}
	@media (max-width: 460px) {
		width: 15.2%;
	}
`;
