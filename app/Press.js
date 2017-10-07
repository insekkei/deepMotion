import React, { Component } from 'react';
import Header from './Header'
import PRESS from './assets/config/press'
import {getDMLanguage, setDMLanguage} from './utils'
import './Press.less'

class Press extends Component {
  getMonthEN = (month) => {
    month = Number(month)
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    return months[month - 1]
  }
  render() {
    const lan = this.props.lan
    return (
      <div className="PressPage">
        <div className="HeaderWrapper">
          <Header lan={lan} changeLan={this.props.changeLan} />
        </div>

        <div className="PressWrapper">
        <div className="PressList HorizonWrapper">
          {PRESS.ITEMS.map((item, index) => {
            let month = item.DATE.split('-')[1]
            let year = item.DATE.split('-')[0]
            let monthEN = <span><span className="month">{this.getMonthEN(month)}</span>{year}</span>
            let monthZH = <span><span className="month">{month}</span>月／{year}</span>

            let monthNeedHide = index === 0 ? false : function () {
              let lastItemMonth = PRESS.ITEMS[index - 1].DATE.split('-')[1]
              let lastItemYear = PRESS.ITEMS[index - 1].DATE.split('-')[0]
              return month === lastItemMonth && year === lastItemYear
            }()

            return (<div className="PressItem" key={index}>
              <div className={`MonthWrapper ${monthNeedHide ? 'hidden' : ''}`}>{lan === 'EN' ? monthEN : monthZH}</div>
              {item.PIC && <img src={item.PIC} className="image" />}
              <div className="PressItemContent">
                <h2>{item.TITLE[lan]}</h2>
                <p>{item.DESCRIPTION[lan]}...<a href={item.LINK} className="more">{PRESS.LABEL.LINK[lan]}</a></p>
                <div className="extInfo">
                  <span className="source">{PRESS.LABEL.SOURCE[item.SOURCE][lan]}</span>
                  <span className="date">{item.DATE}</span>
                </div>
              </div>
            </div>)
          })}
        </div>
        </div>
      </div>
    );
  }
}

export default Press;
