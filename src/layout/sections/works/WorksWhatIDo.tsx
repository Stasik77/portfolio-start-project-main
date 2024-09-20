import React from "react";
import styled from "styled-components";


import { FlexConteiner } from "../../../components/FlexConteiner";
import { WorkWhatIdo } from "./work/WorkWhatIdo";
import uxDesignImg from "./../../../../src/assets/images/ux-skill.png"
import frontImg from "./../../../../src/assets/images/front-skill.png"
import designImg from "./../../../../src/assets/images/desig-skill.png"
import { Container } from "../../../components/Container";



const worksData = [
    {
        title: "UX/ ui design",
        text:"Research, Design, Prototype, and Animation",
        src: uxDesignImg 
    },
    {
        title: "Front end development",
        text:"Implement UX design into live and user friendly",
        src: frontImg 
    },
    {
        title: "responsive design",
        text:"I build landing pages and responsive websites and web App",
        src: designImg 
    },

];



export const WorksWhatIDo:React.FC = () => {
    return (
        <StyledWorks>
            <Container> 
            <FlexConteiner direction={"column"} align={"center"} gap="100px"  justifyCent="center">
               
                {worksData.map((w)=> {
                return  <WorkWhatIdo title={w.title} 
                                     text={w.text} 
                                     src={w.src}/>


              })}


               
            </FlexConteiner>
            </Container>
        // </StyledWorks>
    );
};

   const StyledWorks = styled.section`
   min-height:100vh;
     
   
  
 `

const WorkWrapper = styled.div`
    /* border:1px solid red; */
    display:flex;
    max-width:100%;
    /* margin-bottom: 75px; */

  
    
    /* width:1110px; */
    
    
   
`