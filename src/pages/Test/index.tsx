import {memo} from "react";
import User from "@containers/User";

function Test() {
    return(
      <User testHeader={"asdas"}/>
    );
}

export default memo(Test);
