import React, { Component } from "react";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signInEmail: "",
      signInPassword: "",
    };
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignIn = (event) => {
    fetch("http://localhost:3001/signin", {
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
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <article
        className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center'
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          color: "#fff",
          margin: "20px auto",
          padding: "20px",
          textAlign: "center",
          marginTop: "12rem",
          fontStyle: "italic",
        }}
      >
        <main className='pa4 black-80'>
          <div className='measure'>
            <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
              <legend className='f1 fw6 ph0 mh0'>Sign In</legend>
              <div className='mt3'>
                <label className='db fw6 lh-copy f4' htmlFor='email-address'>
                  Email
                </label>
                <input
                  onChange={this.onEmailChange}
                  className='pa2 b--black f4 input-reset ba bg-transparent hover-bg-transparent w-100 outline-0'
                  style={{ outline: "none", color: "black" }}
                  type='email'
                  name='email-address'
                  id='email-address'
                />
              </div>
              <div className='mv3'>
                <label className='db fw6 lh-copy f4' htmlFor='password'>
                  Password
                </label>
                <input
                  onChange={this.onPasswordChange}
                  className='b pa2 b--black f4 input-reset ba bg-transparent hover-bg-transparent w-100 outline-0'
                  style={{ outline: "none" }}
                  type='password'
                  name='password'
                  id='password'
                />
              </div>
            </fieldset>
            <div className=''>
              <input
                onClick={this.onSubmitSignIn}
                className='b ph3 b--black f4 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib'
                type='submit'
                value='Sign in'
                style={{ fontStyle: "italic" }}
              />
            </div>
            <div className='lh-copy mt3'>
              <p
                onClick={() => onRouteChange("register")}
                href='#0'
                className='f4 link dim black db pointer'
                style={{ paddingTop: "2rem" }}
              >
                Register
              </p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default SignIn;
