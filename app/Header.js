import React, { Component } from 'react';
import {Link} from 'react-router'
import text from './assets/config/home'

class Nav extends Component {
  render() {
    const lan = this.props.lan
    const pathname = location.pathname
    return (
      <div className="App-header">
        <span className="logo"></span>
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
            lan === 'ZH' && <span>
              <span className="ChangeLan" onClick={() => this.props.changeLan('EN')}>EN</span> | 中
            </span>
          }
          {
            lan === 'EN' && <span>
              EN | <span className="ChangeLan" onClick={() => this.props.changeLan('ZH')}>中</span>
            </span>
          }
        </div>
      </div>
    );
  }
}

export default Nav;
