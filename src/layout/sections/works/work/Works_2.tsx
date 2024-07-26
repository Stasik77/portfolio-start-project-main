import React from "react";
import { styled } from "styled-components";
import { FlexConteiner } from "../../../../components/FlexConteiner";
import { Work_2 } from "./Work_2";
import work_1 from "./../../../../assets/images/ptojects/1work.png"
import work_2 from "./../../../../assets/images/ptojects/2work.png"
import work_3 from "./../../../../assets/images/ptojects/3work.png"
import work_4 from "./../../../../assets/images/ptojects/4work.png"


export const Works_2 = () => {
    return (
        <StyledWorks>
            <FlexConteiner direction={"row"}>
            <Work_2 src={work_1}/> 
            <Work_2 src={work_2}/> 
            <Work_2 src={work_3}/> 
            <Work_2 src={work_4}/> 
            </FlexConteiner>
        </StyledWorks>
    )
}

const StyledWorks = styled.section`
    min-height:100vh;
    background-color:#a1e2aad3;
     
    `