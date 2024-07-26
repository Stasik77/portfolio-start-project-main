import React from "react";
import { styled } from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <SectionTitle>Have any project in mind?</SectionTitle>
            <Button>Let’s talk</Button>
        </StyledSlogan>
    )
}

const StyledSlogan = styled.section`
    min-height:30vh;
    background-color:#df7b7bb2
`