import React from "react";
import { styled } from "styled-components";
import { FlexConteiner } from "../../../components/FlexConteiner";
import imgMe from "./../../../assets/images/Foto.webp"


export const AboutMe = () => {
    return (

        <StyledWorks>
            
            <StyledTitle>
                About Me
            </StyledTitle>
            <FlexConteiner>
                <StyledImage src={imgMe} />
            </FlexConteiner>
            <FlexConteiner>
                <StyledText>Hello! My name is Rostam Sadiqi and I am a UX/UI designer and Front End Developer. I enjoy creating things that live on the internet. An experienced Software Engineer with a demonstrated history of working in the Computer Software industry. Skilled in Web Design, UX/UI design, and Front-end Development. Specialize in Information Security and software engineering, creating dynamic and beautiful web pages. I have been in the field for nearly 5 years, and have been loving every minute of it. </StyledText>
                <p>Here are a few technologies I’ve been working with recently:</p>
                <ListSkill>
            <ListSkillItem>
                <span>Angular </span>
            </ListSkillItem>
            <ListSkillItem>
                <span>HTML  </span>
            </ListSkillItem>
            <ListSkillItem>
                <span>Figma </span>
            </ListSkillItem>
            <ListSkillItem>
                <span>Bootstrap 4,5 </span>
            </ListSkillItem>
            <ListSkillItem>
                <span>CSS,SASS  </span>
            </ListSkillItem>
            <ListSkillItem>
                <span>Adobe XD  </span>
            </ListSkillItem>
                </ListSkill>
            </FlexConteiner>
          
        </StyledWorks>

    )
}


const StyledWorks = styled.section`
    min-height:100vh;
    
     
    `
const StyledTitle = styled.h2`
        text-align:center
    `
const StyledImage = styled.img`
`

const StyledText = styled.p`
`
    


const ListSkill = styled.ul`
    
`

const ListSkillItem = styled.li`
    
`

    

    


