import React from 'react'
import routesConfig from './router';
import { Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
export default function MyRouter() {
    function renderRoutes(routesConfig) {
        return (
            // <HashRouter>
                <Switch>
                    {
                        routesConfig.map((item) => {
                            const { path, exact, children, redirect, component: Comp } = item;
                            if (redirect) return <Redirect key={`${path}-${redirect}`} from={path} to={redirect} exact />
                            if (Array.isArray(children) && children.length) {
                                return <Route
                                    key={path}
                                    path={path}
                                    exact={exact}
                                    render={(props) => <Comp {...props}>{renderRoutes(children)}</Comp>} />
                            }
                            return <Route key={path} path={path} exact={exact} component={Comp} />
                        })
                    }
                </Switch>
            // </HashRouter>
        )
    }
    return (
        <>
            <BrowserRouter>{renderRoutes(routesConfig)}</BrowserRouter>
        </>
    )
}
