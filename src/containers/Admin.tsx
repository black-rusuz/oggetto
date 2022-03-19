import {memo} from "react";

function Admin(props: any) {
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

export default memo(Admin);
