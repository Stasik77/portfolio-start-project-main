import React from "react";
import styled from "styled-components";


import { FlexConteiner } from "../../../components/FlexConteiner";
import { Work } from "./work/Work";
import uxDesignImg from "./../../../../src/assets/images/ux-skill.png"
import frontImg from "./../../../../src/assets/images/front-skill.png"
import designImg from "./../../../../src/assets/images/desig-skill.png"
import { Container } from "../../../components/Container";





export const Works = () => {
    return (
        <StyledWorks>
            <Container> 
            <FlexConteiner direction={"column"} align={"center"}>
               
                <WorkWrapper>
                    <Work title={"UX/ ui design"} text={"Research, Design, Prototype, and Animation"} src={uxDesignImg} />
                </WorkWrapper>

                <WorkWrapper>
                    <Work title={"Front end development"} text={"I build landing pages and responsive websites and web App"} src={frontImg} />
                </WorkWrapper>

                <WorkWrapper>
                    <Work title={"responsive design"} text={"I build landing pages and responsive websites and web App"} src={designImg} />
                </WorkWrapper>

            </FlexConteiner>
            </Container>
        </StyledWorks>
    )
}

const StyledWorks = styled.section`
    min-height:100vh;
     
   
  
`

const WorkWrapper = styled.div`
    border:1px solid red;
    display:flex;
    flex-direction:row;

    width:1110px;
    justify-content:space-evenly;
    
   
`