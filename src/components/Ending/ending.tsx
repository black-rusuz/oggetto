import {memo} from "react";
import "./style.scss";
import Oggetto from "../../assets/images/bigLogo.png";

function Ending() {
  return (
    <div className="ending">
      <div className="ending__title">Тестирование завершено, спасибо за участие!</div>
      <div className="ending__subtitle">В ближайшее время сотрудник компании даст вам фидбэк.</div>
      <img className="ending__logo" src={Oggetto} alt="Oggetto Logo"/>
    </div>
  );
}

export default memo(Ending);