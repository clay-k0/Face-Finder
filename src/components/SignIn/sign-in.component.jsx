import React, { Component } from "react";
import "./sign-in.styles.css";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signInEmail: "",
      signInPassword: "",
      isEmailValid: true,
      isPasswordValid: true,
    };
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignIn = (event) => {
    event.preventDefault();
    if (this.validateInput()) {
      fetch("https://face-finder-backend.onrender.com/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.state.signInEmail,
          password: this.state.signInPassword,
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
    const { signInEmail, signInPassword } = this.state;
    let isEmailValid = true;
    let isPasswordValid = true;
    if (
      !signInEmail ||
      !signInEmail.includes("@") ||
      !signInEmail.includes(".") ||
      signInEmail.length < 5 ||
      signInEmail.length > 100
    ) {
      isEmailValid = false;
    }
    if (!signInPassword) {
      isPasswordValid = false;
    }
    this.setState({ isEmailValid, isPasswordValid });
    return isEmailValid && isPasswordValid;
  };

  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      this.onSubmitSignIn(event);
    }
  };

  render() {
    const { onRouteChange } = this.props;
    const { isEmailValid, isPasswordValid } = this.state;
    return (
      <article className='glass-sign-in br3 ba b--black-10 shadow-5 center'>
        <main className='pa4 black-80'>
          <div className='measure'>
            <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
              <legend className='f1 fw6 ph0 mh0'>sign in</legend>
              <div className={`mt3 ${isEmailValid ? "" : "invalid"}`}>
                <label className='db fw6 lh-copy f4' htmlFor='email-address'>
                  email
                </label>
                <input
                  onChange={this.onEmailChange}
                  className={`pa2 b--black f4 input-reset ba bg-transparent hover-bg-transparent w-100 outline-0 ${
                    isEmailValid ? "" : "invalid"
                  }`}
                  style={{
                    outline: "none",
                    color: "black",
                  }}
                  type='email'
                  name='email-address'
                  id='email-address'
                />
                {!isEmailValid && <p className='f6 red'>invalid email</p>}
              </div>
              <div className={`mv3 ${isPasswordValid ? "" : "invalid"}`}>
                <label className='db fw6 lh-copy f4' htmlFor='password'>
                  password
                </label>
                <input
                  onChange={this.onPasswordChange}
                  className={`pa2 b--black f4 input-reset ba bg-transparent hover-bg-transparent outline-0 ${
                    isPasswordValid ? "" : "invalid"
                  }`}
                  type='password'
                  name='password'
                  id='password'
                  onKeyDown={this.handleKeyDown}
                />
                {!isPasswordValid && <p className='f6 red'>invalid password</p>}
              </div>
            </fieldset>
            <div className=''>
              <input
                onClick={this.onSubmitSignIn}
                className='f3 ph3 b--black pv2 input-reset ba b--black bg-transparent grow pointer dib'
                type='submit'
                value='sign in'
              />
            </div>
            <div className='lh-copy mt3'>
              <p
                onClick={() => onRouteChange("register")}
                href='#0'
                className='link dim black pointer'
                style={{ marginTop: "3.5rem" }}
              >
                register
              </p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default SignIn;
