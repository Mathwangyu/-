import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import '@/components/user/user'
class Com extends Component {
    goPageFn(type){
        console.log(this);
        this.props.history.push('/userapp/'+ type);
    }

    render () {
        return (
            <div className = "content">
                {/*<Link to="/userapp/login">登录</Link>*/}
                {/*<Link to="/userapp/register">注册</Link>*/}
                {/* <button onClick={ this.goPageFn.bind(this,'login')}>登录</button>
                <button onClick={ this.goPageFn.bind(this,'register')}>注册</button> */}
                <div className="userpage">
                  <div className="top">
                    <div className="tou">
                      <img src={require('./images/2.png')} />
                    </div>
                    <div className="nickname">
                      <div className="person">
                        <p>忘语语</p>
                        <div className="num">
                          <span>ID:101951945</span>
                          <a>个人主页 ></a>
                        </div>
                      </div>
                      <div className="active">
                        <span>关注 0</span>
                        <span>被关注 0</span>
                      </div>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <img src={require('./images/3.png')} />
                      <span>喜欢</span>
                    </li>
                    <li>
                      <img src={require('./images/4.png')} />
                      <span>日记</span>
                    </li>
                    <li>
                      <img src={require('./images/5.png')} />
                      <span>相册</span>
                    </li>
                    <li>
                      <img src={require('./images/6.png')} />
                      <span>我的广播</span>
                    </li>
                    <li>
                      <img src={require('./images/7.png')} />
                      <span>电影.电视</span>
                    </li>
                    <li>
                      <img src={require('./images/8.png')} />
                      <span>读书</span>
                    </li>
                    <li>
                      <img src={require('./images/9.png')} />
                      <span>音乐</span>
                    </li>
                    <li>
                      <img src={require('./images/10.png')} />
                      <span>我的豆列</span>
                    </li>
                    <li>
                      <img src={require('./images/11.png')} />
                      <span>同城活动</span>
                    </li>
                  </ul>
                </div>
            </div>
        )
    }

}

export default Com
