import {memo} from "react";
import "./style.scss"

interface ITaskProps {
    id: number,
    title: string,
    description: string,
    variant_1?: string,
    variant_2?: string,
    variant_3?: string,
    variant_4?: string,
    answer?: string
}

function Task(props: ITaskProps) {
    return (
        <>
            <h2>props.description</h2>
            {/*4 варианта ответа*/}
        </>
    );
}

export default memo(Task);
