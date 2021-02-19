import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
    Link
} from "react-router-dom";
import { Comments } from "../comments/Comments";
import { Posts } from "../posts/Posts";
import { Users } from "../users/Users";

import img from '../../assets/logo.png'

export const AppRouter = () => {
    return (
        <Router>

            <div>
                <nav className="navbar navbar-light" style={{ backgroundColor: '#fc787f' }}>
                    <Link className="navbar-brand" to={{pathname:'/'}} >
                        <img src={img} width="100" height="30" className="d-inline-block align-top" alt="" />
                    </Link>
                    <span className="ged-navTitle">
                        ReactJS Test
                        </span>
                </nav>
                <div className="ged-container">
                    <Switch>
                        <Route exact path="/users" component={Users} />
                        <Route exact path="/posts/:userId" component={Posts} />
                        <Route exact path="/comments/:postId" component={Comments} />
                        <Redirect to="/users" />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}
