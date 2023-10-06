function Nav() {
    return <nav>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <button
            className={`nav-link ${activeButton === 'Home' ? 'active' : ''}`}
            onClick={() => handleButtonClick('Home')}
          >
            Home
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeButton === 'Team' ? 'active' : ''}`}
            onClick={() => handleButtonClick('Team')}
          >
            Teams
          </button>
        </li>
      </ul>
    </nav>;
  }