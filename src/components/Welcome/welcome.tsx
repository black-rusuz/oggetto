import {memo} from "react";
import {Button, TextField} from "@mui/material";
import "./style.scss";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome__greeting">
        <h1 className="welcome__title">Привет! Вас пригласили пройти тестирование.</h1>
        <div className="welcome__subtitle">Внимание! Время тестирования 1 час. Как только вы приступите, начнётся
          отсчёт.
        </div>
        {/*TODO: Вставить из бэка время*/}
        <div className="welcome__subtitle">Пожалуйста, введите ваши контакты:</div>
      </div>
      <div className="welcome__form">
        <TextField className="welcome__input" color="secondary" id="outlined-basic" label="E-mail" variant="outlined"/>
        <TextField className="welcome__input" color="secondary" id="outlined-basic" label="Пароль" variant="outlined"/>
        <TextField className="welcome__input" color="secondary" id="outlined-basic" label="E-mail" variant="outlined"/>
        <TextField className="welcome__input" color="secondary" id="outlined-basic" label="Пароль" variant="outlined"/>
      </div>
      <div className="welcome__btns">
        <Button className="welcome__btn" variant="contained">Go! <ArrowRightAltIcon/></Button>
      </div>
    </div>
  );
}

export default memo(Welcome);