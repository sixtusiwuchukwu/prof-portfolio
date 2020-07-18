import React, { useState, useContext } from "react";
import { SampleContext } from "../../context/globalState";
import "../../../styles/dashboardstyles/loginform.css";

const Adminlogin = (props) => {
  const { activeuser, Updatestate } = useContext(SampleContext);
  const { history } = props;

  const resetinput = {
    email: "",
    password: "",
  };

  const [user, Setuser] = useState(resetinput);

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
    await Updatestate(user);
    history.push("/admin/dashboard");
  };

  return (
    <div>
      <div className="bg-img">
        <form onSubmit={Handlesubmit}>
          <div className="login_container">
            <h1>Admin Login</h1>
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <br />
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
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
            <button type="submit" className="btn">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Adminlogin;
