import {memo} from "react";
import "./style.scss"
import {Button, TextField} from "@mui/material";

function Auth() {
    return (
        <div className="auth">
            <h1 className="auth__header">Добро пожаловать в систему тестирования!</h1>
            <span className="auth__comment">Пожалуйста, авторизируйтесь</span>
            <TextField className="auth__input" color="primary" id="outlined-basic" label="E-mail" variant="outlined" />
            <TextField className="auth__input" id="outlined-basic" label="Пароль" variant="outlined" />
            <Button className="auth__submit">Войти</Button>
        </div>
    );
}

export default memo(Auth);