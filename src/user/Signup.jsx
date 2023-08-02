import { useState } from "react";
import "./Users.css";

export default function Signup() {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    email: "",
    fullName: "",
  });
  const signup = (ev) => {
    ev.preventDefault();
    fetch("https://api.shipap.co.il/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((data) => {
      if (data.status === "success") {
        console.log();
      }
    });
  };
  const handelInput = (ev) => {
    const { name, value } = ev.target;
    const obj = {
      ...formData,
      [name]: value,
    };
    setFormData(obj);
  };
  return (
    <div>
      <p>הרשמה</p>
      <form onSubmit={signup}>
        <label>
          שם משתמש:
          <input
            name="userName"
            type="text"
            value={formData.userName}
            onChange={handelInput}
          />
        </label>
        <label>
          סיסמא:
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handelInput}
          />
        </label>
        <label>
          אימל:
          <input
            name="email"
            type="text"
            value={formData.email}
            onChange={handelInput}
          />
        </label>
        <label>
          שם מלא:
          <input
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handelInput}
          />
        </label>
        <button>אישור</button>
      </form>
    </div>
  );
}
