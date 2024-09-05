import React from "react";
import { styled } from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import { SectionServisTitile, SectionTitle } from "../../../components/SectionTitle";
// import { Skill } from "./skill/Skill";
import { FlexConteiner } from "../../../components/FlexConteiner";
import { Container } from "../../../components/Container";
import imgUx from "../../../assets/images/ux1.svg"
import imgFrontDev from "../../../assets/images/ux2.svg"
import imgDesing from "../../../assets/images/ux3.svg"
import { theme } from "../../../styles/Theme";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionServisTitile>My service</SectionServisTitile>
                <SectionTitle>What I Do </SectionTitle>
                <FlexConteiner justify={"space-between"} paddingbt={"125px"} wrap="wrap" align="center">
                    <SkillsWrapper>
                        <ImgUx src={imgUx} />
                        <WrapperSkill>
                            <SkillTitle>
                                01
                            </SkillTitle>
                            <SkillText>UX/UI Design</SkillText>
                        </WrapperSkill>
                    </SkillsWrapper>
                    <SkillsWrapper>
                        <ImgUx src={imgFrontDev} />
                        <WrapperSkill>
                            <SkillTitle>
                                02
                            </SkillTitle>
                            <SkillText>Front End Development </SkillText>
                        </WrapperSkill>
                    </SkillsWrapper>
                    <SkillsWrapper>
                        <ImgUx src={imgDesing} />
                        <WrapperSkill>
                            <SkillTitle>
                                03
                            </SkillTitle>
                            <SkillText>Responsive Design</SkillText>
                        </WrapperSkill>

                    </SkillsWrapper>



                    {/* <Skill iconId={"test"}  // не закидывается через ID
                       title={"1"}  
                       description={"UX/UI Design "} />
                <Skill iconId={"be"}
                       title={"2"}
                       description={"Front End Development "} />
                <Skill iconId={"ball"}
                       title={"3"}
                       description={"Responsive Design"} /> */}
                </FlexConteiner>
            </Container>
        </StyledSkills>
    );
};


const StyledSkills = styled.section`
    

min-height:100%;

`
const SkillsWrapper = styled.div`
    display:flex;
    gap:20px;
    position: relative;
    align-items:start;
    padding: 25px;

 &::before {
    content:'';
    display:inline-block;
    border: 1px solid #000;
    border-radius: 20px;
    width: 120px;
    height: 120px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background: rgba(79, 184, 128, 0.2);
    padding: 25px;

    position:absolute;
    /* left:10% */
    /* top:50%; */
    transform-origin: top left;

        
    
 }
    
`
const WrapperSkill = styled.div`
display:flex;
flex-direction:column;
align-items:start;


    
`
const ImgUx = styled.img`
   padding: 25px;
   
`
const SkillTitle = styled.h3`
    color:${theme.colors.font};
    font-weight: 500;
    font-size: 20px;
    padding: 10px;
  
    
`

const SkillText = styled.p`
    font-size:20px;
    font-weight: 500;
     
    

`