import {memo} from "react";
import "./style.scss";

function TaskWithVariants() {
  return (
    <form action="" className="task-with-variants">
      <label className="task-with-variants__label">
        <input type="radio" name="radio"/>
        Test 1
      </label>

      <label className="task-with-variants__label">
        <input type="radio" name="radio"/>
        Test 2
      </label>
    </form>
  )
}

export default memo(TaskWithVariants);