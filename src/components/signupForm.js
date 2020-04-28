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

    console.log("submit", this.state)

    addToMailchimp(this.state.email, {
      FNAME: this.state.name,
      PHONE: this.state.phone,
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
              placeholder="000-111-000"
              type="tel"
              name="phone"
              id="phoneNumber"
              required
              onChange={this.handleInputChange}
            />
          </label>
          <div className="checkbox">
            <input type="checkbox" id="checkbox_1" required/>
            <label className="signUp__consent" for="checkbox_1">Wyrażam zgodę na przetwarzanie swoich danych osobowych oraz wysłanie informacji dot. webinaru</label>
          </div>
          <span>

          </span>
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
