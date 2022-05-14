import {memo} from "react";
import User from "@containers/User/User";
import Welcome from "@components/Welcome/welcome";

function TestWelcome() {
    return(
        <User testHeader={"Тест на хорошего человека"}>
            <Welcome/>
        </User>
    );
}

export default memo(TestWelcome);
