import React from "react";

import "./judges.css";
import styled from "styled-components";
import { SectionHeading } from "../../GlobalStyles";

const P = styled.div`
	text-align: center;
	font-size: 16pt;
	margin-top: 2rem;
`;

const PeopleSection = styled.section`
	padding: 4rem 1rem;
`;

const People = ({ title, data }) => {
	return (
		<PeopleSection>
			<SectionHeading>{title}</SectionHeading>

			{data.length === 0 ? (
				<P>Coming up real soon.</P>
			) : (
				<div className="row py-5 justify-content-center">
					{data.map((item, index) => {
						return (
							<div key={index} className="col-12 col-lg-4 speaker">
								<div className=" speakers">
									<a href={item.link} target="_blank" rel="noreferrer">
										<div className="speaker-img ">
											<img src={`${item.image}`} alt={`${item.name}`} />
											<svg
												width="58"
												height="58"
												viewBox="0 0 58 58"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g filter="url(#filter0_d_1210_1169)">
													<path d="M38 38V20L20 38H38Z" fill="white" />
												</g>
												<defs>
													<filter
														id="filter0_d_1210_1169"
														x="0"
														y="0"
														width="58"
														height="58"
														filterUnits="userSpaceOnUse"
														color-interpolation-filters="sRGB"
													>
														<feFlood
															flood-opacity="0"
															result="BackgroundImageFix"
														/>
														<feColorMatrix
															in="SourceAlpha"
															type="matrix"
															values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
															result="hardAlpha"
														/>
														<feOffset />
														<feGaussianBlur stdDeviation="10" />
														<feComposite in2="hardAlpha" operator="out" />
														<feColorMatrix
															type="matrix"
															values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
														/>
														<feBlend
															mode="normal"
															in2="BackgroundImageFix"
															result="effect1_dropShadow_1210_1169"
														/>
														<feBlend
															mode="normal"
															in="SourceGraphic"
															in2="effect1_dropShadow_1210_1169"
															result="shape"
														/>
													</filter>
												</defs>
											</svg>
										</div>
										<div className="speaker-details ">
											<div className="speaker-name">{item.name}</div>
											<div className="speaker-desg">
												{item.designation}, {item.company}
											</div>
										</div>
									</a>
								</div>
							</div>
						);
					})}
				</div>
			)}
		</PeopleSection>
	);
};

export default People;
