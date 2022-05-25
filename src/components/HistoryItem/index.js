import './index.css'

const HistoryItem = props => {
  const {time, logo, title, domain, onDelete} = props

  const onDeleteItem = () => {
    onDelete(title)
  }

  return (
    <li className="history-item-container">
      <p className="time">{time}</p>
      <div className="list-item-main-content-container">
        <div className="domain-logo-container">
          <img src={logo} alt="domain logo" className="domain-logo" />
          <div className="text-container">
            <p className="card-title">{title}</p>
            <p className="card-domain">{domain}</p>
          </div>
        </div>
        <button
          type="button"
          className="delete-button"
          onClick={onDeleteItem}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
