import React from "react";
import { styled } from "styled-components";
import { SectionServisTitile, SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
            <SloganWrapper>
            <SectionTitle>Have any project in mind?</SectionTitle>
            <SectionServisTitile>Let’s work together and I will help you by all my best.</SectionServisTitile>
            <Button secondBtn >Let’s talk</Button>
            </SloganWrapper>
            </Container>
        </StyledSlogan>
    )
}

const SloganWrapper = styled.div`
    background-color: ${theme.colors.titleText}
    
`
const StyledSlogan = styled.section`
    min-height:30vh;
   
`