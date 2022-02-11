import React from 'react'
import * as Styled from './style'

const Schedule = ()=>{

    return(
        <Styled.ScheduleWrapper>

            <Styled.TopDesign />
            <Styled.BottomDegign />
            <Styled.Wrapper>
                <Styled.Heading>timeline</Styled.Heading>

                <Styled.Item justifyContent="right">
                    <Styled.Hex>
                        <Styled.HexText>
                            1
                        </Styled.HexText>
                    </Styled.Hex>
                    <Styled.Text ml="30" align="start">Registration Starts February 1,2022 </Styled.Text>
                </Styled.Item>

                <Styled.Digonal direction={true}/>
                
                <Styled.Item justifyContent="left">
                    <Styled.Text mr="30" align="end">Registration Ends March 26,2022</Styled.Text>
                    <Styled.Hex>
                        <Styled.HexText>
                            2
                        </Styled.HexText>
                    </Styled.Hex>
                </Styled.Item>
                
                <Styled.Digonal direction={false}/>
                
                <Styled.Item justifyContent="right">
                    <Styled.Hex>
                        <Styled.HexText>
                            3
                        </Styled.HexText>
                    </Styled.Hex>
                    <Styled.Text ml="30" align="start">Idea Submission April 1,2022</Styled.Text>
                </Styled.Item>
                
                <Styled.Digonal direction={true}/>
                
                <Styled.Item justifyContent="left">
                    <Styled.Text mr="30" align="end">Idea Submission Results April 2,2022 </Styled.Text>
                    <Styled.Hex>
                        <Styled.HexText>
                            4
                        </Styled.HexText>
                    </Styled.Hex>
                </Styled.Item>
                
                <Styled.Digonal direction={false}/>
                
                <Styled.Item justifyContent="right">
                    <Styled.Hex>
                        <Styled.HexText>
                            5
                        </Styled.HexText>
                    </Styled.Hex>
                    <Styled.Text ml="30" align="start">HacTrix Officially Kicks Off April 2,2022 </Styled.Text>
                </Styled.Item>
                
                <Styled.Digonal direction={true}/>
                
                <Styled.Item justifyContent="left">
                    <Styled.Text mr="30" align="end">Results are Announced April 3,2022 </Styled.Text>
                    <Styled.Hex>
                        <Styled.HexText>
                            6
                        </Styled.HexText>
                    </Styled.Hex>
                </Styled.Item>
                
                <Styled.Digonal direction={false}/>
                
                <Styled.Item justifyContent="right">
                    <Styled.Hex>
                        <Styled.HexText>
                            7
                        </Styled.HexText>
                    </Styled.Hex>
                    <Styled.Text ml="30" align="start">Project Submission Ends April 3,2022 </Styled.Text>
                </Styled.Item>
                
                <Styled.Digonal direction={true}/>
                
                <Styled.Item justifyContent="left">
                    <Styled.Text mr="30" align="end">HackTrix Ends April 3,2022</Styled.Text>
                    <Styled.Hex>
                        <Styled.HexText>
                            8
                        </Styled.HexText>
                    </Styled.Hex>
                </Styled.Item>
                
                <Styled.Digonal direction={false}/>
                
                <Styled.Item justifyContent="right">
                <Styled.Hex>
                        <Styled.HexText>
                            9
                        </Styled.HexText>
                    </Styled.Hex>
                    <Styled.Text ml="30" align="start">Final Round April 3,2022 </Styled.Text>
                </Styled.Item>
                
                <Styled.Digonal direction={true}/>
                
                <Styled.Item justifyContent="left">
                    <Styled.Text mr="30" align="end">Winners Announced April 3,2022</Styled.Text>
                    <Styled.Hex>
                        <Styled.HexText>
                            10
                        </Styled.HexText>
                    </Styled.Hex>
                </Styled.Item>
            </Styled.Wrapper>
        </Styled.ScheduleWrapper>
    )
}

export default Schedule;