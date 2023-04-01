// Write your code here

import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {value: ''}

  getInput = event => {
    this.setState({value: event.target.value})
  }

  onArrowGetInput = suggestion => {
    this.setState({value: suggestion})
  }

  render() {
    const {value} = this.state
    const {suggestionsList} = this.props
    const filteredSuggestionList = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion.toLowerCase().includes(value.toLowerCase()),
    )
    return (
      <div className="page_container">
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <ul className="suggestions_container">
            <div className="input_container">
              <img
                className="search_icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                onChange={this.getInput}
                className="input"
                type="search"
                value={value}
                placeholder="Search Google"
              />
            </div>
            {filteredSuggestionList.map(eachSuggestion => (
              <SuggestionItem
                key={eachSuggestion.id}
                details={eachSuggestion}
                onArrowGetInput={this.onArrowGetInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
