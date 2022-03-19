import {memo} from "react";
import Logo from "@components/Logo/logo";
import "./style.scss"

function User(props: any) {
    return (
        <div className="userPage__wrapper">
            <header className="userPage__header">
                <Logo/>
                <span className="userPage__title">{props.testHeader}</span>
            </header>
            <main className="userPage__main">
                {props.children}
                //TODO: Сюды пиздато пихать кастомных детей
            </main>
            <footer className="userPage__footer">
                //TODO: Сюды таймер ебануть как-то
            </footer>
        </div>
    );
}

export default memo(User);
