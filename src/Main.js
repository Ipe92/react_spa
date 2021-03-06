import React, { Component } from "react";
import { Provider } from "react-redux";
import { Route, NavLink, HashRouter } from "react-router-dom";

import Json from "./Json";
import Koti from "./Koti";
import Tarina from "./containers/Tarinat";
import Yhteys from "./containers/Yhteys/Yhteys";

import store from "./store";
import MoniVeto from "./containers/MoniVeto";
import Birds from "./containers/Birds";
import Responsive from "./containers/Responsive/Responsive";
import Kartta from "./containers/Kartta/Kartta";
import Treenit from "./containers/Treenit/Treenit";
import Temperatures from "./containers/Temperatures/Temperatures";

class Main extends Component {
    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <div>
                        <h1>Perus single Page Application (SPA)</h1>
                        <ul className="header">
                            <li>
                                <NavLink exact to="/">
                                    Koti
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/tarina">Tarinaa</NavLink>
                            </li>
                            <li>
                                <NavLink to="/birds">Linnut</NavLink>
                            </li>
                            <li>
                                <NavLink to="/yhteys">Yhteys</NavLink>
                            </li>
                            <li>
                                <NavLink to="/moniveto">Moniveto</NavLink>
                            </li>
                            <li>
                                <NavLink to="/responsive">Responsive</NavLink>
                            </li>
                            <li>
                                <NavLink to="/kartta">Kartta</NavLink>
                            </li>
                            <li>
                                <NavLink to="/treenit">Treenit</NavLink>
                            </li>
                            <li>
                                <NavLink to="/temperatures">Temperatures</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Json">Json</NavLink>
                            </li>
                        </ul>
                        <div className="content">
                            <Route exact path="/" component={Koti} />
                            <Route path="/tarina" component={Tarina} />
                            <Route path="/yhteys" component={Yhteys} />
                            <Route path="/moniveto" component={MoniVeto} />
                            <Route path="/birds" component={Birds} />
                            <Route path="/responsive" component={Responsive} />
                            <Route path="/kartta" component={Kartta} />
                            <Route path="/temperatures" component={Temperatures} />
                            <Route path="/treenit" component={Treenit} />
                            <Route path="/json" component={Json} />
                        </div>
                    </div>
                </HashRouter>
            </Provider>
        );
    }
}

export default Main;
