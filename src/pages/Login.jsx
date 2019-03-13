import React, { Component } from 'react'
import { InputItem, Toast, Button } from 'antd-mobile';
import {Link} from 'react-router-dom'
import '@/components/login/login'
import api from '@/api/login'

class Com extends Component {

  constructor (props) {
    super(props);
    this.state = {
      haserror: false,
      value: '12345678901',
      hasPasswordError: false,
      passwordvalue: '123456'
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

  login (value, password) {
    console.log( value, password)
    api.requestData(value, password).then(data => {
      console.log(data)
      if (data == 1) {
        Toast.info('登录成功')
        setTimeout(() => {
          this.props.history.push({pathname:'/user'})
        },2000)
      } else if (data == -1) {
        Toast.info('密码错误')
      } else if (data == 0) {
        Toast.info('登录失败')
      } else {
        Toast.info('没有该用户')
      }
    })
  }

  render () {
    let type = ''
    let disabled = true
    if (this.state.hasError === false && this.state.hasPasswordError === false && this.state.value.length > 0 && this.state.passwordvalue.length > 0) {
      type = 'primary';
      disabled = false
    } 
      return (
          <div className = "logincontent">
            <InputItem
              type="text"
              placeholder="请输入手机号"
              error={this.state.hasError}
              onErrorClick={this.onErrorClick}
              onChange={this.onChange.bind(this)}
              value={this.state.value}
              
            >+86 <span>|</span></InputItem>
            <InputItem
              type="password"
              placeholder="请输入密码"
              error={this.state.hasPasswordError}
              onErrorClick={this.onPasswordErrorClick.bind(this)}
              onChange={this.onPasswordChange.bind(this)}
              value={this.state.passwordvalue}
              
            ></InputItem>
            <Button type={ type } disabled = { disabled } className="button" onClick={this.login.bind(this, this.state.value, this.state.passwordvalue)} >登录</Button>
            <div className="else">
              <Link to='' className="fg">忘记密码 ？</Link>
              <Link to='/userapp/register' className="rg">去注册</Link>
            </div>
            <Link to='' className="del"><img src={require('./images/删除.png')} /></Link>
          </div>
      )
  }
}

export default Com
