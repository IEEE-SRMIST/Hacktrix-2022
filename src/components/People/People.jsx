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
						
						<div key={index} className="col-12 col-lg-4 mb-5 speaker">
							<div className=" speakers">
							    <a href={item.link} target="_blank">
								    <div className="speaker-img ">
								    	<img src={`${item.image}`} alt={`${item.name}`} />
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
