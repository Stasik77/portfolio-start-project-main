import React from "react";
import { SectionServisTitile, SectionTitle } from "../../../components/SectionTitle";
// import { Skill } from "./skill/Skill";
import { FlexConteiner } from "../../../components/FlexConteiner";
import { Container } from "../../../components/Container";
import imgUx from "../../../assets/images/ux1.svg"
import imgFrontDev from "../../../assets/images/ux2.svg"
import imgDesing from "../../../assets/images/ux3.svg"
import {S} from"./skill/Skill_Styles";
 


 

export const Skills: React.FC = () => {
    return (
        <S.Skills id={"service"}>
            <Container>
                <SectionServisTitile>My service</SectionServisTitile>
                <SectionTitle>What I Do </SectionTitle>
                <FlexConteiner justify={"space-around"} wrap="wrap" align="center"  margMedia ="0 0 45px 0" > 
                    <S.SkillsWrapper>
                        <S.ImgUx src={imgUx} />
                        <S.WrapperSkill>
                            <S.SkillTitle>
                                01
                            </S.SkillTitle>
                            <S.SkillText>UX/UI Design</S.SkillText>
                        </S.WrapperSkill>
                    </S.SkillsWrapper>
                    <S.SkillsWrapper>
                        <S.ImgUx src={imgFrontDev} />
                        <S.WrapperSkill>
                            <S.SkillTitle>
                                02
                            </S.SkillTitle>
                            <S.SkillText>Front End Development </S.SkillText>
                        </S.WrapperSkill>
                    </S.SkillsWrapper>
                    <S.SkillsWrapper>
                        <S.ImgUx src={imgDesing} />
                        <S.WrapperSkill>
                            <S.SkillTitle>
                                03
                            </S.SkillTitle>
                            <S.SkillText>Responsive Design</S.SkillText>
                        </S.WrapperSkill>

                    </S.SkillsWrapper>



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
        </S.Skills>
    );
};

