import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  onEatMango = () => {
    this.setState(prevState => {
      console.log(prevState.count1)
      return {
        count1: prevState.count1 + 1,
      }
    })
  }

  onEatBanana = () => {
    this.setState(prevState => {
      console.log(prevState.count2)
      return {
        count2: prevState.count2 + 1,
      }
    })
  }

  render() {
    const {count1, count2} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">
            Bob ate <span className="span">{count1} </span>mangoes
            <span className="span"> {count2} </span>bananas
          </h1>
          <div className="image-container">
            <div className="mango-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button
                onClick={this.onEatMango}
                type="button"
                className="button"
              >
                Eat Mango
              </button>
            </div>
            <div className="banana-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button
                onClick={this.onEatBanana}
                type="button"
                className="button"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
