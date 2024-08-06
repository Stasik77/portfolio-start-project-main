import React from "react";
import { styled } from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexConteiner } from "../../../components/FlexConteiner";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Sliders</SectionTitle>
            <FlexConteiner direction={"column"} align = {"center"}>  
                <Icon iconId={"be"} />
                <Slider />
            </FlexConteiner>

        </StyledTestimony>
    )
}

const StyledTestimony = styled.section`
    min-height:50vh;

`