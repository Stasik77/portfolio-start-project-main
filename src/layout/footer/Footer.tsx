import React from "react";

import { styled } from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexConteiner } from "../../components/FlexConteiner";
import { Container } from "../../components/Container";
export const Footer = () => {
    return (
        <StyledFooter>
            <Container> 
            <FlexConteiner direction={"row"}  justify="space-between">
                {/* <Name>Stanislav</Name> */}
                <Copyight>Designed and developed by Rostam Sadiqi 2021</Copyight>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId="be" />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId="instagram" />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId="be" />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId="instagram" />
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

`

const Name = styled.span`
    
`

const SocialList = styled.ul`
    display:flex;
    gap:30px
`
const SocialItem = styled.li`
    
`
const SocialLink = styled.a`
    
`
const Copyight = styled.small`
    font-size:18px;
    font-weight: 500;

`
