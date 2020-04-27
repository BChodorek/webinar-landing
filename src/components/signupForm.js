import React, { Component } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

export default class signupForm extends Component {
  state = {}


  componentDidUpdate(prevState, state) {

  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  _handleSubmit = (e) => {
    e.preventDefault();

    console.log('submit', this.state);

    addToMailchimp(this.state.email, {
          FNAME: this.state.name,
          PHONE: this.state.phone,
        })
        .then(({ msg, result }) => {
            if (result !== 'success') {
                throw msg;
            }
            console.log(msg);
            this.setState({msg});
            document.querySelector('.signup').reset();
            return false;
        })
        .catch(err => {
          if (err.includes('already subscribed')){
            this.setState({err: 'Już zapisałeś się na to wydarzenie.'});
          }
        });
}

  render() {
    return (
      <>
      {this.state.err && <p className="signUp__message">this.state.err</p>}
        {this.state.msg && <p className="signUp__message">Dziękujemy za zapisanie się na wydarzenie!</p>}
      <form class="signUp" id="signup" onSubmit={this._handleSubmit}>
        <label>
          Imię
          <input placeholder="Twoje imię" type="text" name="name" id="name" required onChange={this.handleInputChange}/>
        </label>
        <label>
          E-mail
          <input placeholder="example@gmail.com" type="email" name="email" id="email" required onChange={this.handleInputChange}/>
        </label>
        <label>
          Telefon
          <input placeholder="000-111-000" type="tel" name="phone" id="phoneNumber" required onChange={this.handleInputChange}/>
        </label>

        <button class="button signUp__button" type="submit">
          Wyślij
        </button>
      </form>
      </>
    )
  }
}
