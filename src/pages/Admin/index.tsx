import {memo} from "react";
import Dashboard from "@containers/Dashboard/Dashboard";

function Admin() {
    return (
        <Dashboard userName={"Анна Белюченко"}/>
    );
}

export default memo(Admin);
