import React, { useState } from "react";
import { styled } from "styled-components";
import { FlexConteiner } from "../../../../components/FlexConteiner";
import { Work_2 } from "./Work_2";
import work_1 from "./../../../../assets/images/ptojects/1work.png"
import work_2 from "./../../../../assets/images/ptojects/2work.png"
import work_3 from "./../../../../assets/images/ptojects/3work.png"
import work_4 from "./../../../../assets/images/ptojects/4work.png"
import { Container } from "../../../../components/Container";
import { SectionServisTitile, SectionTitle } from "../../../../components/SectionTitle";
import { Menu, StatusType } from "../../../../components/menu/Menu";
import { Button } from "../../../../components/Button";

// const worksIitems = ["All", "UX/UI Design", "Web Design", "Front End Development",]

const worksIitems: Array<{ status: StatusType, title: string }> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "UX/UI Design",
        status: "ux"
    },
    {
        title: "Web Design",
        status: "web"
    },
    {
        title: "Front End Development",
        status: "front"
    },





]


const worksData = [
    {
        scr: work_1,
        types: ["all", 'ux'],
    },
    {
        scr: work_2,
        types: ["ux"],
    },
    {
        scr: work_3,
        types: ["web"],
    },

    {
        scr: work_4,
        types: ["front"],

    },
]




export const Works_2: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredWorks = worksData

    if (currentFilterStatus === "ux") {

        filteredWorks = worksData.filter(work => work.types.includes('ux'))
    }
    if (currentFilterStatus === "web") {

        filteredWorks = worksData.filter(work => work.types.includes('web'))
    }
    if (currentFilterStatus === "front") {

        filteredWorks = worksData.filter(work => work.types.includes('front'))
    }


    function changeFilterStatus(value: StatusType) {
        setCurrentFilterStatus(value)
    }

    console.log(filteredWorks)

    return (
        <StyledWorks>
            <Container>
                <SectionServisTitile>Portfolio</SectionServisTitile>
                <SectionTitle>My recent works</SectionTitle>
                <Menu menuItems={worksIitems} changeFilterStatus={changeFilterStatus}></Menu>
                <FlexConteiner align="center" justify={"center"} direction={"row"} wrap={"wrap"} gap={"23px"} justifyCent="center" >

                    {filteredWorks.map((w) => {
                        return <Work_2 src={w.scr} />
                    })}

                </FlexConteiner>
                <Button marg={"95px auto 0 auto "} displayBlock={"block"} thirdBtn>See More </Button>
            </Container>
        </StyledWorks>
    )
}

//как изменить в компоненьте что то ??Г

const StyledWorks = styled.section`
    min-height:100vh;
    padding-top: 10px;
     
    `