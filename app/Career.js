import React, { Component } from 'react';
import Header from './Header'
import joinusText from './assets/config/joinus'
import {getDMLanguage, setDMLanguage} from './utils'
import './Career.less'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modalShow: false,
      showIndex: ''
    }
  }

  showModal = (index) => {
    this.setState({
      modalShow: true,
      showIndex: index
    })
  }

  hideModal = () => {
    this.setState({
      modalShow: false,
      showIndex: ''
    })
  }

  render() {
    const lan = this.props.lan
    const {modalShow, showIndex} = this.state
    return (
      <div className="Career">
        {showIndex !== '' && <div className="Modal">
          <div className="ModalWrapper">
            <span className="Close" onClick={this.hideModal}>+</span>
            <div className="ModalContent">
              <h3 className="title">
                {joinusText.POSITIONS[showIndex].TITLE[lan]}
              </h3>
              <p>{joinusText.POSITIONS[showIndex].DESC[lan]}</p>
              <hr />
              <p>{joinusText.LABEL.REQUIREMENT[lan]}</p>
              <ul className="Requirement">
                {
                  joinusText.POSITIONS[showIndex].REQUIREMENT[lan].map((item, index) => (
                    <li className="RequirementItem" key={index}>
                      {index + 1}. {item}
                    </li>
                  ))
                }
              </ul>
              <p>{joinusText.LABEL.SEND[lan]}: <a href="mailto:career@deepmotion. ai">career@deepmotion. ai</a></p>
            </div>
          </div>
        </div>}

        <div className="HeaderWrapper">
          <Header lan={lan} changeLan={this.props.changeLan} />
        </div>

        <div className="Introduction HorizonWrapper">
          <img className="image" src="/config/resource/career/introduction.png" />
          <div className="text">
          {
            joinusText.INTRODUCTION[lan].map((item, index) => (
              <p key={index}>
                {item}
              </p>
            ))
          }
          </div>
        </div>

        <div className="Positions">
          <h2 className="module-title">
            {joinusText.LABEL.HIRETITLE[lan]}
          </h2>
          <ul className="PositionWrapper HorizonWrapper">
            {
              joinusText.POSITIONS.map((item, index) => (
                <li key={index}
                  onClick={() => this.showModal(index)}
                  className="PositionItem">
                  <h3>{item.TITLE[lan]}</h3>
                  <p>{item.DESC[lan]}</p>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
