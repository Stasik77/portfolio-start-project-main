import React from 'react';
import { Icon } from '../icon/Icon';
import logimg from "./../../assets/images/Logo.svg"
import { styled } from 'styled-components';

 

export const Logo  = () => {
    return (
        <a href="">
                {/* <Icon iconId= {'react'}/> */}
                <LogoImg src={logimg}/>
            </a>

    );
};

const LogoImg = styled.img`
    
`
 
 