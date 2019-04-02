import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Currencies} from "../Currencies";
import {About} from "../About";

export const Main = () => (

    <main className="main current-page__main">
        <Switch>
            <Route exact path='/' component={Currencies}/>
            <Route path='/about' component={About}/>
        </Switch>
    </main>

);
