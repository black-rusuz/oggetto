import {memo, useState} from "react";
import "./style.scss";

function TaskWithVariants() {

  return (
    <form action="" className="task-with-variants">

      <div className="task-with-variants__item">
        <label className="task-with-variants__label">
          <input type="radio" name="radio"/>
          Test 1
        </label>
      </div>

      <div className="task-with-variants__item">
        <label className="task-with-variants__label">
          <input type="radio" name="radio"/>
          Test 2
        </label>
      </div>

      <div className="task-with-variants__item">
        <label className="task-with-variants__label">
          <input type="radio" name="radio"/>
          Test 3
        </label>
      </div>

      <div className="task-with-variants__item">
        <label className="task-with-variants__label">
          <input type="radio" name="radio"/>
          Test 4
        </label>
      </div>

    </form>
  )
}

export default memo(TaskWithVariants);