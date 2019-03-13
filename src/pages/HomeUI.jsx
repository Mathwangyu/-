import React, { Component } from 'react'
import List from '@/components/home/List'
import { Carousel } from 'antd-mobile'
import {Link} from 'react-router-dom'
import '@/components/home/homeUI'
import api from '@/api/home'

class Com extends Component {
    constructor(props){
        super(props)
        this.state = {
          list: [],
          imgHeight: 176
        }
    }
    componentDidMount(){
      api.requestData().then(data => {
        console.log(data)
        this.setState({
          list: data
        })
      })
    }

    render () {
        return (
          <div className = "content">
            <div className="page">
            <ul className="top">
              <Link to="/film" className="a">影院热映</Link>
              {/* <Link to="/user" className="a">我的</Link> */}
              <Link to={localStorage.getItem('key')? '/user' : '/userapp/register'} className="a">我的</Link>
              <Link to="/book" className="a">豆瓣时间</Link>
              <Link to="/film" className="a">使用豆瓣App</Link>
            </ul>
            <div className="conthome">
            {
              this.state.list.map((item, index) => {
                const alt = item.works.map(itm => {
                  return (
                    <div className="home1" key={itm.id}>
                      <div className="l">
                      <div className="let">
                        <h3>
                          {itm.title}
                        </h3>
                        <span style={{"-webkit-box-orient": "vertical"}}>{itm.abstract}</span>
                      </div>
                      <img src={itm.cover} />
                      </div>
                      <div className="del">by {itm.author}</div>
                    </div>
                  )
                })
                return (
                  <div key={index}>
                    <h2>{item.name}</h2>
                    {alt}
                  </div>
                )
                
              })
            }
            </div>
            </div>
          </div>
        )
    }

}

export default Com
