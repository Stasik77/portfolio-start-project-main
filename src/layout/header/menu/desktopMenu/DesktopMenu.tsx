import React from "react";
import ilipsImgR from "../../../assets/images/EllipseR.svg";
import ilipsImgL from "../../../assets/images/EllipseL.svg";
import { Menu } from "../Menu";
import { S } from "../headerMenu/HeaderMenu_Styles";
 



export const DesktopMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (

        <S.DesktopMenu>
            <Menu menuItems={props.menuItems} />
            {/* <S.ElipsR src={ilipsImgR} /> */}
            {/* <S.ElipsL src={ilipsImgL} /> */}
        </S.DesktopMenu>

    )
};

 