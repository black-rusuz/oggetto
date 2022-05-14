import React from "react";
import {Route, Switch} from "react-router-dom";
import {routesConfig} from "@core/config";

import Admin from "../pages/Admin";
import Main from "../pages/StartPage";
import Test from "@pages/Test/test";
import TestEnding from "@pages/Test/ending";
import TestWelcome from "@pages/Test/welcome";

export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Main/>
            </Route>
            <Route exact path={routesConfig.test.findOne()}>
                <Test/>
            </Route>
            <Route exact path={routesConfig.testWelcome.findOne()}>
                <TestWelcome/>
            </Route>
            <Route exact path={routesConfig.testEnding.findOne()}>
                <TestEnding/>
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
