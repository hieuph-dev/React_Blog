import "./Settings.css";
import SideBar from "../../Components/SideBar/SideBar";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settings-wrapper">
        <div className="settings-title">
          <span className="settings-update-title">Update Your Account</span>
          <span className="settings-delete-title">Delete Account</span>
        </div>
        <div className="settings-form">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="file-input">
              <i className="settingsPP-Icon fa-regular fa-circle-user"></i>
            </label>
          </div>
          <input type="file" id="file-input" style={{ display: "none" }} />
          <label>Username</label>
          <input type="text" placeholder="Hieu Pham" />
          <label>Email</label>
          <input type="email" placeholder="hieupham250201@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settings-submit">Update</button>
        </div>
      </div>
      <SideBar />
    </div>
  );
};

export default Settings;
