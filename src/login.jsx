import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Login extends Component {
  state = {
    account: { email: "", password: "" },
    error: "",
  };
  componentDidMount() {
    if (localStorage.getItem("token")) {
      localStorage.clear();
    }
  }
  handleChange = (e) => {
    console.log(e.target.name);
    const account = { ...this.state.account };
    account[e.target.name] = e.target.value;
    console.log(account);
    this.setState({ account });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const EndPointApi = "http://localhost:3000/user/login";
    let error = this.state.error;
    const response = await axios
      .post(EndPointApi, this.state.account)
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data.message);
          console.log(err.response.status);
          console.log(err.response.headers);
          error = err.response.data.message;
          this.setState({ error });
        }
      });
    if (response) {
      const { data } = response;
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      this.props.history.push("/home");
    }
  };
  render() {
    const { email, password } = this.state.account;
    const { error } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <form className="login">
            <h4 className="login__header">I'M A RETURNING CUSTOMER</h4>
            <div className="form-group">
              <label htmlFor=""> E-mail Address</label>
              <input
                className="form-control"
                type="text"
                name="email"
                id=""
                value={email}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group login__Password">
              <a href="#" className="login__forget-password">
                (Forget Password?)
              </a>
              <label htmlFor="">Password</label>
              <input
                className="form-control"
                type="text"
                name="password"
                id=""
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <div className="login__remember-me">
              <div className="form-group__checkbox">
                {error && (
                  <div className="error">Wrong E-mail Address or Password</div>
                )}
              </div>
              <div className="add-product__actions">
                <Link to="/home" className="btn btn--gray">
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="btn btn--primary"
                  onClick={this.handleSubmit}
                >
                  Login
                </button>
              </div>
            </div>
            <Link to="/register" className="login__register-now">
              Register Now
            </Link>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
