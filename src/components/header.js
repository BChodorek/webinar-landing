import PropTypes from "prop-types"
import React from "react"
import chevron from '../images/chevronDown.svg';

const Header = ({ siteTitle }) => (
  <header class="header">

    <nav class="header__nav">
      <ul class="header__navList">
        <li class="header__navItem">
          <a href="#about">O wydarzeniu</a>
        </li>
        <li class="header__navItem">
          <a href="#speakers">Prelegenci</a>
        </li>
        <li class="header__navItem">
          <a href="#agenda">Agenda</a>
        </li>
      </ul>
    </nav>
    <div class="header__headingContainer">
      <h1 class="header__heading">Transformacja Banku z <span>Salesforce</span>
      </h1>
      <p class="header__eventDate">20 maja 2020</p>
    </div>
    <a href="#signup"><button class="button header__CTA">
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
