import React from 'react';
import {Link} from 'react-router-dom';
import api from '@/api/detailbook';
import '@/components/detailbook/detailmu';

const List = ({id,price}) => (
  <div className="detal">
    <div className="head">
      <h1>{id}</h1>
      <div className="pric">
        <div className="l">
          <p>{price}元</p>
          <span>共13期， 每期仅需2.23元</span>
        </div>
        <div className="r">
          <img src={require('./../../pages/images/耳机.png')} />
          <span>音频专栏</span>
        </div>
      </div>
    </div>
  </div>
)

export default List;
