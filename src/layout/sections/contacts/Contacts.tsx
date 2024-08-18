import React from "react";
import { styled } from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";

export const Contacts =() => {
    return (
        <StyledContact>
            <Container>
            <SectionTitle>Contact</SectionTitle>
            <StyledForm>
                <Field placeholder="Name"/>
                <Field placeholder="subject"/>
                <Field placeholder="message" as={'textarea'}/>
                <Button type={"submit"}>Send Message</Button>
            </StyledForm>
            </Container>
        </StyledContact>
    );
}


const StyledContact = styled.section`
    min-height:50vh;
    /* background-color:#e6c096 */
`
const StyledForm = styled.form`
    max-width:500px;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:15px;
    margin:0 auto;

    textarea {
        resize:none;
        height: 155px;
    }
    
`

const Field = styled.input`
    width:100%;
    padding:7px 15px;
    font-style:"Roboto";
     
    &::placeholder {
        text-transform:capitalize;
         
    }

   
`

