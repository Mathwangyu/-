import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'
import api from '@/api/good'
import {Link} from 'react-router-dom'
import "@/components/good/good"

class Com extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [],
      banner: [],
      name: '',
      name1: '',
      active: []
    }
  }

  componentDidMount () {
    api.requestBannerData().then(data => {
      console.log(data[0])
      this.setState({
        banner: data[0].data[0].data.banner,
        list: data[0].data[3].data.product_items,
        name: data[0].data[3].title,
        active: data[0].data[2].data.topic_list,
        name1: data[0].data[2].title
      })
    })
  }

  render () {
      return (
        <div className="content">
          <div className = "goods">
            <Carousel
              autoplay={true}
              infinite
              // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
              // afterChange={index => console.log('slide to', index)}
            >
              {this.state.banner.map((item, index)=> (
                <a
                  key={index}
                  href=""
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={item.image}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
              ))}
            </Carousel>
            <div className="new">
              <h2>{this.state.name}</h2>
              <div className="tal">
              {
                this.state.list.map((item, index) => (
                  <Link to='/' key={index} className="lie">
                    <img src = {item.image} />
                    <p>{item.title}</p>
                    <span>{item.desc}</span>
                    <div className="price">
                    ¥<span>{item.price_range}</span>
                    </div>
                  </Link>
                ))
              }
              </div>
            </div>
            <div className="active">
              <h2>{this.state.name1}</h2>
              <div className="aci">
                {
                  this.state.active.map((item, index) => (
                    <Link to="/" key={index} className="achot">
                      <img src={item.img} />
                      <div className="con">
                        <p>{item.title}</p>
                        <span>{item.desc}</span>
                      </div>
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
