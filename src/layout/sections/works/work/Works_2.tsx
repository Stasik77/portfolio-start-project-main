import React from "react";
import { styled } from "styled-components";
import { FlexConteiner } from "../../../../components/FlexConteiner";
import { Work_2 } from "./Work_2";
import work_1 from "./../../../../assets/images/ptojects/1work.png"
import work_2 from "./../../../../assets/images/ptojects/2work.png"
import work_3 from "./../../../../assets/images/ptojects/3work.png"
import work_4 from "./../../../../assets/images/ptojects/4work.png"
import { Container } from "../../../../components/Container";
import { SectionServisTitile, SectionTitle } from "../../../../components/SectionTitle";
import { Menu } from "../../../../components/menu/Menu";
import { Button } from "../../../../components/Button";

const worksIitems = ["All", "UX/UI Design", "Web Design", "Front End Development",]
export const Works_2 = () => {
    return (
        <StyledWorks>
            <Container>
            <SectionServisTitile>Portfolio</SectionServisTitile>
            <SectionTitle>My recent works</SectionTitle>
            <Menu menuItems={worksIitems}></Menu>
            <FlexConteiner align="center" direction={"row"} wrap={"wrap"} gap={"23px"}  justifyCent="center" >  
            <Work_2 src={work_1}/> 
            <Work_2 src={work_2}/> 
            <Work_2 src={work_3}/> 
            <Work_2 src={work_1}/> 
            </FlexConteiner>
            <Button marg={"60px auto 0 auto "} displayBlock ={"block"}>See More</Button>
            </Container>
        </StyledWorks>
    )
}

//как изменить в компоненьте что то ??Г

const StyledWorks = styled.section`
    min-height:100vh;
    padding-top: 10px;
     
    `