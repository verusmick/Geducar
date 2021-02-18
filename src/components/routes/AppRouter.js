import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
} from "react-router-dom";
import { Comments } from "../comments/Comments";
import { Posts } from "../posts/Posts";
import { Users } from "../users/Users";

export const AppRouter = () => {    
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/users" component={Users} />
                    <Route exact path="/posts/:userId" component={Posts} />
                    <Route exact path="/comments/:postId" component={Comments} />
                    <Redirect to="/users" />
                </Switch>
            </div>
        </Router>
    );
}
