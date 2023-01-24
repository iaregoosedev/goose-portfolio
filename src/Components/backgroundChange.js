import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LLBg from "../Images/LLBackground.png"
import OSFBg from "../Images/OSFBackground.png"
import CatBg from "../Images/CatBackground.jpg"
import SSBg from "../Images/ssBackground.png"


function BgChangeLL() {
    document.getElementById('slideBg').style.backgroundImage=`url(${LLBg})`;
}
function BgChangeOSF() {
    document.getElementById('slideBg').style.backgroundImage=`url(${OSFBg})`;
}
function BgChangeCat() {
    document.getElementById('slideBg').style.backgroundImage=`url(${CatBg})`;
}
function BgChangeSS() {
    document.getElementById('slideBg').style.backgroundImage=`url(${SSBg})`;
}

export {BgChangeLL, BgChangeCat, BgChangeSS, BgChangeOSF};