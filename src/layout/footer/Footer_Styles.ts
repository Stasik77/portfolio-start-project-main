import { styled } from "styled-components"
import { theme } from "../../styles/Theme"

 
 
const Footer = styled.footer`
background-color:rgba(15,191,97,0.1);
  
   min-height:20vh;
   padding-top:180px;
   padding-bottom:70px;
   
   @media ${theme.media.mobile}, ${theme.media.mobile}{
       padding-top:100px;
   }
   

`


const Name = styled.span`
   
`

const SocialList = styled.ul`
   display:flex;
   gap:20px;

  
`
const SocialItem = styled.li`


`
const SocialLink = styled.a` 





`

   

const Copyight = styled.small`
   font-size:18px;
   font-weight: 500;
   @media ${theme.media.mobile}, ${theme.media.tablet}{
       font-size:10px;
       padding-right: 15px;
       width:50%;
   }
   
`


export const S ={
    Copyight,
    SocialLink,
    SocialItem,
    SocialList,
    Name,
    Footer,
}