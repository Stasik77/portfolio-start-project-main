import React from "react";
import { styled } from "styled-components";
import { FlexConteiner } from "../../../components/FlexConteiner";
import imgMe from "./../../../assets/images/Foto.webp"
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import imgLi from "./../../../../src/assets/images/arrow.svg"
import { Logo } from "../../../components/logo/logo";


export const AboutMe = () => {
    return (

        <StyledWorks>
            <Container>


                <FlexConteiner justify={"space-between"}>

            <PhotoWrapper> 
                    <StyledImage src={imgMe} alt="" />
                    </PhotoWrapper>
                    <StyledText>
                        <StyledTitle>
                            About Me
                        </StyledTitle>
                        Hello! My name is Stanislav Golovanov and I am a <SpanColor> UX/UI designer </SpanColor>and <SpanColor>Front End Developer</SpanColor>.I enjoy creating things that live on the internet. An experienced Software Engineer with a demonstrated history of working in the Computer Software industry. Skilled in Web Design, UX/UI design, and Front-end Development. Specialize in Information Security and software engineering, creating dynamic and beautiful web pages. I have been in the field for nearly 5 years, and have been loving every minute of it.

                        <ListText>Here are a few technologies I’ve been working with recently:</ListText>
                        {/* <FlexConteiner> */}
                        <ListSkill>

                            <ListSkillItem>
                                Angular
                            </ListSkillItem>
                            <ListSkillItem>
                                HTML
                            </ListSkillItem>
                            <ListSkillItem>
                                Figma
                            </ListSkillItem>
                            <ListSkillItem>
                                Bootstrap 4,5
                            </ListSkillItem>
                            <ListSkillItem>
                                CSS,SASS
                            </ListSkillItem>
                            <ListSkillItem>
                                Adobe XD
                            </ListSkillItem>
                        </ListSkill>
                        {/* </FlexConteiner> */}
                    </StyledText>
                </FlexConteiner>
            </Container>
        </StyledWorks>



    )
}


const PhotoWrapper = styled.div`
    position: relative;
    &::before{
        content:"";
        width: 280px;
        height: 420px;
        border: 3px solid ${theme.colors.};
        border-radius: 20px;
    }
`

const StyledWorks = styled.section`
    min-height:100vh;
    display:flex;
    border:1px solid blue;
    
     
    `
const StyledTitle = styled.h2`
        /* text-align:center; */
        font-size: 40px;
        font-weight: 700;
       color: ${theme.colors.titleText};
       margin-bottom: 30px;
        
    `
const StyledImage = styled.img`
    width:280px;
    height: 420px;
    margin-top:85px;
    

     
`
// const AboutWrapper = styled.div`
//     display:flex;
//     border:1px solid black;
//     display:flex;
//     flex-wrap:wrap


// `
const StyledText = styled.p`
font-size: 18px;
font-weight: 400;
color:${theme.colors.font};
text-align:left;
width: 50%;
line-height: 167%;

`



const ListSkill = styled.ul`
display:flex;
flex-direction:row;
justify-content:space-around;
flex-wrap:wrap;
width:100%;
 



    
`

const ListSkillItem = styled.li`
    
    list-style-image:url(${imgLi});
    padding-left: 9px;
    padding-bottom:22px;
    align-items:center;
    width:40%;
     

    
    
     
`


const ListText = styled.p`
    margin-top:20px;
    margin-bottom: 20px;

`

const SpanColor = styled.span`
    color:${theme.colors.titleText}
`