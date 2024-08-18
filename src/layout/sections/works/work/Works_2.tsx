import React from "react";
import { styled } from "styled-components";
import { FlexConteiner } from "../../../../components/FlexConteiner";
import { Work_2 } from "./Work_2";
import work_1 from "./../../../../assets/images/ptojects/1work.png"
import work_2 from "./../../../../assets/images/ptojects/2work.png"
import work_3 from "./../../../../assets/images/ptojects/3work.png"
import work_4 from "./../../../../assets/images/ptojects/4work.png"
import { Container } from "../../../../components/Container";
import { SectionTitle } from "../../../../components/SectionTitle";
import { Menu } from "../../../../components/menu/Menu";

const worksIitems = ["All", "UX/UI Design", "Web Design", "Front End Development",]
export const Works_2 = () => {
    return (
        <StyledWorks>
            <Container>
            <SectionTitle>My recent works</SectionTitle>
            <Menu menuItems={worksIitems}></Menu>
            <FlexConteiner direction={"row"} wrap={"wrap"} gap={"20px"} >  
            <Work_2 src={work_1}/> 
            <Work_2 src={work_2}/> 
            <Work_2 src={work_3}/> 
            <Work_2 src={work_4}/> 
            </FlexConteiner>
            </Container>
        </StyledWorks>
    )
}

//как изменить в компоненьте что то ??Г

const StyledWorks = styled.section`
    min-height:100vh;
    margin-top: 25px;
     
     
     
    `