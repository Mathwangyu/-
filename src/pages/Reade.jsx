import React, { Component } from 'react'
import api from '../api/reade';
import {Link} from 'react-router-dom'
import '@/components/reade/reade'

class Com extends Component {

  constructor (props) {
    super(props)
    this.state = {
      list : [],
      kinds: []
    }
  }
  
  componentDidMount () {
    api.requestData().then(data => {
      console.log(data)
      this.setState({
        list: data
      })
    })
    api.requestListData().then(data => {
      console.log(data)
      this.setState({
        kinds: data
      })
    })
  }

    render () {
        return (
            <div className = "reade">
              <div className="header">
                <p><a href='#/home'>豆瓣阅读</a></p>
                <span>优质类型小说品台</span>
              </div>
              <div className="cont">
                <h1>连载小说</h1>
                {
                  this.state.list.map((item, index) => {
                    const alt = item.columns.map((itm, indx) => (
                      <Link to='' key={indx} className="book">
                        <img src={itm.cover_url} />
                        <div className="til" style={{"-webkit-box-orient":"vertical"}}>{itm.title}</div>
                        <span>{itm.author}</span>
                        <p>{itm.subscriber_num} 人订阅</p>
                      </Link>
                    ))
                    return (
                      <div className="del" key={index}>
                      <h2>{item.name}</h2>
                      <div className="tol">{alt}</div>
                      </div>
                    )
                  })
                }
                <div className="classify">
                  <h2>连载分类</h2>
                  <div className="kind">
                    {
                      this.state.kinds.map((item, index) => (
                        <Link to='/' key={index} className="lei">
                          {item.name}
                        </Link>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
        )
    }

}

export default Com
