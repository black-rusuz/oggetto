import {memo} from "react";
import User from "@containers/User/User";
import Welcome from "@components/Welcome";

function Test() {
    return(
        <User testHeader={"Тест на пидора"}>
            <Welcome/>
            {/*или components/task*/}
            {/*или components/ending (не сделал)*/}
        </User>
    );
}

export default memo(Test);
