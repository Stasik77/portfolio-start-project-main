import React from "react";

import { styled } from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexConteiner } from "../../components/FlexConteiner";
export const Footer = () => {
    return (
        <StyledFooter>
            <FlexConteiner direction={"column"} align={"center"}> 
            <Name>Stanislav</Name>
            <SocialList>
                <SocialItem>
                    <SocialLink>
                        <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId="be" />
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId="instagram" />
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId="ball" />
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId="ball" />
                    </SocialLink>
                </SocialItem>
            </SocialList>
            
            <Copyight>Designed and developed by Rostam Sadiqi 2021</Copyight>
            </FlexConteiner>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
 background-color:rgba(15,191,97,0.1);
    min-height:20vh;


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
    
`
