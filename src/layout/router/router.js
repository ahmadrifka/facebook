import React from 'react';
import {BrowserRouter as Route, Switch} from 'react-router-dom';
import SingleLayout from '../single-layout';
import HomeLayout from '../home-layout';
export default function Router(){
    return(
        <div>
            <Switch>
                <Route exact path="/">
                    <SingleLayout/>
                </Route>
                <Route path="/home">
                    <HomeLayout/>
                </Route>

            </Switch>
        </div>
    );
}