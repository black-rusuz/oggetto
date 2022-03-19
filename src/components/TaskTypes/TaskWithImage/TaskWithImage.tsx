import "./styles.scss";
import {memo} from "react";
import Img from "../../../assets/images/testImage.jpg"
import {TextField} from "@mui/material";

function TaskWithImage() {
  return (
    <div className="task-with-image">

      <div className="task-with-image__img">
        <img src={Img} alt=""/>
      </div>

      <TextField className="task-with-image__answer"
                 label="Комментарий"
                 multiline={true}
                 minRows={6}
                 maxRows={12}
      />

    </div>
  )
}

export default memo(TaskWithImage);