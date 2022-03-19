import {memo} from "react";
import logo from "@assets/images/logo.png"
import logo_mono from "@assets/images/logo_mono.png"
import "./style.scss"

function Logo(props: any) {
    return props.isMono
        ? <img className="header__logo" src={logo_mono} alt={"Oggetto logo"}/>
        : <img className="header__logo" src={logo} alt={"Oggetto logo"}/>;
}

export default memo(Logo);