import React from "react";

import { styled } from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexConteiner } from "../../components/FlexConteiner";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";
export const Footer = () => {
    return (
        <StyledFooter>
            <Container> 
            <FlexConteiner direction={"row"}  justify="space-between">
                {/* <Name>Stanislav</Name> */}
                <Copyight>Designed and developed by Rostam Sadiqi 2021</Copyight>
                <SocialList>
                    <SocialItem>
                        <SocialLink href="#">
                            <Icon height={"23px"} width={"23px"} viewBox={"0 0 23px 23px"} iconId="instagram" />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink href="#">
                            <Icon height={"25px"} width={"25px"} viewBox={"0 0 25px 25px"} iconId="ball" />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink href="#">
                            <Icon height={"23px"} width={"23px"} viewBox={"0 0 23px 23px"} iconId="be" />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink href="#">
                            <Icon height={"23px"} width={"23px"} viewBox={"0 0 23px 23px"} iconId="in" />
                        </SocialLink>
                    </SocialItem>
                </SocialList>


            </FlexConteiner>
            </Container>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
 background-color:rgba(15,191,97,0.1);
   
    min-height:20vh;
    padding-top:180px;
    padding-bottom:70px;
    
    @media ${theme.media.mobile}{
         
    }
    

`

const Name = styled.span`
    
`

const SocialList = styled.ul`
    display:flex;
    gap:30px;

   
`
const SocialItem = styled.li`
    
`
const SocialLink = styled.a`
    
`
const Copyight = styled.small`
    font-size:18px;
    font-weight: 500;
    @media ${theme.media.mobile}{
        font-size:10px;
    }
    
`
