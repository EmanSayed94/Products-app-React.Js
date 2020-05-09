import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Register extends Component {
  state = {
    account: {
      email: "",
      username: "",
      firstName: "",
      password: "",
      confirmPassword: "",
    },
    errors: [{}],
    match: false,
  };
  handleChange = (e) => {
    console.log(e.target.name);
    const account = { ...this.state.account };
    account[e.target.name] = e.target.value;
    console.log(account);
    this.setState({ account });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    // const { password, confirmPassword } = this.state.account;
    // const match = password === confirmPassword ? true : false;

    const EndPointApi = "http://localhost:3000/user/register";
    const res = await axios
      .post(EndPointApi, this.state.account)
      .catch((err) => {
        const errors = err.response.data.details;

        console.log(errors);
        this.setState({ errors });
      });
    console.log(res);
    if (res) this.props.history.replace("/home");
  };

  // handleErrors = () => {
  //   // this.state.errors[0].param=="email"?console.log(this.state.errors[0].msg)
  //   // console.log();
  // };
  render() {
    const {
      username,
      password,
      confirmPassword,
      firstName,
      email,
    } = this.state.account;
    const { errors } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <form className="login">
            <h4 className="login__header">Register An Account</h4>
            <div className="form-group">
              <label htmlFor="">E-mail Address</label>

              <input
                className="form-control"
                type="text"
                name="email"
                id=""
                value={email}
                onChange={this.handleChange}
              />
              {errors.map((err) =>
                err.param === "email" ? (
                  <div className="error">{err.msg}</div>
                ) : null
              )}
            </div>
            <div className="form-group">
              <label htmlFor="">username</label>
              <input
                className="form-control"
                type="text"
                name="username"
                id=""
                value={username}
                onChange={this.handleChange}
              />
              {errors.map((err) =>
                err.param === "username" ? (
                  <div className="error">{err.msg}</div>
                ) : null
              )}
            </div>
            <div className="form-group">
              <label htmlFor="">firstName</label>
              <input
                className="form-control"
                type="text"
                name="firstName"
                id=""
                value={firstName}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="">Password</label>
                <input
                  className="form-control"
                  type="text"
                  name="password"
                  id=""
                  value={password}
                  onChange={this.handleChange}
                />
                {errors.map((err) =>
                  err.param === "password" ? (
                    <div className="error">{[err.msg]}</div>
                  ) : null
                )}
              </div>
              <div className="form-group">
                <label htmlFor="">Re-enter Password</label>
                <input
                  className="form-control"
                  type="text"
                  name="confirmPassword"
                  id=""
                  value={confirmPassword}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="login__remember-me">
              <div className="add-product__actions">
                <button href="#" className="btn btn--gray">
                  Cancel
                </button>
                <Link
                  to="/home"
                  className="btn btn--primary"
                  onClick={this.handleSubmit}
                >
                  Register
                </Link>
              </div>
            </div>
            <Link to="/login" className="login__register-now">
              You are alredy a member?
            </Link>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
