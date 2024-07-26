import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Menu } from "../../../components/menu/Menu";
import { FlexConteiner } from "../../../components/FlexConteiner";
import { Work } from "./work/Work";
import uxDesignImg from "./../../../../src/assets/images/ux-skill.png"
import frontImg from "./../../../../src/assets/images/front-skill.png"
import designImg from "./../../../../src/assets/images/desig-skill.png"

const worksIitems = ["All", "UX/UI Design", "Web Design", "Front End Development",]

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My recent works</SectionTitle>
            <Menu menuItems={worksIitems}></Menu>
            <FlexConteiner direction={"column"} align={"center"}>
                <Work title={"UX/ ui design"} text={"Research, Design, Prototype, and Animation"} src={uxDesignImg} />

                <Work title={"Front end development"} text={"I build landing pages and responsive websites and web App"} src={frontImg} />

                <Work title={"responsive design"} text={"I build landing pages and responsive websites and web App"} src={designImg} />
            </FlexConteiner>
        </StyledWorks>
    )
}

const StyledWorks = styled.section`
    min-height:100vh;
    background-color:#a1e2aad3;
   
  
`