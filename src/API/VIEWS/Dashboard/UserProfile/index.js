import React, { useState, useContext } from "react";
import "./userprofile.style.css";
import { SampleContext } from "../../../Context";
import { MdKeyboardBackspace } from "react-icons/md";

function UserProfile() {
  const [PasswordToogle, setPasswordToogle] = useState(false);
  const { storage } = useContext(SampleContext);
  const { username, gmail } = storage ? storage : "";
  let intialState = {
    username,
    gmail,
    newpassword: "",
    oldpassword: "",
  };
  const [state, Setstate] = useState(intialState);

  const ShowChangePassword = () => {
    if (PasswordToogle === false) {
      setPasswordToogle(true);
    } else if (PasswordToogle === true) {
      setPasswordToogle(false);
    }
  };

  let hideShow = PasswordToogle ? { display: "block" } : { display: "none" };
  let showHide = PasswordToogle ? { display: "none" } : { display: "block" };
  return (
    <div className="user-profile-container">
      <div className="user-profile-sub-container">
        <div className="image-div">
          <img className="user-profile-image" src="" alt=""></img>
          {/* <input type="file" accept="image/*" /> */}
        </div>
        <div style={showHide} className="input-div" id="pad-left-right">
          <div>
            <label id="label">UserName:</label>
            <input
              className="userinput"
              type="text"
              placeholder={username}
              name="userName"
              value=""
              onFocus={(e) => (e.target.value = state.username)}
            />
          </div>
          <div>
            <label id="label">Email:</label>
            <input
              className="userinput"
              type="text"
              placeholder={gmail}
              name="email"
              onFocus={(e) => (e.target.value = state.gmail)}
            />
          </div>
        </div>
        <div className="change-password-btn-div" id="pad-left-right">
          {PasswordToogle ? (
            <div onClick={ShowChangePassword} className="arrowback">
              {" "}
              <MdKeyboardBackspace color="black" width={60} height={20} />
              back
            </div>
          ) : (
            <h3 className="change-password-btn" onClick={ShowChangePassword}>
              ChangePassword
            </h3>
          )}

          <button style={showHide} className="btn-submit">
            Submit
          </button>
        </div>

        {/* change password div */}

        <div
          style={hideShow}
          className="password-input-div"
          id="pad-left-right"
        >
          <div>
            <label id="label">Old Password:</label>
            <input
              className="userinput"
              type="password"
              placeholder={""}
              name="old password"
            />
          </div>
          <div>
            <label id="label">New Password:</label>
            <input
              className="userinput"
              type="password"
              placeholder={""}
              name="new password"
            />
          </div>
          <div className="change-password-btn-div">
            <button className="btn-submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
