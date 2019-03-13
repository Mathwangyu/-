import React, { Component } from 'react'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import '@/components/detailbook/detailb'
import Detail from '@/components/detailbook/del'
import {Link} from 'react-router-dom'

import MN from '@/api/detailbook/mulu';
class Com extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [],
      url: '',
      price: '',
      title: ''
    }
  }

  componentDidMount () {
    console.log(this.props.location)
    const {location} = this.props
    let ul;
    let pic;
    let til;
    if (location.state&&location.state.url&&location.state.price&&location.state.title) {
      ul = location.state.url;
      pic = location.state.price;
      til = location.state.title;
      sessionStorage.setItem('url', ul)
      sessionStorage.setItem('price', pic)
      sessionStorage.setItem('title', til)
    } else {
      ul = sessionStorage.getItem('url')
      pic = sessionStorage.getItem('price')
      til = sessionStorage.getItem('title')
    }
    this.setState({
      url: ul,
      price: pic,
      title: til
    })
  }


    render () {
     
      const tabs = [
        { title: <Badge>详情</Badge> },
        { title: <Badge>目录</Badge> },
        { title: <Badge>留言</Badge> },
      ];
        return (
            <div className = "content">
              <div className="log">
                <img src={this.state.url} />
              </div>
              <Tabs tabs={tabs}
                initialPage={1}
                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
              >
                <div>
                  <Detail id={this.state.title} price={this.state.price} />
                </div>
                <div>
                  <MN list = {this.state.list}  />
                </div>
                <div className="lvmsg" >
                  {
                    <div className="msg">
                      <h2>精选留言</h2>
                      <ul>
                        <li>
                          <div className="t">
                            <img src={require('./images/head1.png')} />
                            <p>
                              Arthur Schopenh
                              <span>1月27日</span>
                            </p>
                            <div className="zan">
                              <img src={require('./images/zan.png')} />
                              <span>3</span>
                            </div>
                          </div>
                          <div className="m">
                          在企业（公司）当中我是一名员工，有些对应的位置和职位等，在家庭中是父亲或者子女也有相应的责任，在国家中是位公民也有着对应的责任等等，在这颗星球上身为人类也扮演着不同的角色；不同的角色越多需要的精力越多，但与自我相处的时候是那么的短暂，不过对于孤独与死亡这份重担每个人承受的能力都有限，所以社交是刚性需求，只不过当人步入老年这份需求得不到很好的满足，就不得不去面对自我和死亡，我们总归会回到自我；总归会回到上帝之城。。。
                          </div>
                          <div className="b">
                            <Link to="" className="worry">焦虑的根源何在？ ></Link>
                          </div>
                        </li>
                        <li>
                          <div className="t">
                            <img src={require('./images/head1.png')} />
                            <p>
                              米缸
                              <span>2月26日</span>
                            </p>
                            <div className="zan">
                              <img src={require('./images/zan.png')}  />
                              <span>0</span>
                            </div>
                          </div>
                          <div className="m">
                            为雷老师讲课时充沛的激情点赞
                          </div>
                          <div className="b">
                            <Link to="" className="worry">焦虑的根源何在？ ></Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  }
                </div>
              </Tabs>
              <WhiteSpace />
              <div className="footer">
                <div className="lister">
                  <img src={require('./images/播放.png')}  alt=""/>
                  <span>
                    试听
                  </span>
                </div>
              <div className="alone">单独订购{this.state.price}元</div>
              
                <Link to={{pathname:'/pay', state:{title: this.state.title, price: this.state.price, sall: this.state.price * .9}}} className="sells">打包购买9折</Link>
              </div>
            </div>
        )
    }

}

export default Com
