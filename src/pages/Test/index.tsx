import {memo} from "react";
import User from "@containers/User/User";
import Welcome from "@components/Welcome/welcome";
import Ending from "@components/Ending/ending";
import Task from "@components/Task";

function Test() {
    return(
        <User testHeader={"Тест на пидора"}>
            {/*<Welcome/>*/}
            <Task/>
            {/*<Ending/>*/}
        </User>
    );
}

export default memo(Test);
