import {memo} from "react";

function Dashboard(props: any) {
    return (
        <>
            <header>
            </header>
            <main>
                {props.children}
            </main>
            <footer>
            </footer>
        </>
    );
}

export default memo(Dashboard);
