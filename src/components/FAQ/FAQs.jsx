import React from "react";
import styled from "styled-components";
import { FAQ_DATA } from "../../config";
import { SectionHeading } from "../../GlobalStyles";

const FaqWrapper = styled.div`
	padding: 4rem 1rem;

	> div {
		max-width: 800px;
		margin: 0 auto;
	}
`;

const Faqs = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin-top: 2rem;
`;

const Accordion = styled.div`
	width: 100%;
	button {
		color: #d898ff;
		background-color: transparent;
		border: none;
		font-style: normal;
		font-weight: 500;
		font-size: 12pt;
		padding: 0.5rem;
	}
	button::after {
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23FFFFFF'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
		@media (max-width: 768px) {
			padding: 1.5rem 1 1.5rem 1;
		}
	}
	button:not(.collapsed) {
		color: white;
		background-color: #481a65;
		border-top-left-radius: 8px !important;
		border-top-right-radius: 8px !important;
	}
	button:not(.collapsed)::after {
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23FFFFFF'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
	}
	button:focus {
		z-index: 3;
		border: 0 none #d898ff;
		outline: 0;
		box-shadow: 0 0 0 0 rgba(252, 121, 241, 0.25);
	}
	svg {
		margin-right: 1rem;
		width: 24px;
		height: auto;

		@media (max-width: 768px) {
			margin-right: 0.2rem;
			height: 32px;
			width: 32px;
		}
	}
`;
const AccordItem = styled.div`
	margin-bottom: 20px;
	mix-blend-mode: normal;
	border: 1px solid #f268d4;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	border-radius: 8px;
	font-style: normal;
`;

const AccordBody = styled.div`
	text-align: left;
	font-weight: 400;
	font-size: 12pt;
	padding: 0.5rem 1rem;
`;

const Faq = () => {
	return (
		<FaqWrapper id="faqs">
			<div>
				<SectionHeading>FAQs</SectionHeading>
				<Faqs>
					<Accordion>
						{FAQ_DATA.map((item, index) => {
							return (
								<AccordItem
									key={index}
									className="accordion-item custom-accordion-faq"
								>
									<div className="accordion-header">
										<button
											className="accordion-button collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target={`#faq${index}`}
											aria-controls={`faq${index}`}
										>
											<span
												className="faq-icon"
												dangerouslySetInnerHTML={{ __html: item.icon }}
											/>
											{item.ques}
										</button>
									</div>
									<div
										id={`faq${index}`}
										className="accordion-collapse collapse"
									>
										<AccordBody>{item.ans}</AccordBody>
									</div>
								</AccordItem>
							);
						})}
					</Accordion>
				</Faqs>
			</div>
		</FaqWrapper>
	);
};

export default Faq;
