import { useEffect, useRef } from "react";
import styled from "styled-components";

import bgVideo from "../assets/video/tron.mp4";

const BackdropWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: -1;

	.backdrop {
		position: fixed;
		background-color: rgba(0, 0, 0, 0.2);
		width: 100%;
		height: 100%;
		backdrop-filter: blur(4px);
		box-shadow: 0 0 200px black inset;
		z-index: 1;
	}

	> video {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const Backdrop = () => {
	useEffect(() => {
		const handleScroll = (e) => {
			const scrollOpacity =
				window.scrollY < window.innerHeight
					? window.scrollY / window.innerHeight
					: 1;

			backdropRef.current.style.backgroundColor = `rgba(0,0,0,${
				scrollOpacity * 0.8
			})`;
			backdropRef.current.style.backdropFilter = `blur(${scrollOpacity * 4}px)`;
		};

		document.addEventListener("scroll", handleScroll);
		handleScroll();
		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const backdropRef = useRef(null);

	return (
		<BackdropWrapper>
			<div className="backdrop" ref={backdropRef} />
			<video autoPlay muted loop>
				<source src={bgVideo} type="video/mp4" />
			</video>
		</BackdropWrapper>
	);
};

export default Backdrop;
