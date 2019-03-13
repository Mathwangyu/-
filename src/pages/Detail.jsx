import React, {Component} from 'react';
// import {NavLink, Switch, Route} from 'react-router-dom';
import axios from 'axios';

class Com extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        console.log(this);
        const id = this.props.match.params.id
        axios.get('https://www.daxunxun.com/detail?id=' + id)
            .then(data => {
                console.log(data.data);
                this.setState({
                    list: data.data
                })
            })
    }
    render() {
        let arr = []
    this.state.list.map((item, index) => (
            // arr.push(<img src={ require('item.images.small')}/>)
            arr.push(
            <li key = { index }> { item.title } ---- { item.year }
            <img src={ item.images.small }  alt=''/>
            </li>
        )
        ))
        return (
            <div className="box">
                <header className="header">头部</header>
                <div className="content">
                    <ul>
                        {arr}
                    </ul>
                </div>
                <footer className="footer">
                    详情底部
                </footer>
            </div>
        )
    }
}

export default Com