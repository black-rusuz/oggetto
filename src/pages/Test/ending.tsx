import {memo} from "react";
import User from "@containers/User/User";
import Ending from "@components/Ending/ending";

function TestEnding() {
    return(
        <User testHeader={"Тест на хорошего человека"}>
            <Ending/>
        </User>
    );
}

export default memo(TestEnding);
