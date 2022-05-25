import {Component} from 'react'
import './index.css'
import HistoryItem from '../HistoryItem'

const deletedItemsList = []

class HistorySearch extends Component {
  state = {searchInput: '', deletedListItems: deletedItemsList}

  onSearchInputChange = event => {
    const searchValue = event.target.value
    this.setState({searchInput: searchValue})
  }

  onDeletingHistoryItem = name => {
    deletedItemsList.push(name)
    this.setState({deletedListItems: deletedItemsList})
  }

  render() {
    const {searchInput, deletedListItems} = this.state
    const {initialHistoryList} = this.props
    const newHistoryList = initialHistoryList.filter(
      eachHistory =>
        eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()) &&
        !deletedListItems.includes(eachHistory.title),
    )

    return (
      <div className="bg-container container">
        <nav className="navbar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="search-box-container">
            <div className="search-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-icon"
              />
            </div>
            <input
              type="search"
              value={searchInput}
              placeholder="Search history"
              className="search-input"
              onChange={this.onSearchInputChange}
            />
          </div>
        </nav>
        <div className="main-container">
          {deletedListItems.length === initialHistoryList.length ||
          newHistoryList.length === 0 ? (
            <p className="empty-list-message">There is no history to show</p>
          ) : (
            <ul className="history-item-list-container">
              {newHistoryList.map(eachItem => (
                <HistoryItem
                  key={eachItem.id}
                  time={eachItem.timeAccessed}
                  logo={eachItem.logoUrl}
                  title={eachItem.title}
                  domain={eachItem.domainUrl}
                  onDelete={this.onDeletingHistoryItem}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default HistorySearch
