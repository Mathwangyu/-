import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Search from '@/pages/Search';

class Com extends Component{
    render(){
        return(
          <div className="box">
            <Route path='/search' component={ Search }/>
          </div>
            
        )
    }
}

export default Com