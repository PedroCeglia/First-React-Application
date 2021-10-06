import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../Home'
import Contact from '../Contact'

function Rotas(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/contact' component={Contact}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas