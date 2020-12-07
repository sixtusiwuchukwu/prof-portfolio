import React, { useState } from "react";
import "./adminlogin.style.css";
import { LOGIN } from "../../../graphql/Mutation";
import { useMutation } from "@apollo/client";

const Adminlogin = (props) => {
  const { history } = props;
  const [adminLogin, { data, error, loading }] = useMutation(LOGIN);

  const resetinput = {
    gmail: "",
    password: "",
  };

  const [user, Setuser] = useState(resetinput);
  const [btn, Setbtn] = useState(false);
  const [inputError, SetinputError] = useState(false);

  const Showpassword = () => {
    let x = document.querySelector("#password");

    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  const Handleinput = (e) => {
    const { name, value } = e.target;
    Setuser({ ...user, [name]: value });
  };

  const Handlesubmit = async (e) => {
    e.preventDefault();
    if (user.gmail.length < 5 || user.password.length < 5) {
      SetinputError(true);
      return false;
    }
    adminLogin({ variables: user });
    Setbtn(true);
  };

  if (loading) {
    document.querySelector(".btn").innerHTML = "submitting...";
  }
  if (data) {
    document.querySelector(".btn").innerHTML = "submitted";
    window.sessionStorage.setItem("token", data.adminLogin);

    history.push("/admin/dashboard");
  }

  if (error) console.log(error, "error");
  return (
    <div>
      <div className="bg-img">
        <form>
          <div className="login_container">
            <h1>Admin Login</h1>
            <label htmlFor="gmail">
              <b>Email</b>
            </label>
            <br />
            <input
              type="text"
              placeholder="Enter Email"
              name="gmail"
              required
              onChange={Handleinput}
            />
            <br />
            <label htmlFor="pswd">
              <b>Password</b>
            </label>
            <br />
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              required
              id="password"
              onChange={Handleinput}
            />
            <input type="checkbox" onClick={Showpassword} />
            show password
            <br />
            <button onClick={Handlesubmit} disabled={btn} className="btn">
              Login
            </button>
          </div>
          {inputError ? (
            <h3
              style={{
                color: "gray",
                fontFamily: "safri",
                width: "100%",
                wordWrap: "break-word",
                textAlign: "center",
                margin: "0",
              }}
            >
              gmail and password length must be greather than 5
            </h3>
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  );
};

export default Adminlogin;
