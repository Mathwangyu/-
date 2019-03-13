import React, {Component} from 'react' 
import '@/components/kinds/kinds'
import {Link} from 'react-router-dom'
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile'


class Com extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  componentDidMount () {
    console.log(this)
  }
  onChange  (value)  {
    this.setState({ value });
  };
  clear ()  {
    this.setState({ value: '' });
  };
  handleClick  () {
    this.manualFocusInst.focus();
  }

  render() {
    return(
      <div className="content">
      <div className="TalionNav-secondary">
        <div className="sea">
          <Link to='/'>豆瓣</Link>
          <div className="ss">
          <SearchBar
            value={this.state.value}
            placeholder="Search"
            onSubmit={value => this.props.history.push({pathname:'/searchfilm',state:{value}})}
            onClear={value => console.log(value, 'onSubmit')}
            onFocus={() => console.log('onFocus')}
            onBlur={() => console.log('onBlur')}
            onCancel={() => console.log('onCancel')}
            showCancelButton
            onChange={this.onChange.bind(this)}
          />
          </div>
          
        </div>
        <ul>
          <li>
            <div>
              <Link to="/" target="_parent" className="a1">
                <strong>电影</strong>
                <span>影院热映</span>
              </Link>
              <Link to="/" target=""className="a2">
                <strong>同城</strong>
                <span>周末活动</span>
              </Link>
              <Link to="/detail/reade" target=""className="a3">
                <strong>阅读</strong>
                <span>电子书</span>
              </Link>
              <Link to="/" target="_parent"className="a4">
                <strong>广播</strong>
                <span>友邻动态</span>
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="/" target="_parent"className="a5">
                <strong >电视</strong>
                <span>正在热播</span>
              </Link>
              <Link to="/" target="_parent"className="a6">
                <strong >小组</strong>
                <span>志趣相投</span>
              </Link>
              <Link to="/" target="_parent"className="a7">
                <strong >游戏</strong>
                <span>虚拟世界</span>
              </Link>
              <Link to="/detail/fm" target="_parent"className="a8">
                <strong >FM</strong>
                <span>红心歌单</span>
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="/" target="_parent"className="a9">
                <strong >图书</strong>
                <span>畅销排行</span>
              </Link>
              <Link to="/" target="_parent"className="a10">
                <strong >音乐</strong>
                <span>新碟榜</span>
              </Link>
              <Link to="/" target="_parent"className="a11">
                <strong >应用</strong>
                <span>玩手机</span>
              </Link>
              <Link to="/detail/good" target="_parent"className="a12">
                <strong >豆品</strong>
                <span>生活美学</span>
              </Link>
            </div>
          </li>
        </ul>
        <div className="navBottom">
          <div className="nav-item">
            <Link  className="toLogin" to="">登陆豆瓣</Link>
          </div>
          <div className="nav-item">
            <Link className="toPC" to="/">使用桌面版</Link>
            <Link className="toApp" to="/">使用豆瓣App</Link>
          </div>
        </div>
      </div>
      </div>
    )
  }
}



export default Com
