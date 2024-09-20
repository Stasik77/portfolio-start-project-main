import { styled } from "styled-components"
import { theme } from "../../../styles/Theme"
import imgLi from "./../../../../src/assets/images/arrow.svg"

const PhotoWrapper = styled.div`
        position: relative;
        z-index:0;
        margin-top:85px;
        margin-left: 85px;

    &::before{
        content:"";
        width: 280px;
        height: 420px;
        border: 3px solid ${theme.colors.titleText};
        border-radius: 20px;
        position:absolute;
        
        left:-49px;
        top:38px;
        z-index: -1;
    }
`

const  Works = styled.section`
    min-height:100%;
    display:flex;
    /* padding-top: 170px; */
    /* padding-bottom: 115px; */
    @media ${theme.media.mobile}, ${theme.media.tablet}{
        padding-bottom: 0px;
          
        }
    /* border:1px solid blue; */
    
     
    `
const  Title = styled.h2`
        /* text-align:center; */
        font-size: 40px;
        font-weight: 700;
        color: ${theme.colors.titleText};
        padding-bottom: 20px;
        font-family:"Roboto";
        padding-top: 10px;
         

        @media ${theme.media.mobile} ,${theme.media.tablet} {
            margin-top: 85px;
            font-size: 30px;
 
        }
      
    `

    const  MainText = styled.p`
    
        
font-size: 18px;
font-weight: 400;
color:${theme.colors.font};
text-align:left;
padding-top: 10px;
/* padding-left: 5px; */
padding-bottom: 15px;
font-family:"Roboto";
width:100%; 
line-height: 167%;


        
`
    


const Image = styled.img`
    width:280px;
    height: 420px;
     
    
    @media ${theme.media.mobile} ,${theme.media.tablet}  {
        width:250px;
        height: 400px;
        
    }
    

     
`
// const AboutWrapper = styled.div`
//     display:flex;
//     border:1px solid black;
//     display:flex;
//     flex-wrap:wrap


// `
const  Text = styled.p`
font-size: 18px;
font-weight: 400;
color:${theme.colors.font};
text-align:left;
width: 50%;
font-family:"Roboto";


@media ${theme.media.mobile} ,${theme.media.tablet} {
            margin-bottom: 75px;
            text-align:left;
            /* margin:0 auto; */
            font-size: 15px;
            width:70vw;

            
        }
        
`



const ListSkill = styled.ul`
display:flex;
flex-direction:row;
justify-content:space-around;
flex-wrap:wrap;
width:100%;
padding-bottom: 15px;
gap: 10px;
 

@media ${theme.media.mobile} ,${theme.media.tablet} {
    flex-direction:row;
    flex-wrap:wrap;
       width:100%;
        }
        

    
`

const ListSkillItem = styled.li`
    
    list-style-image:url(${imgLi});   // как через Id закинуть свг 
    padding-left: 9px;
    padding-bottom:22px;
    align-items:center;
    width:40%;

    /* @media ${theme.media.mobile} ,${theme.media.tablet} {
        width:60%;
            
        } */
     
     

    
    
     
`


const ListText = styled.p`
    /* margin-top:20px; */
    margin-bottom: 20px;

`

const SpanColor = styled.span`
    color:${theme.colors.titleText};
`

const SpanBolt = styled.span`
    font-weight:700;
`


export const S = {
    SpanBolt,
    SpanColor,
    ListSkillItem,
    ListSkill,
    Text,
    Image,
    Title,
    Works,
    PhotoWrapper,
    ListText,
    MainText
}