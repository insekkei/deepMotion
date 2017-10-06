import React, { Component } from 'react';
import {Link} from 'react-router'
import text from './assets/config/home'
import './Header.less'

class Nav extends Component {
  render() {
    const lan = this.props.lan
    const pathname = location.pathname
    return (
      <div className="App-header HorizonWrapper">
        <img src="/image/logo-bottom.png" className="logo" />
        {lan === 'ZH' && <span>深动科技</span>}
        <div className="Navigation">
          {
            text.NAVIGATIONS.map(item => (
              <Link key={item.ROUTE} className={`${item.ROUTE} ${lan} ${pathname.match(item.ROUTE) ? 'current' : ''}`} to={item.ROUTE}>
                {item.LABEL[lan]}
              </Link>
            ))
          }
          {
            lan === 'ZH' && <span className="changeLanWrapper">
              <span className="ChangeLan" onClick={() => this.props.changeLan('EN')}>EN</span> | 中
            </span>
          }
          {
            lan === 'EN' && <span className="changeLanWrapper">
              EN | <span className="ChangeLan" onClick={() => this.props.changeLan('ZH')}>中</span>
            </span>
          }
          <img className="toggleLan" src="/image/gottleLan.png"
            onClick={() => {
              lan === 'ZH' ? this.props.changeLan('EN') : this.props.changeLan('ZH')
            }} />
        </div>
      </div>
    );
  }
}

export default Nav;
