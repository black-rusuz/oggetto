import {memo} from "react";
import User from "@containers/User/User";
import Welcome from "@components/Welcome/welcome";
import Ending from "@components/Ending/ending";

function Test() {
    return(
        <User testHeader={"Тест на пидора"}>
            {/*<Welcome/>*/}
            {/*или components/task*/}
            <Ending/>
        </User>
    );
}

export default memo(Test);
