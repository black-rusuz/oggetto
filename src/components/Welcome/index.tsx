import {memo} from "react";
import {TextField} from "@mui/material";

function Welcome(props: any) {
    return (
        <>
            <h1>Привет! Вас пригласили пройти тестирование.</h1>
            <span>Внимание! Время тестирования 1 час. Как только вы приступите, начнётся отсчёт.</span>
            <span>Пожалуйста, введите ваши контакты:</span>
            <TextField className="auth__input" color="secondary" id="outlined-basic" label="E-mail" variant="outlined" />
            <TextField className="auth__input" color="secondary" id="outlined-basic" label="Пароль" variant="outlined" />
            <TextField className="auth__input" color="secondary" id="outlined-basic" label="E-mail" variant="outlined" />
            <TextField className="auth__input" color="secondary" id="outlined-basic" label="Пароль" variant="outlined" />
        </>
    );
}

export default memo(Welcome);