import React from "react";
import { styled } from "styled-components";
import { FlexConteiner } from "../FlexConteiner";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexConteiner> 
            <Slide>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
                <Name>Ivan Ivanov</Name>
            </Slide>
            </FlexConteiner>
            <Pagination>
                <span> </span>
                <span> </span>
                <span> </span>
            </Pagination>

        </StyledSlider>
    )
}

const StyledSlider = styled.div`
      border: 1px solid red;
      max-width:500px;
`

const Slide = styled.div`
  
   text-align:center;

`
const Text = styled.p`
    
`
const Name = styled.span`
    
` 

const Pagination = styled.div`
    span {
display: inline-block;
width: 20px;
height: 20px;
margin: 5px;
background-color: #b7e9b7;

    }
`