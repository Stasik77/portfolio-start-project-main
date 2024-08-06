import React from "react";
import { styled } from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { Container } from "../../../../components/Container";


type SkillPropsType = {
    iconId:  string
    title: string
    description: string
} 
export const Skill = (props:SkillPropsType) => {
    return (
        <StyledSkill>
            <Container>
                    <Icon iconId = {props.iconId}/>
                    <SkillTitle>{props.title}</SkillTitle>
                    <SkillText>{props.description}</SkillText>

                  </Container>
                </StyledSkill>
    )
}

const StyledSkill = styled.div`
width:33%;
background-color:#ebe9e9df;
margin:10px;
 
    

`
const SkillTitle = styled.h3`
    

`
const SkillText = styled.p`
    

`