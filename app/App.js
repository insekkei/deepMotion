import React, { Component } from 'react';
import {Link} from 'react-router'
import text from './assets/config/home'
import {getDMLanguage, setDMLanguage} from './utils'
import './App.less';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentLan: getDMLanguage()
    }
  }

  changeLan = (lan) => {
    this.setState({
      currentLan: lan
    })
    setDMLanguage(lan)
  }

  changeForm = (field, value) => {
    const formData = this.state.formData || {}
    this.setState({
      formData: {
        ...formData,
        [`${field}`]: value
      }
    })
  }

  render() {
    const lan = this.state.currentLan
    const formData = this.state.formData || {}

    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        changeLan: this.changeLan,
        lan: lan
      }));

    return (
      <div className="App Index">
        {childrenWithProps}
        <div className="App-footer">
          <div className="info">
            <span className="logo"></span>
            <p className="slogan">{text.WEBSITE.SLOGAN[lan]}</p>
            <div className="WeChat">
              <p className="WeChat-title">{text.BOTTOM.WECHAT[lan]}</p>
              <div className="WeChat-content">
                <div className="qrcode"></div>
                <div className="contact">
                  <p className="tel">{text.BOTTOM.TEL}</p>
                  <p className="more">
                    <span className="email">{text.BOTTOM.EMAIL}</span>
                    <span className="address">{text.BOTTOM.ADDRESS[lan]}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="form">
            <div className="input">
              <input type="text" onChange={(e) => this.changeForm('Name', e.target.value)} placeholder={text.FORM.LABEL.NAME[lan]} />
              <input type="tel" onChange={(e) => this.changeForm('Tel', e.target.value)} placeholder={text.FORM.LABEL.TEL[lan]} />
              <input type="email" onChange={(e) => this.changeForm('Email', e.target.value)} className="EmailInput" placeholder={text.FORM.LABEL.EMAIL[lan]} />
            </div>
            <div className="check">
              <label htmlFor="Personal">
                <input type="radio" onChange={(e) => this.changeForm('Type', 'Personal')} name="radio" id="Personal" className="Checkbox" />
                <span>{text.FORM.LABEL.INDIVIDULE[lan]}</span>
              </label>
              <label htmlFor="Cooperation">
                <input type="radio" onChange={(e) => this.changeForm('Type', 'Cooperation')} name="radio" id="Cooperation" className="Checkbox" />
                <span>{text.FORM.LABEL.COOPERATION[lan]}</span>
              </label>
              <label htmlFor="Jobs">
                <input type="radio" onChange={(e) => this.changeForm('Type', 'Jobs')} name="radio" id="Jobs" className="Checkbox" />
                <span>{text.FORM.LABEL.FORJOB[lan]}</span>
              </label>
            </div>

            <textarea onChange={(e) => this.changeForm('Comments', e.target.value)} placeholder={text.FORM.LABEL.COMMENTS[lan]} />
            <div className="action">
              <a href={`mailto:career@deepmotion.ai?subject=for ${formData.Type}&body=Name-${formData.Name}-Phone-${formData.Tel}&body=${formData.Comments}`}>
                {text.FORM.LABEL.SENDBUTTON[lan]}
              </a>
            </div>
          </div>
        </div>
        <div className="Copyright">
          Copyright &copy; 2017-2020, DeepMotion, All Rights Reserved
        </div>
      </div>
    );
  }
}

export default App;
