import React from "react";
import { Logo } from "../../components/logo/logo";
import { Container } from "../../components/Container";
import { FlexConteiner } from "../../components/FlexConteiner";
import { DesktopMenu} from "./menu/desktopMenu/DesktopMenu";
import { MobileMenu } from "./menu/mobileMenu/MobileMenu";
import {S} from "./Header_Styles"



export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    
    React.useEffect(() => {
       
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    
       
      }, []);


    return (
        <S.Header>
            <Container>
                <FlexConteiner justify={"space-between"} align={"center"}  >
                    <Logo />


                    {width < breakpoint ?<MobileMenu/>  
                                        :<DesktopMenu />}
                    
                   
                </FlexConteiner>
                

            </Container>

        </S.Header>
    );
};

 