import React, {memo} from "react";
import Logo from "@components/Logo/logo";
import "./style.scss"
import Tests from "@assets/images/icons/tests.svg"
import People from "@assets/images/icons/people.svg"
import Point from "@assets/images/icons/point.svg"
import Exit from "@assets/images/icons/exit.svg"

function Dashboard(props: any) {
    return (
        <div className="dashboard__wrapper">
            <header className="dashboard__header">
                <Logo/>
                <span className="dashboard__title">{props.userName}</span>
            </header>
            <div className="dashboard__content">
                <aside className="dashboard__aside">
                    <nav>
                        <ul>
                            <li><a><img src={Tests}/>Тесты</a></li>
                            <li><a><img src={Point}/>Задания</a></li>
                            <li><a><img src={People}/>Кандидаты</a></li>
                        </ul>
                    </nav>
                    <a>Выйти<img src={Exit}/></a>
                </aside>
                <main className="dashboard__main">
                </main>
            </div>
            <footer>
            </footer>
        </div>
    );
}

export default memo(Dashboard);
