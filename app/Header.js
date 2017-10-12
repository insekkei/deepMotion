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
        <Link to='/home'><img src="/image/logo-bottom.png" className="logo" />{lan === 'ZH' && <span>深动科技</span>}</Link>

        <div className="Navigation">
          {
            text.NAVIGATIONS.map(item => (
              <Link key={item.ROUTE} className={`${item.ROUTE} ${lan} ${pathname.match(item.ROUTE) ? 'current' : ''}  ${(pathname === '/' && item.ROUTE === 'home') ? 'current' : ''}`} to={item.ROUTE}>
                {item.LABEL[lan]}
              </Link>
            ))
          }
          {
            lan === 'ZH' && <span className="changeLanWrapper" onClick={() => this.props.changeLan('EN')}>
              <span className="ChangeLan">EN</span> | 中
            </span>
          }
          {
            lan === 'EN' && <span className="changeLanWrapper" onClick={() => this.props.changeLan('ZH')}>
              EN | <span className="ChangeLan">中</span>
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
