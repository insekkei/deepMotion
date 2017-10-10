import React, { Component } from 'react';
import joinusText from './assets/config/joinus'
import './Modal.less'

class Modal extends Component {
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
    this.props.onClose()
  }

  render() {
    const {modalShow} = this.state
    const {showIndex, lan} = this.props
    return (
      <div className="Modal">
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
      </div>
    );
  }
}

export default Modal;
