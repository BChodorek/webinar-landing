import PropTypes from "prop-types"
import React from "react"
import chevron from '../images/chevronDown.svg';

const Header = ({ siteTitle }) => (
  <header className="header">

    <nav className="header__nav">
      <ul className="header__navList">
        <li className="header__navItem">
          <a href="#about">O wydarzeniu</a>
        </li>
        <li className="header__navItem">
          <a href="#speakers">Prelegenci</a>
        </li>
        <li className="header__navItem">
          <a href="#agenda">Agenda</a>
        </li>
      </ul>
    </nav>
    <div className="header__headingContainer">
      <h1 className="header__heading">Transformacja cyfrowa Banków Spółdzielczych
      </h1>
      <p className="header__eventDate">20 maja 2020</p>
    </div>
    <a href="#signup"><button className="button header__CTA">
        <p>Zapisz się na wydarzenie</p>
        <img src={chevron} alt="strzałka kierująca w dół"/>
      </button>
    </a>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
