import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'
import { Link } from 'react-router-dom'
import '@/components/book/bookUI'
import api from '@/api/book'


class Com extends Component {

  constructor (props) {
    super(props);
    this.state = {
      num: [],
      name: '',
      num1: [],
      name1: '',
      num2: [],
      name2: '',
      num3: [],
      name3: '',
      num4: [],
      name4: '',
      num5: [],
      name5: '',
      num6: [],
      name6: '',
      
      name7: '',
      
      name8: '',
     
      name9: '',
      imgHeight: 176,
    }
  }

  goPage (type) {
    this.props.history.push('/book/' + type)
  }

  componentDidMount() {
    api.requestListData().then(data => {
      console.log(data[7])
      this.setState({
        num: data[7].items,
        name: data[7].title,
        num1: data[8].items,
        name1: data[8].title,
        num2: data[10].items,
        name2: data[10].title,
        num3: data[11].items,
        name3: data[11].title,
        num4: data[13].items,
        name4: data[13].title,
        num5: data[15].items,
        name5: data[15].title,
        num6: data[16].items,
        name6: data[16].title,
       
        name7: data[9].items[0].cover_url,
       
        name8: data[12].items[0].cover_url,
        
        name9: data[14].items[0].cover_url
      })
    })
    console.log(this.state.num)
    this.props.requestBannerData()
    // this.props.requestListData()
    this.props.requestBookData()
    console.log(this.props)
  }

  render () {
    
      return (
        <div className = "content">
          <Carousel
            autoplay={true}
            infinite
            // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            // afterChange={index => console.log('slide to', index)}
          >
            {this.props.banner.map((item, index)=> (
              <a
                key={index}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={item.cover_url}
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
          <div className="nav">
            <p to="" className="tab" onClick={this.goPage.bind(this, 'school')}>
              <img src={require('./images/school.svg')} alt=""/>
              <span className="">青椒学院</span>
            </p>
            <p to="" className="tab" onClick={this.goPage.bind(this, 'school')}>
              <img src={require('./images/find.svg')} alt="" />
              <span className="">时间发现</span>
            </p>
            <p to="" className="tab" onClick={this.goPage.bind(this, 'school')}>
              <img src={require('./images/time.svg')} alt="" />
              <span className="">时间专栏</span>
            </p>
            <p to="" className="tab" onClick={this.goPage.bind(this, 'school')}>
              <img src={require('./images/me.svg')} alt="" />
              <span className="">我的</span>
            </p>    
          </div>
          <div className="sell">
            <h2>今日特惠</h2>      
            <div className="book">
              <div className="init">
                {
                  this.props.book.map((item, index) => {
                   return <Link to={{pathname:'/detailbook', state:{url: item.cover_url,title: item.title,price:item.price}}} key={index}>
                      <img src={item.cover_url}  alt=""/>
                      <div className="p">{item.title}</div>
                      <span className="sp">{item.price}.00<span>元</span></span>
                    </Link>
                  })
                }
              </div>
            </div>
          </div>
          <div className="kind">
            
          <div className="detail">
          <h2>{this.state.name}</h2>
             {
                this.state.num.map((itm, idx) => {
                  return (
                    <div className="kind-1" key={idx}>
                      <img src={itm.cover_url}  alt=""/>
                      <div className="rig">
                        <div className="cast">{itm.title}<p>{itm.price}.00<span>元</span></p></div>
                        <p>主讲人:{itm.authors[0].name}</p>
                        <span>{itm.short_intro}</span>
                      </div>
                    </div>
                  )
                  })
              }
            </div>
            <div className="detail">
          <h2>{this.state.name1}</h2>
             {
                this.state.num1.map((itm, idx) => {
                  return (
                    <div className="kind-1" key={idx}>
                      <img src={itm.cover_url} alt="" />
                      <div className="rig">
                        <div className="cast">{itm.title}<p>{itm.price}.00<span>元</span></p></div>
                        <p>主讲人:{itm.authors[0].name}</p>
                        <span>{itm.short_intro}</span>
                      </div>
                    </div>
                  )
                  })
              }
            </div>
            <div className="picture">
              <img src={this.state.name7} alt=""/>
            </div>
            <div className="detail">
          <h2>{this.state.name2}</h2>
             {
                this.state.num2.map((itm, idx) => {
                  return (
                    <div className="kind-1" key={idx}>
                      <img src={itm.cover_url} alt="" />
                      <div className="rig">
                        <div className="cast">{itm.title}<p>{itm.price}.00<span>元</span></p></div>
                        <p>主讲人:{itm.authors[0].name}</p>
                        <span>{itm.short_intro}</span>
                      </div>
                    </div>
                  )
                  })
              }
            </div>
            <div className="detail">
          <h2>{this.state.name3}</h2>
             {
                this.state.num3.map((itm, idx) => {
                  return (
                    <div className="kind-1" key={idx}>
                      <img src={itm.cover_url}  alt=""/>
                      <div className="rig">
                        <div className="cast">{itm.title}<p>{itm.price}.00<span>元</span></p></div>
                        <p>主讲人:{itm.authors[0].name}</p>
                        <span>{itm.short_intro}</span>
                      </div>
                    </div>
                  )
                  })
              }
            </div>
            <div className="picture">
              <img src={this.state.name8} alt=""/>
            </div>
            <div className="detail">
          <h2>{this.state.name4}</h2>
             {
                this.state.num4.map((itm, idx) => {
                  return (
                    <div className="kind-1" key={idx}>
                      <img src={itm.cover_url}  alt=""/>
                      <div className="rig">
                        <div className="cast">{itm.title}<p>{itm.price}.00<span>元</span></p></div>
                        <p>主讲人:{itm.authors[0].name}</p>
                        <span>{itm.short_intro}</span>
                      </div>
                    </div>
                  )
                  })
              }
            </div>
            <div className="picture">
              <img src={this.state.name9} alt=""/>
            </div>
            <div className="detail">
          <h2>{this.state.name5}</h2>
             {
                this.state.num5.map((itm, idx) => {
                  return (
                    <div className="kind-1" key={idx}>
                      <img src={itm.cover_url}  alt=""/>
                      <div className="rig">
                        <div className="cast">{itm.title}<p>{itm.price}.00<span>元</span></p></div>
                        <p>主讲人:{itm.authors[0].name}</p>
                        <span>{itm.short_intro}</span>
                      </div>
                    </div>
                  )
                  })
              }
            </div>
            <div className="detail">
          <h2>{this.state.name6}</h2>
             {
                this.state.num6.map((itm, idx) => {
                  return (
                    <div className="kind-1" key={idx}>
                      <img src={itm.cover_url}  alt=""/>
                      <div className="rig">
                        <div className="cast">{itm.title}<p>{itm.price}.00<span>元</span></p></div>
                        <p>主讲人:{itm.authors[0].name}</p>
                        <span>{itm.short_intro}</span>
                      </div>
                    </div>
                  )
                  })
              }
            </div>
                
              
          </div>
        </div>
      )
  }

}

export default Com
