import React, { Component } from 'react';
import Header from './Header'
import Modal from './Modal'
import joinusText from './assets/config/joinus'
import {getDMLanguage, setDMLanguage} from './utils'
import './Career.less'

class Career extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showIndex: ''
    }
  }

  showModal = (index) => {
    this.setState({
      showIndex: index
    })
  }

  onCloseModal = () => {
    this.setState({
      showIndex: ''
    })
  }

  render() {
    const {lan} = this.props
    const {showIndex} = this.state
    return (
      <div className="Career">
        <div className="HeaderWrapper">
          <Header lan={lan} changeLan={this.props.changeLan} />
        </div>

        <div className="Introduction HorizonWrapper">
          <div className="image">
            <img src="/config/resource/career/introduction.png" />
          </div>
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

        {showIndex !== '' && <Modal
          lan={lan}
          showIndex={showIndex}
          onClose={this.onCloseModal}
        />}
      </div>
    );
  }
}

export default Career;
