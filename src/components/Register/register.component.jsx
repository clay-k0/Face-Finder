import React, { Component } from "react";

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
    fetch("http://localhost:3000/register", {
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
          marginTop: "6rem",
          width: "auto",
        }}
      >
        <main className='pa4 black-80'>
          <div className='measure'>
            <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
              <legend className='f1 fw6 ph0 mh0'>Register</legend>
              <div className='mt3'>
                <label className='db fw6 lh-copy f4' htmlFor='email-address'>
                  Name
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
                  Email
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
                  Password
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
                value='Register'
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;
