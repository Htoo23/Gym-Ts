import { useState } from "react";
import {Bars3Icon,XMarkIcon} from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import {SelectedPage} from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props={
    isTopOfPage:boolean;
    selectedPage:SelectedPage;
    setSelectedPage:(value:SelectedPage)=>void;
};
const Navbar=({isTopOfPage,selectedPage,setSelectedPage}:Props)=>{
    const flexBetween="flex items-center justify-between";
    const [isMenuToggled,setIsMenuToggled]=useState<boolean>(false);
    const isAboveMediumScreens=useMediaQuery("(min-width:1060px)");
    const navbarBackground=isTopOfPage ? "":"bg-primary-100 drop-shadow";

    return(
        <nav>
            <div className={`$`}
        </nav>
    )
}
