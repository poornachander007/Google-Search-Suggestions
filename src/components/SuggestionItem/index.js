// Write your code here
import {Component} from 'react'

import './index.css'

class SuggestionItem extends Component {
  arrowGetInput = () => {
    const {details, onArrowGetInput} = this.props
    const {suggestion} = details
    onArrowGetInput(suggestion)
  }

  render() {
    const {details} = this.props
    const {suggestion} = details
    return (
      <li className="suggest_item_container">
        <p className="suggestion">{suggestion}</p>
        <img
          onClick={this.arrowGetInput}
          className="arrow_icon"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow icon"
        />
      </li>
    )
  }
}

export default SuggestionItem
