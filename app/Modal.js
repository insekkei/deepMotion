import React, { Component } from 'react';
import joinusText from './assets/config/joinus'
import './Modal.less'

class Modal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showIndex: ''
    }
  }

  componentDidMount () {
    this.scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
    document.documentElement.style.overflow = 'hidden'
  }

  hideModal = (e) => {
    const {className} = e.target
    if (className === 'Modal' || className === 'Close') {
      this.setState({
        showIndex: ''
      })
      document.documentElement.style.overflow = 'auto'
      this.props.onClose()
    }
  }

  render() {
    const {showIndex, lan} = this.props
    return (
      <div className="Modal" onClick={this.hideModal}>
        <div className="ModalWrapper">
          <span className="Close" onClick={this.hideModal}>+</span>
          <div className="ModalContent">
            <h3 className="title">
              {joinusText.POSITIONS[showIndex].TITLE[lan]}
            </h3>
            <p>{joinusText.LABEL.RESPONSIBILITY[lan]}</p>
            <ul>{joinusText.POSITIONS[showIndex].DESC[lan].map((item, index) => (
              <li key={index}>{item}</li>
            ))}</ul>
            <hr />
            <p>{showIndex === 1 ? joinusText.LABEL.REQUIREMENTBB[lan] : joinusText.LABEL.REQUIREMENT[lan]}</p>
            <ul className="Requirement">
              {
                joinusText.POSITIONS[showIndex].REQUIREMENT[lan].map((item, index) => (
                  <li className="RequirementItem" key={index}>
                    {item}
                  </li>
                ))
              }
            </ul>
            <p>{joinusText.LABEL.SEND[lan]}: <a href="mailto:career@deepmotion. ai">career@deepmotion. ai</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
