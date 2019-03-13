import React, { Component } from 'react'
import api from '@/api/fm'
import '@/components/fm/fm'
var ti = ''
function rotate () {
  let deg = 0
  const image = document.getElementById("image")
  ti = setInterval(() => {
    image.style.transform = "rotate("+ deg +"deg)";
    deg+= 1
    if (deg > 360) {
      deg = 0
    }
  }, 30)
} 

function imageStop () {
  clearInterval(ti);
}

class Com extends Component {

  constructor (props) {
    super(props)
    this.state = {
      list: [],
      music: '',
      tim: '',
      num: 0
    }
  }

  componentDidMount () {
    api.requestData().then(data =>{
      console.log(this.state.num)
      this.setState({
        list: data[this.state.num],
        music: data[this.state.num].url,
        log: 0
      })
    })
  }

   

  start () {
    console.log(this)
    const music = document.getElementById("music")
    imageStop()
    if (this.state.log === 0) {
      music.play();
      rotate()
      this.setState({
        log: 1
      })
    } else {
      music.pause()
      
      this.setState({
        log: 0
      })
    }
    
  }

  next () {
    imageStop()
    let a = this.state.num;
    a = a == 1? 0 : 1;
    api.requestData().then(data =>{
      console.log(this.state.num)
      this.setState({
        list: data[a],
        music: data[a].url,
        log: 0,
        num : a
      })
    })
  }

    render () {
        return (
            <div className = "fm">
              <div className="header">
                <h1><a href="#/">豆瓣精选  MHz</a></h1>
              </div>
              <div className="cont">
              <img src={require('./images/下一首.png')} className="next" onClick={this.next.bind(this)}/>
              <img src={this.state.list.cover} onClick={this.start.bind(this)} id="image" />
              <audio src={this.state.music} controls preload="metadata"   id="music"/>
              <h2>{this.state.list.title}</h2>
              <p>{this.state.list.name}</p>
              <span>暂无歌词</span>
              </div>
            </div>
        )
    }

}

export default Com
