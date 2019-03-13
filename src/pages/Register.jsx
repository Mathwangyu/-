import React, { Component } from 'react'
import { InputItem, Toast, Button } from 'antd-mobile';
import {Link} from 'react-router-dom'
import '@/components/Lcon/Lcon'
import api from '@/api/login'

class Com extends Component {

  constructor (props) {
    super(props);
    this.state = {
      haserror: false,
      value: '',
      hasPasswordError: false,
      passwordvalue: ''
    }
  }

  onErrorClick () {
    if (this.state.hasError) {
      Toast.info('请输入正确格式的手机号码');
    }
  }

  onPasswordErrorClick () {
    if (this.state.hasError) {
      Toast.info('请输入正确格式的密码');
    }
  }
  
  onChange (value) {
    if (value.replace(/\s/g, '').length < 11) {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        hasError: false,
      });
    }
    this.setState({
      value,
    });
    console.log(this.state.value)

  }

  onPasswordChange (passwordvalue) {
    if (passwordvalue.replace(/\s/g, '').length < 6) {
      this.setState({
        hasPasswordError: true,
      });
    } else {
      this.setState({
        hasPasswordError: false,
      });
    }
    this.setState({
      passwordvalue,
    });
    console.log(this.state.value)
  }

  register (value, password) {
    console.log( value, password)
    api.requestRgData(value, password).then(data => {
      console.log(data)
      if (data == 1) {
        Toast.info('注册成功')
        setTimeout(() => {
          this.props.history.push({pathname:'/userapp/login'})
        },2000)
      } else if (data == -1) {
        Toast.info('用户名已存在')
      } else if (data == 0) {
        Toast.info('注册失败')
      } else {
        Toast.info('服务器错误')
      }
    })
  }

  render () {
    
      return (
          <div className = "rgcontent">
            <InputItem
              type="text"
              placeholder="请输入手机号"
              error={this.state.hasError}
              onErrorClick={this.onErrorClick}
              onChange={this.onChange.bind(this)}
              value={this.state.value}
              
            >手机号</InputItem>
            <InputItem
              type="password"
              placeholder="请输入密码"
              error={this.state.hasPasswordError}
              onErrorClick={this.onPasswordErrorClick.bind(this)}
              onChange={this.onPasswordChange.bind(this)}
              value={this.state.passwordvalue}
              
            >密码</InputItem>
            <Button type="primary" className="button" onClick={this.register.bind(this, this.state.value, this.state.passwordvalue)} >注册</Button>
            <div className="else">
              
              <Link to='/userapp/login' className="rg">账号密码登录</Link>
            </div>
            <Link to='' className="del"><img src={require('./images/删除.png')}  alt="" /></Link>
            <div className="outher">
              <p>第三方登录</p>
              <div className="pic">
                <img src={require('./images/bol.svg')}  alt=""/>
                <img src={require('./images/wei.svg')}  alt=""/>
              </div>
            </div>
          </div>
      )
  }
}

export default Com
