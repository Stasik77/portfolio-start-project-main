import React from "react";
import { styled } from "styled-components";

type WorkPropsType = {
title: string
text: string
src: string


}

export const Work = (props:WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src}/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={"#"}>Learn More</Link>
        </StyledWork>
    )
}

const StyledWork = styled.div`
    background-color:#719e4d;
     max-width:1100px;
     width:100%;
    
    
`

const Image = styled.img`
    width:550px;
    height:394px;
    object-fit:cover;
` 

const Link = styled.a`
    
`

const Title = styled.h3`
    
`

const Text = styled.p`
    
`