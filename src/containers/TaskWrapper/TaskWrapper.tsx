import {memo} from "react";
import "./style.scss"
import Task from "@components/Task";

function TaskWrapper(props: any) {
    return (
        <>
            <h1>Вопрос {props.currentTask} из {props.tasksCount}</h1>
            <Task id={1} title={"XYU"} description={"Пикни хуйню"}/>
            {/*<button-prev> и <next>*/}
        </>
    );
}

export default memo(TaskWrapper);
