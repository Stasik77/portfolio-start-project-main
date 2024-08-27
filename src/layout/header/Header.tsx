import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/logo";
import { Container } from "../../components/Container";
import { FlexConteiner } from "../../components/FlexConteiner";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { MobileMenu } from "./mobileMenu/MobileMenu";


const items = ["Home", "About", "Service", "My work", "Resume"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexConteiner justify={"space-between"} align={"center"}  >
                    <Logo />
                    <HeaderMenu menuItems={items} />
                    <MobileMenu menuItems={items} />
                </FlexConteiner>
                

            </Container>

        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    
    
     position:fixed; 
    padding-top: 25px;
   
    
    left:0;
    right:0;
    z-index:9999;
     
    
`

