import React from "react";
import { styled } from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import { SectionServisTitile, SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { FlexConteiner } from "../../../components/FlexConteiner";
import { Container } from "../../../components/Container";
import imgUx from "../../../assets/images/ux1.svg"

export const Skills = () => {
    return (
        <StyledSkills>
            <Container> 
            <SectionServisTitile>My service</SectionServisTitile>
            <SectionTitle>What I Do </SectionTitle>
            <FlexConteiner justify={"space-between"}>
               <ImgUx src={imgUx} />
                
                <Skill iconId={"test"}  // не закидывается через ID
                       title={"1"}  
                       description={"UX/UI Design "} />
                <Skill iconId={"be"}
                       title={"2"}
                       description={"Front End Development "} />
                <Skill iconId={"ball"}
                       title={"3"}
                       description={"Responsive Design"} />
            </FlexConteiner>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    

min-height:100vh;

`


const ImgUx = styled.img`
    
`    