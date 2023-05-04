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
      errorMessage: "",
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
          } else {
            this.setState({
              errorMessage: "email or password is incorrect. please try again.",
            });
          }
        })
        .catch((error) => {
          console.log(error);
          this.setState({
            errorMessage: "an error occurred. please try again later.",
          });
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
    const { isEmailValid, isPasswordValid, errorMessage } = this.state;
    return (
      <article className='glass-sign-in br3 ba b--black-10 shadow-5 center'>
        <main className='pa4 black-80'>
          <div className='measure'>
            <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
              <legend className='f1 fw6 ph0 mh0'>Sign In</legend>
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
            {errorMessage && <p className='f6 red'>{errorMessage}</p>}
            <div className=''>
              <input
                onClick={this.onSubmitSignIn}
                className='f3 ph3 b--black pv2 input-reset ba b--black bg-transparent grow pointer dib'
                type='submit'
                value='Log in'
              />
            </div>
            <div className='lh-copy mt3'>
              <p>
                Don't have account?{" "}
                <span
                  onClick={() => onRouteChange("register")}
                  href='#0'
                  className='link dim blue pointer underline'
                  style={{ marginTop: "3.5rem" }}
                >
                  Register
                </span>
              </p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default SignIn;
