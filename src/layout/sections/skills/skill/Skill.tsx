import React from "react";
import { styled } from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { Container } from "../../../../components/Container";
import { FlexConteiner } from "../../../../components/FlexConteiner";
import { theme } from "../../../../styles/Theme";


type SkillPropsType = {
    iconId: string
    title: string
    description: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            {/* <Container> */}
            <FlexConteiner>
                <IconWrapper>
                    <Icon iconId={props.iconId} />
                </IconWrapper>

                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.description}</SkillText>
            </FlexConteiner>
            {/* </Container> */}
        </StyledSkill>
    )
}


const IconWrapper = styled.div`
position: relative;

 &::before {
    content:'';
    display:inline-block;
    border: 1px solid #000;
    border-radius: 20px;
    width: 120px;
    height: 120px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background: rgba(79, 184, 128, 0.2);

    position:absolute;
    left:50%;
    top:50%;
    transform-origin: top left;

        
    
 }
    


`
const StyledSkill = styled.div`
width:33%;
padding: 50px 30px 50px 150px;

 
    

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