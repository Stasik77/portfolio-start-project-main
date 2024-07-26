import React from "react";
import { styled } from "styled-components";
import photo from "./../../../assets/images/photo-34.jpg";
import { FlexConteiner } from "../../../components/FlexConteiner";

export const Main =() => {
    return(
        <StyledMain>
            <FlexConteiner align={"center"} justify={"space-around"}>
            <div>
                <span>Hello, I’m</span>
                <Name>Fabio Scaletta</Name>
                
                <MainTitle>I’m Front End Developer  . </MainTitle>
            </div>

            <Photo src={photo} alt="myphoto" />
            </FlexConteiner>
        </StyledMain>
    )

}
const StyledMain = styled.div`
 min-height: 100vh ;
background-color:gray;
`

const Photo = styled.img`
    width:548px;
    height:390px;
    object-fit:cover;
`

const MainTitle = styled.h1`

    
`


const Name = styled.h1`

    
`