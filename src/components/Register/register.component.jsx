import React, { Component } from "react";
import "./register.styles.css";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      isNameValid: true,
      isEmailValid: true,
      isPasswordValid: true,
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

  onSubmitRegister = (event) => {
    event.preventDefault();
    if (this.validateInput()) {
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
    }
  };

  validateInput = () => {
    const { name, email, password } = this.state;
    let isNameValid = true;
    let isEmailValid = true;
    let isPasswordValid = true;
    if (!name) {
      isNameValid = false;
    }
    if (
      !email ||
      !email.includes("@") ||
      !email.includes(".") ||
      email.length < 5 ||
      email.length > 100
    ) {
      isEmailValid = false;
    }
    if (!password) {
      isPasswordValid = false;
    }
    this.setState({ isNameValid, isEmailValid, isPasswordValid });
    return isNameValid && isEmailValid && isPasswordValid;
  };

  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      this.onSubmitRegister(event);
    }
  };

  render() {
    const { isNameValid, isEmailValid, isPasswordValid } = this.state;
    return (
      <article className='glass-register br3 ba b--black-10 shadow-5 center'>
        <main className='pa4 black-80'>
          <div className='measure'>
            <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
              <legend className='f1 fw6 ph0 mh0'>Register</legend>
              <div className={`mt3 ${isNameValid ? "" : "invalid"}`}>
                <label className='db fw6 lh-copy f4' htmlFor='name'>
                  name
                </label>
                <input
                  className={`pa2 b--black f4 input-reset ba bg-transparent hover-bg-transparent hover-white w-100 outline-0 ${
                    isNameValid ? "" : "invalid"
                  }`}
                  style={{ outline: "none", color: "black" }}
                  type='text'
                  name='name'
                  id='name'
                  onChange={this.onNameChange}
                />
                {!isNameValid && <p className='f6 red'>invalid name</p>}
              </div>
              <div className={`mt3 ${isEmailValid ? "" : "invalid"}`}>
                <label className='db fw6 lh-copy f4' htmlFor='email-address'>
                  email
                </label>
                <input
                  className={`pa2 b--black f4 input-reset ba bg-transparent hover-bg-transparent hover-white w-100 outline-0 ${
                    isEmailValid ? "" : "invalid"
                  }`}
                  style={{ outline: "none", color: "black" }}
                  type='email'
                  name='email-address'
                  id='email-address'
                  onChange={this.onEmailChange}
                />
                {!isEmailValid && <p className='f6 red'>invalid email</p>}
              </div>
              <div className={`mv3 ${isPasswordValid ? "" : "invalid"}`}>
                <label className='db fw6 lh-copy f4' htmlFor='password'>
                  password
                </label>
                <input
                  className={`b pa2 b--black f4 input-reset ba bg-transparent hover-bg-transparent hover-white w-100 outline-0 ${
                    isPasswordValid ? "" : "invalid"
                  }`}
                  style={{ outline: "none", color: "black" }}
                  type='password'
                  name='password'
                  id='password'
                  onChange={this.onPasswordChange}
                  onKeyDown={this.handleKeyDown}
                />
                {!isPasswordValid && <p className='f6 red'>invalid password</p>}
              </div>
            </fieldset>
            <div className=''>
              <input
                onClick={this.onSubmitRegister}
                className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib'
                type='submit'
                value='register'
              />
            </div>
            <div className='lh-copy mt3'>
              <p>
                Already have an account?{" "}
                <span
                  onClick={() => this.props.onRouteChange("signin")}
                  href='#0'
                  className='link dim blue pointer underline'
                  style={{ marginTop: "3.5rem" }}
                >
                  Sign in now
                </span>
              </p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;
