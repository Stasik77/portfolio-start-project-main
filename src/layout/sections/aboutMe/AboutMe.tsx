import React from "react";
import { styled } from "styled-components";
import { FlexConteiner } from "../../../components/FlexConteiner";
import imgMe from "./../../../assets/images/Foto.webp"
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import imgLi from "./../../../../src/assets/images/arrow.svg"
import { Logo } from "../../../components/logo/logo";
import { S } from "./AboutMe_Styles";



export const AboutMe: React.FC = () => {
    return (

        <S.Works>
            <Container>


                <FlexConteiner justify={"space-between"} wrap="wrap" align="center" justifyCent = "center" marg="0 0 0 50px " padding="15px 28px 0 0 " margMedia = "0 0 0 0 ">

                  <S.PhotoWrapper> 
                    <S.Image src={imgMe} alt="" />
                    </S.PhotoWrapper>
                    <S.Text>
                        <S.Title>
                            About Me
                        </S.Title>
                        <S.MainText> 
                        Hello! My name is Stanislav Golovanov and I am a <S.SpanColor> UX/UI designer </S.SpanColor>and <S.SpanColor>Front End Developer</S.SpanColor>.<S.SpanBolt>I enjoy creating things that live on the internet.</S.SpanBolt>  An experienced Software Engineer with a demonstrated history of working in the Computer Software industry. Skilled in Web Design, UX/UI design, and Front-end Development. Specialize in Information Security and software engineering, creating dynamic and beautiful web pages. I have been in the field for nearly 5 years, and have been loving every minute of it. </S.MainText>

                        <S.ListText>Here are a few technologies I’ve been working with recently:</S.ListText>
                        {/* <FlexConteiner> */}
                        <S.ListSkill>

                            <S.ListSkillItem >
                                Angular
                            </S.ListSkillItem>
                            <S.ListSkillItem>
                                Bootstrap 4,5 
                            </S.ListSkillItem>
                            <S.ListSkillItem>
                                 HTML
                            </S.ListSkillItem>
                            <S.ListSkillItem>
                                   CSS,SASS
                            </S.ListSkillItem>
                            <S.ListSkillItem>
                            Figma
                            </S.ListSkillItem>
                            <S.ListSkillItem>
                                Adobe XD
                            </S.ListSkillItem>
                        </S.ListSkill>
                        {/* </FlexConteiner> */}
                    </S.Text>
                </FlexConteiner>
            </Container>
        </S.Works>



    )
}

 