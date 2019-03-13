import React, { Component } from 'react'
import '@/components/pay/pay'
import { Checkbox, Radio, List } from 'antd-mobile';

const CheckboxItem = Checkbox.CheckboxItem;
const RadioItem = Radio.RadioItem;

class Com extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // name : this.props.location.state.title,
      // price : this.props.location.state.price.toFixed(2),
      // sall : this.props.location.state.sall.toFixed(2)
      name: '',
      price: 0,
      sall: 0,
      value: 1
    }
  } 
  onChange  (value)  {
    console.log('checkbox'  + value);
    this.setState({
      value,
    });
  };

  componentWillMount () {
    
    const {location} = this.props;
    let na;
    let prc;
    let sal;
    if (location.state && location.state.title&&location.state.price&&location.state.sall){
      na = location.state.title;
      prc = location.state.price.toFixed(2);
      sal = location.state.sall.toFixed(2);
      sessionStorage.setItem('a', na)
      sessionStorage.setItem('b', prc)
      sessionStorage.setItem('c', sal)
    } else {
      na = sessionStorage.getItem('a')
      prc = sessionStorage.getItem('b')
      sal = sessionStorage.getItem('c')
    }
    this.setState({
      name: na,
      price: prc,
      sall: sal
    },() => console.log(this.state))
    
  }

    render () {
      return (
          <div className = "content">
            <div className="cont">
            <div className="detail">
              <div className="name">
                <p>{this.state.name}</p>
                <span>137期促销价{this.state.sall}元(原价{this.state.price}元)</span>
              </div>
              <div className="pic">
                {this.state.sall}元
                <span>{this.state.price}元</span>
                
              </div>
            </div>
            <div className="choise">
              <div className="coupon">
                <p>优惠券</p>
                <span>暂无可用的优惠券 > </span>
              </div>
              <div className="dan">
              ¥<h1>{this.state.sall}</h1>
              </div>
              <div className="aways">
                <div className="aa">选择支付方式</div>
                <List>
                <RadioItem key="1" checked={this.state.value === 1} onChange={() => this.onChange(1)}>
                <div className="wei">
                  <div className="info">
                    <div className="log">
                      <img src={require('./images/weixin.svg')} alt="" />
                    </div>
                    <span>微信</span>
                  </div>
                  
                </div>
                </RadioItem>
                <RadioItem key="2" checked={this.state.value === 2} onChange={() => this.onChange(2)}>
                <div className="aply">
                  <div className="info">
                    <div className="log">
                    <img src={require('./images/zhifubao.svg')} alt="" />
                    </div>
                    <span>支付宝</span>
                  </div>
                  
                </div>
                </RadioItem>
                </List>
              </div>
              <div className="sure"><span>确认支付</span></div>
              <div className="bo">
              <Checkbox className=""></Checkbox>
                <span>同步到豆瓣广播</span>
              </div>
            </div>
            </div>
            <div className="know">
              <p>支付须知</p>
              <ul>
                <li>1.您正在购买豆瓣时间付费专栏，购买成功后有权限消费该专栏的所有内容。</li>
                <li>2.豆瓣时间付费专栏只支持使用当前登录帐号在豆瓣 App 内消费，请将 App 更新到最新版本。</li>
                <li>3.购买成功后，不支持退款或者转赠他人。</li>
                <li>4.豆瓣拥有豆瓣时间所有版权，请勿录制或传播盗版。</li>
              </ul>
            </div>
          </div>
      )
    }

}

export default Com
