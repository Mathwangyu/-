import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import Home from '@/pages/Home';
import Kind from '@/pages/Kind';
import Cart from '@/pages/Cart';
import User from '@/pages/User';
import Film from '@/pages/Film';
import Book from '@/pages/Book';
import Search from '@/pages/Search';
import Searchfilm from '@/pages/Searchfilm';
import Detailbook from '@/pages/Detailbook';
import Pay from '@/pages/Pay';
class App extends Component {

  render () {
    return (
      <div className = "box">
        <header className = "header">
          <div className="top">
          <Link to="/">
            <h1>豆瓣</h1>
          </Link>
          <nav>
            <Link to='/search' className="serh">
              <img src={require('./../pages/images/1.png')} />
            </Link>
            <Link to="/" className="open">打开豆瓣app</Link>
          </nav>
          </div>
        </header>
        <Switch>
          <Route path="/home" component = { Home } />
          <Route path="/kind" component = { Kind } />
          <Route path="/cart" component = { Cart } />
          <Route path="/user" component = { User } />
          <Route path="/film" component = { Film } />
          <Route path="/book" component = { Book } />
          <Route path="/detailbook" component = { Detailbook } />
          <Route path="/search" component = { Search } />
          <Route path="/searchfilm" component = { Searchfilm } />
          <Route path="/pay" component = { Pay } />
          <Redirect path= "/" to="/home"/>
        </Switch>
        {/* <footer className = "footer">
          <ul>
            <NavLink to = "/home">首页</NavLink >
            <NavLink to = "/kind">分类</NavLink >
            <NavLink to = "/cart">购物车</NavLink >
            <NavLink to = "/user">我的</NavLink >
          </ul>
        </footer> */}
      </div>
    )
  }
}

export default App
