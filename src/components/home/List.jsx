import React from 'react';
import './style.scss';
// import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// class List extends React.Component {

//     render() {
//         return (
//             <ul className="movielist">
//                 {
//                     this.props.list.map((item, index) => {
//                         return (
//                             <Link to={'/detail/' + item.id} key={item.id}>
//                                 <div className="movieimg">
//                                     <img src={item.images.small} alt={item.alt}/>
//                                 </div>
//                                 <div className="info">
//                                     {index}<h3>{item.title}</h3>{index}
//                                 </div>
//                             </Link>
//                         )
//                     })
//                 }
//             </ul>
//         )
//     }

// }
const List = ({ list }) => (
    <ul className = "movielist">
      {
        list.map((item, index) => {
          return (
            <Link to={ '/detail/' + item.id } key={index}>
              <div className="movieimg">
                <img src={ item.images.small } alt={ item.alt }/>
              </div>
              <div className="info">
                {index} ---  <h3>{ item.title }</h3>
              </div>
            </Link>
          )
        })
      }
    </ul>
)

export default List