import React from "react";
import styled from "styled-components";


import { FlexConteiner } from "../../../components/FlexConteiner";
import { WorkWhatIdo } from "./work/WorkWhatIdo";
import uxDesignImg from "./../../../../src/assets/images/ux-skill.png"
import frontImg from "./../../../../src/assets/images/front-skill.png"
import designImg from "./../../../../src/assets/images/desig-skill.png"
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";





export const WorksWhatIDo = () => {
    return (
        <StyledWorks>
            <Container> 
            <FlexConteiner direction={"column"} align={"center"} gap="100px"  justifyCent="center">
               
                <WorkWrapper>
                    <WorkWhatIdo title={"UX/ ui design"} text={"Research, Design, Prototype, and Animation"} src={uxDesignImg} />
                </WorkWrapper>

                <WorkWrapper>
                    <WorkWhatIdo title={"Front end development"} text={"Implement UX design into live and user friendly "} src={frontImg} />
                </WorkWrapper>

                <WorkWrapper>
                    <WorkWhatIdo title={"responsive design"} text={"I build landing pages and responsive websites and web App"} src={designImg} />
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
    /* border:1px solid red; */
    display:flex;
    max-width:100%;
    /* margin-bottom: 75px; */

  
    
    /* width:1110px; */
    
    
   
`