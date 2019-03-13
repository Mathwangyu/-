import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Goods from '@/pages/Goods';
import Reade from '@/pages/Reade';
import FM from '@/pages/FM';

class Com extends Component{
    render(){
        return(
          <div className="">
          <Switch>
          <Route path='/detail/good' component={ Goods }/>
          <Route path='/detail/reade' component={ Reade }/>
          <Route path='/detail/fm' component={ FM }/>
          </Switch>
            
          </div>
            
        )
    }
}

export default Com