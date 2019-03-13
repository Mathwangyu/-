import React from 'react';
import {Link} from 'react-router-dom';
import api from '@/api/detailbook';
import '@/components/detailbook/mulu';

  class List extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        list: [],
        list1: [],
        time: 0,
        long: 0,
      }
    }
    
    componentDidMount () {
     api.requestData().then(data => {
       console.log(data[0].media.full_media.duration)
       this.setState({
         list: data[0],
         time: data[0].media.full_media.duration,
         long: data.length,
         list1: data
       })
     })
    }

    render () {
      return (
        <div className="top">
        <div className="head">
          <img src={require('./../../pages/images/耳机.png')} />
          <Link to="" className="try">
            <h1>1.{this.state.list.title} <span>试听</span> </h1>
            <div className="time">
              <p>{this.state.list.short_intro}</p>
              <span>
                
                {Math.floor(this.state.time / 60)} : {this.state.time % 60}
              </span>
            </div>
          </Link>
          </div>
        <div className="cont">
          <div className="tal">
            <p>共{this.state.long}期(更新完毕)<span>倒序</span></p>
          </div>
          {
            this.state.list1.map((item, index) => (
              <Link to="" key={index} className="lis">
                <img src={require('./../../pages/images/耳机.png')} />
                <div className="try">
                  <h1>{index * 1 + 1}.{item.title} <span>试听</span> </h1>
                  <div className="time">
                    <p>{item.short_intro}</p>
                    <span>
                      {Math.floor(item.media.full_media.duration / 60)} : {item.media.full_media.duration % 60}
                    </span>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
      )
    }
  }
  


export default List;
