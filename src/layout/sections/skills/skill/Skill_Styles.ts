import { styled } from "styled-components"
import { theme } from "../../../../styles/Theme"

const Skills = styled.section`
    

min-height:100%;

`
const SkillsWrapper = styled.div`
    display:flex;
    gap:20px;
    position: relative;
    align-items:start;
    justify-content:space-between;
    /* padding: 25px 0px ; */
    /* margin-left: 50px; */
    /* padding-top: 25px; */
     

 &::before {
    content:'';
    display:inline-block;
    border: 1px solid #000;
    border-radius: 20px;
    width: 120px;
    height: 120px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background: rgba(79, 184, 128, 0.2);
    padding: 25px;
     
     
    

    position:absolute;
    /* left:10% */
    /* top:50%; */
    transform-origin: top left;

        
    
 }
    
`
const WrapperSkill = styled.div`
display:flex;
flex-direction:column;
align-items:start;
/* padding-left: 10px; */
width: 60%;
 


    
`
const ImgUx = styled.img`
   padding: 25px;
   
`
const SkillTitle = styled.h3`
    color:${theme.colors.font};
    font-weight: 500;
    font-size: 20px;
    padding: 10px;
     
    
`

const SkillText = styled.p`
    font-size:20px;
    font-weight: 500;
    line-height: 150%;

    @media ${theme.media.mobile} , ${theme.media.mobile} {
        font-size:15px;
        
    }
     
    

`


export const S = {
    Skills,
    SkillText,
    SkillTitle,
    ImgUx,
    WrapperSkill,
    SkillsWrapper,
    

}