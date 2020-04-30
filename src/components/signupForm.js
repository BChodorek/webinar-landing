import React, { Component } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

export default class signupForm extends Component {
  state = {}

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  _handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(this.state.email, {
      FNAME: this.state.name,
      PHONE: this.state.phone,
      INST: this.state.institution,
      ROLE: this.state.role,
    })
      .then(({ msg, result }) => {
        if (result !== "success") {
          throw msg
        }
        this.setState({ msg })
      })
      .catch(err => {
        this.setState({ msg: err })
      })
  }

  render() {
    return (
      <>
        <form className="signUp" id="signup" onSubmit={this._handleSubmit}>
          <label>
            Imię
            <input
              placeholder="Twoje imię"
              type="text"
              name="name"
              id="name"
              required
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            E-mail
            <input
              placeholder="example@gmail.com"
              type="email"
              name="email"
              id="email"
              required
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Telefon
            <input
              placeholder="000-111-222"
              type="tel"
              name="phone"
              id="phoneNumber"
              required
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Nazwa instytucji finansowej
            <input
              placeholder="Instytucja finansowa"
              type="text"
              name="institution"
              id="institution"
              required
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Stanowisko
            <select
              name="role"
              id="signUp"
              required
              onChange={this.handleInputChange}
            >
              <option value="" disabled>
                -- Wybierz z listy --
              </option>
              <option value="Doradca">Doradca</option>
              <option value="Specjalista">Specjalista</option>
              <option value="Manager">Manager</option>
              <option value="Dyrektor">Dyrektor</option>
              <option value="Zarząd">Zarząd</option>
              <option value="Inne">Inne</option>
            </select>
          </label>

          <div className="checkbox">
            <input type="checkbox" id="checkbox_1" required />
            <label className="signUp__consent" htmlFor="checkbox_1">
              Wyrażam zgodę na przetwarzanie swoich danych osobowych oraz
              wysłanie informacji dot. webinaru
            </label>
          </div>
          <span></span>
          {this.state.msg && (
            <p className="signUp__message">{this.state.msg}</p>
          )}
          <button className="button signUp__button" type="submit">
            Wyślij
          </button>
        </form>
      </>
    )
  }
}
