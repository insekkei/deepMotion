import React, { Component } from 'react'
import {Link} from 'react-router'
import Header from './Header'
import Modal from './Modal'
import text from './assets/config/home'
import careerText from './assets/config/joinus'
import {getDMLanguage, setDMLanguage} from './utils'
import './Home.less'

class Home extends Component {
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
      <div className="Home">
        <div className="banner">
          <div className="HeaderWrapper">
            <Header lan={lan} changeLan={this.props.changeLan} />
          </div>
          <div className="info">
            <p className="slogan">{text.WEBSITE.SLOGAN[lan]}</p>
          </div>
          <Link to="career" className="Joinus">{text.TEAM.LABEL.JOINUS[lan]}</Link>
        </div>

        <div className={`Advantage ${lan}`}>
          <div className="AdvantageWrapper HorizonWrapper">
          {
            text.ADVANTAGE.map((item, index) => (
              <div className={`AdvantageItem item${index}`} key={index}>
                <div className="title">{item.TITLE[lan]}</div>
                <ul className="desc">
                  {item.DESCRIPTION[lan].map((descItem, descIndex) => (
                    <li key={descIndex}>{descItem}</li>
                  ))}
                </ul>
              </div>
            ))
          }
          </div>
        </div>

        <div className="Products">
          <h2 className="module-title">
            {text.PRODUCTS.LABEL.MODULETITLE[lan]}
          </h2>
          {
            text.PRODUCTS.ITEMS.slice(0, 2).map((item, index) => (
              <div className={`ProductItem HorizonWrapper item${index}`} key={index}>
                <div className="ProductText">
                  <h3>{item.TITLE[lan]}</h3>
                  <p>{item.DESCRIPTION[lan]}</p>
                  <p className="Labels">{item.LABELS[lan]}</p>
                </div>
                <div className="image">
                  <img src={item.IMAGE} />
                </div>
              </div>
            ))
          }
        </div>

        <div className="Team">
          <h2 className="module-title">{text.TEAM.LABEL.MODULETITLE[lan]}</h2>
          <div className="MiniScreenWrapper">
            <div className="Members HorizonWrapper">
            {
              text.TEAM.MEMBERS.map((item, index) => (
                <div className={`MemberItem item${index}`} key={index}>
                  <div className="image"></div>
                  <div className="name">{item.NAME[lan]}</div>
                  <div className="title">{item.TITLE[lan]}</div>
                  <div className="qualifications">
                    <span>
                      <span className="Number">{item.QUALIFICATIONS.YEARS}</span>+<br />
                      {text.TEAM.LABEL.YEARS[lan]}
                    </span>
                    <span>
                      <span className="Number">{item.QUALIFICATIONS.PATENT}</span>+<br />
                      {text.TEAM.LABEL.PATENT[lan]}
                    </span>
                    <span>
                      <span className="Number">{item.QUALIFICATIONS.PAPER}</span>+<br />
                      {text.TEAM.LABEL.PAPER[lan]}
                    </span>
                  </div>
                  <ul className="intro">
                    {item.INTRODUCTION[lan].map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <div className="paperLink">
                    <a href={item.PAPERLINK} target="_blank">{text.TEAM.LABEL.ALLPAPERS[lan]}</a>
                  </div>
                </div>
              ))
            }
            </div>
          </div>
        </div>

        <div className="Positions Team">
          <h2 className="module-title">{careerText.LABEL.HIRETITLE[lan]}</h2>
          <div className="PositionWrapper HorizonWrapper">
            {
              careerText.POSITIONS.map((item, index) => (
                <div className='PositionItem' key={index} onClick={() => this.showModal(index)}>{item.TITLE[lan]}</div>
              ))
            }
          </div>
          <div className="HorizonWrapper SeeMore">
            <a href="/career">{careerText.LABEL.SEEMORE[lan]} &gt;</a>
          </div>
        </div>

        {
          text.PRESS.ITEMS.length > 2 && <div className="Press">
            <h2 className="module-title">{text.PRESS.LABEL.MODULETITLE[lan]}</h2>
            <div className="PressWrapper HorizonWrapper">
              {
                text.PRESS.ITEMS.slice(0, 3).map((item, index) => (
                  <div className="PressItem" key={index}>
                    <a href={item.LINK} target="_blank">
                      {item.PIC && <img src={item.PIC} />}
                      <h3>{item.TITLE[lan]}</h3>
                      {!item.PIC && <p>{item.DESCRIPTION[lan]}</p>}
                      <div className="ExtInfo">
                        <span className="source">{text.PRESS.LABEL.SOURCE[item.SOURCE][lan]}</span>
                        <span className="date">
                          {item.DATE}
                        </span>
                      </div>
                    </a>
                  </div>
                ))
              }
            </div>

            <div className="AllPressLink HorizonWrapper">
              <Link to="press">{text.PRESS.LABEL.ALLREPORT[lan]}</Link> &gt;
            </div>
          </div>
        }

        {showIndex !== '' && <Modal
          lan={lan}
          showIndex={showIndex}
          onClose={this.onCloseModal}
        />}
      </div>
    );
  }
}

export default Home;
