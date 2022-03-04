import React from "react";
import { BottomGlyph, SectionHeading, TopGlyph } from "../../GlobalStyles";
import * as Styled from "./style";
import { ReactComponent as FloralGlyph } from "../../assets/svg/floral-glyph.svg";
import { TIMELINE } from "../../config";

const Schedule = () => {
	return (
		<Styled.ScheduleWrapper>
			<TopGlyph>
				<FloralGlyph />
			</TopGlyph>
			<BottomGlyph>
				<FloralGlyph />
			</BottomGlyph>

			<SectionHeading>Timeline</SectionHeading>
			<Styled.Wrapper>
				{TIMELINE.map((event, index) => (
					<React.Fragment key={index}>
						<Styled.Item justifyContent={index % 2 === 0 ? "right" : "left"}>
							<Styled.Hex>
								<Styled.HexText>{index + 1}</Styled.HexText>
							</Styled.Hex>
							<Styled.Text
								{...(index % 2 === 0 ? { ml: "30" } : { mr: "30" })}
								align={index % 2 === 0 ? "start" : "end"}
							>
								{event.title}
								<br /> {event.date}
							</Styled.Text>
						</Styled.Item>

						{index < TIMELINE.length - 1 && (
							<Styled.Digonal direction={index % 2 === 0 ? "true" : "false"} />
						)}
					</React.Fragment>
				))}
			</Styled.Wrapper>
		</Styled.ScheduleWrapper>
	);
};

export default Schedule;
