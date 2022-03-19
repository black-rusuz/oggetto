import {Route, Switch} from "react-router-dom";
import {routesConfig} from "@core/config";

import Admin from "../pages/Admin";
import Main from "../pages/StartPage";
import Test from "../pages/Test";

export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Main/>
            </Route>
            <Route exact path={routesConfig.test.findOne()}>
                <Test/>
            </Route>
            <Route exact path={routesConfig.admin.findOne()}>
                <Admin/>
            </Route>

            <Route exact path={routesConfig.productBrowserRoutes.findOne()}>
                {/* <Product /> */}
            </Route>
            <Route exact path={routesConfig.productBrowserRoutes.findOne()}>
                {/* <Product /> */}
            </Route>
        </Switch>
    );
};
