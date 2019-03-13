import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
import '@/components/film/filmUI'
import { PullToRefresh } from 'antd-mobile';
class Com extends Component {

  constructor (props) {
    super(props)
    this.state = {
      refreshing: true,
      data: [],
      page: 18,
      loading: true
    }
  }

  

  componentDidMount () {
    this.props.requestData(this.state.page)
  }

  render () {
      return (
        <div className = "content">
          <div className="filmpage">
            <p className="title">影院热映</p>
            <div className="hot">
              <PullToRefresh
                  className = "updata"
                  
                  indicator={ this.state.down ? {deactivate: '下拉刷新'} : {deactivate: '上拉加载'} }
                  direction={this.state.down ? 'down' : 'up'}
                  refreshing={this.state.refreshing}
                  onRefresh={() => {
                    console.log(this.state.page)
                    let page = this.state.page
                    this.setState({ refreshing: true, page: page + 18 },
                      () => {
                        this.props.requestData(this.state.page)
                      }
                      );
                    
                    setTimeout(() => {
                      this.setState({ refreshing: false });
                    }, 1000);

                  } }
                >
                  {
                      this.props.list.map((item, index) => {
                        return (
                          <Link to='/' key = {index}>
                            <div className="list">
                              <img src={item.cover} alt={item.alt}/>
                              <p>{item.title}</p>
                              <div className="fen">
                                {item.rate}
                              </div>
                            </div>
                          </Link>
                        )
                      })
                    }
                </PullToRefresh>
            </div>
            </div>
          </div>
        
      )
  }

}

export default Com
