import {memo} from "react";
import Logo from "@components/Logo/logo";
import Auth from "@components/Auth/auth";
import {theme} from "@core/theme/mui";

function Start() {
    return (
        <div style={{background: theme.palette.primary.dark}}>
            <header style={{position: "fixed", padding: "28px 35px"}}>
                <Logo isMono={true}/>
            </header>
            <main style={{height: "100vh", display: "flex", justifyContent: "center"}}>
                <Auth/>
            </main>
        </div>
    );
}

export default memo(Start);
