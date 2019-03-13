import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import '@/components/userapp/userapp'
class Com extends Component{
    render(){
        return(
            <div className = "box">
               <div className="userapph">
                 <h1>登录豆瓣</h1>
                 <div className="agree">
                   登录注册表示同意
                   <Link to="">豆瓣使用协议、隐私政策</Link>
                 </div>
               </div>
                <Switch>
                    <Route path='/userapp/login' component={ Login }/>
                    <Route path='/userapp/register' component={ Register }/>
                </Switch>
            </div>
        )
    }
}

export default Com