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
                    <Styled.Text ml="30" align="start">Registration Starts<br/> February 1,2022 </Styled.Text>
                </Styled.Item>

                <Styled.Digonal direction={true}/>
                
                <Styled.Item justifyContent="left">
                    <Styled.Text mr="30" align="end">Registration Ends<br/> March 26,2022</Styled.Text>
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
                    <Styled.Text ml="30" align="start">Idea Submission<br/> April 1,2022</Styled.Text>
                </Styled.Item>
                
                <Styled.Digonal direction={true}/>
                
                <Styled.Item justifyContent="left">
                    <Styled.Text mr="30" align="end">Idea Submission Results<br/> April 2,2022 </Styled.Text>
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
                    <Styled.Text ml="30" align="start">HacTrix Officially Kicks Off<br/> April 2,2022 </Styled.Text>
                </Styled.Item>
                
                <Styled.Digonal direction={true}/>
                
                <Styled.Item justifyContent="left">
                    <Styled.Text mr="30" align="end">Results are Announced<br/> April 3,2022 </Styled.Text>
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
                    <Styled.Text ml="30" align="start">Project Submission Ends<br/> April 3,2022 </Styled.Text>
                </Styled.Item>
                
                <Styled.Digonal direction={true}/>
                
                <Styled.Item justifyContent="left">
                    <Styled.Text mr="30" align="end">HackTrix Ends<br/> April 3,2022</Styled.Text>
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
                    <Styled.Text ml="30" align="start">Final Round<br/> April 3,2022 </Styled.Text>
                </Styled.Item>
                
                <Styled.Digonal direction={true}/>
                
                <Styled.Item justifyContent="left">
                    <Styled.Text mr="30" align="end">Winners Announced<br/> April 3,2022</Styled.Text>
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