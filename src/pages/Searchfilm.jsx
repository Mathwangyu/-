import React, { Component } from 'react'
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile'
import api from '@/api/searchfilm'
import "@/components/searchfilm/sfilm"

class Com extends Component {

  constructor (props) {
    super(props)
    this.state = {
      list : [],
      name : this.props.location.state.value,
      value: ''
    }
  }

  componentDidMount () {
    console.log(this.props.location)
    api.requestData(this.state.name).then(data => {
      console.log(data)
      this.setState({
        list: data
      })
    })
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


    render () {
        return (
          <div className = "content">
            <SearchBar
              value={this.state.value}
              placeholder={this.state.name}
              onSubmit={value =>this.props.history.push({pathname:'/searchfilm',state:{id: value}})}
              onClear={value => console.log(value, 'onSubmit')}
              onFocus={() => console.log('onFocus')}
              onBlur={() => console.log('onBlur')}
              onCancel={() => console.log('onCancel')}
              showCancelButton
              onChange={this.onChange.bind(this)}
            />
            <div className="topsf">
              <div className="background">
              
                <img src={this.state.list.cover} />
              </div>
              <p>电影名称：{this.state.list.title}</p>
              <span>评分：{this.state.list.rate}</span>
            </div>
          </div>
        )
    }

}

export default Com
