import * as React from "react";
import { TopNav } from "./TopNav";
import {
    BrowserRouter as Router,
    Route,
    HashRouter,
    Link
} from "react-router-dom";

export class Home extends React.Component<any, any> {
    render() {
        return <h1>Home</h1>;
    }
}

export class Report extends React.Component<any, any> {
    render() {
        return <h1>Report</h1>;
    }
}

export class Analytics extends React.Component<any, any> {
    render() {
        return <h1>Analytics</h1>;
    }
}

export class Main extends React.Component<any, any> {
    render() {
        return <HashRouter>
            <div>
                <TopNav />
                <div className="container-fluid">
                    <br />
                    <div className="row">
                        <div className="col-sm-3 col-md-2 sidebar">
                            <ul className="nav nav-sidebar">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/reports">Reports</Link></li>
                                <li><Link to="/analytics">Analytics</Link></li>
                                <li><Link to="/reports">Reports</Link></li>
                                <li><Link to="/analytics">Analytics</Link></li>
                            </ul>
                        </div>
                        <div className="col-sm-9 col-md-10">
                            <Route exact path="/" component={Home} />
                            <Route path="/reports" component={Report} />
                            <Route path="/analytics" component={Analytics} />
                        </div>
                    </div>
                </div>
            </div>
        </HashRouter>;
    }
}