import React, { Component } from "react";
import "./register.styles.css";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };
  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onSubmitSignIn = (event) => {
    fetch("https://face-finder-backend.onrender.com/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    return (
      <article className='glass-register br3 ba b--black-10 shadow-5 center'>
        <main className='pa4 black-80'>
          <div className='measure'>
            <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
              <legend className='f1 fw6 ph0 mh0'>register</legend>
              <div className='mt3'>
                <label className='db fw6 lh-copy f4' htmlFor='email-address'>
                  name
                </label>
                <input
                  className='pa2 b--black f4 input-reset ba bg-transparent hover-bg-transparent hover-white w-100 outline-0'
                  style={{ outline: "none", color: "black" }}
                  type='text'
                  name='name'
                  id='name'
                  onChange={this.onNameChange}
                />
              </div>
              <div className='mt3'>
                <label className='db fw6 lh-copy f4' htmlFor='email-address'>
                  email
                </label>
                <input
                  className='pa2 b--black f4 input-reset ba bg-transparent hover-bg-transparent hover-white w-100 outline-0'
                  style={{ outline: "none", color: "black" }}
                  type='email'
                  name='email-address'
                  id='email-address'
                  onChange={this.onEmailChange}
                />
              </div>
              <div className='mv3'>
                <label className='db fw6 lh-copy f4' htmlFor='password'>
                  password
                </label>
                <input
                  className='b pa2 b--black f4 input-reset ba bg-transparent hover-bg-transparent hover-white w-100 outline-0'
                  style={{ outline: "none", color: "black" }}
                  type='password'
                  name='password'
                  id='password'
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className=''>
              <input
                onClick={this.onSubmitSignIn}
                className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib'
                type='submit'
                value='register'
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;
