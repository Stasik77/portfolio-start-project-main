import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/logo";
import { Container } from "../../components/Container";
import { FlexConteiner } from "../../components/FlexConteiner";
import { HeaderMenu } from "./headerMenu/HeaderMenu";


const items = ["Home", "About", "Service", "My work", "Resume"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexConteiner justify={"space-between"} align={"center"}  >
                    <Logo />
                    <HeaderMenu menuItems={items} />
                </FlexConteiner>
            </Container>

        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    /* background-color:rgba(15,191,97,0.1); */
    /* padding:20px 0; */
    position:fixed;
    margin-top:25px;
    
     
    left:0;
    right:0;
    z-index:9999;
     
    
`

