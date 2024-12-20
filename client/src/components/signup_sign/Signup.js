import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [udata, setUdata] = useState({
    name: "",
    email: "",
    Mobile: "",
    password: "",
    Cpassword: "",
  });

  const adddata = (e) => {
    const { name, value } = e.target;

    setUdata({
      ...udata,
      [name]: value,
    });
  };

  const senddata = async (e) => {
    e.preventDefault();
    const { name, email, Mobile, password, Cpassword } = udata;

    if (name === "") {
      toast.warn("Please enter your name", { position: "top-center" });
    } else if (email === "") {
      toast.warn("Please enter your email", { position: "top-center" });
    } else if (Mobile === "") {
      toast.warn("Please enter your Mobile", { position: "top-center" });
    } else if (password === "") {
      toast.warn("Please enter your password", { position: "top-center" });
    } else if (Cpassword === "") {
      toast.warn("Please enter your Confirm Password", { position: "top-center" });
    } else {
      try {
        const res = await fetch("register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            Mobile,
            password,
            Cpassword,
          }),
        });

        if (!res.ok) {
          toast.warning("Invalid details", { position: "top-center" });
        } else {
          const data = await res.json();
          toast.success("Data added successfully", { position: "top-center" });
          setUdata({
            name: "",
            email: "",
            Mobile: "",
            password: "",
            Cpassword: "",
          });
        }
      } catch (error) {
        toast.error("Something went wrong", { position: "top-center" });
      }
    }
  };

  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src="./logo.jpg" alt="amazonlogo" />
        </div>
        <div className="sign_form">
          <form method="POST">
            <h1>Sign-Up</h1>
            <div className="form_data">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={adddata}
                value={udata.name}
                placeholder="Enter your name"
              />
            </div>
            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={adddata}
                value={udata.email}
                placeholder="Enter your email"
              />
            </div>
            <div className="form_data">
              <label htmlFor="Mobile">Mobile Number</label>
              <input
                type="tel"
                name="Mobile"
                id="Mobile"
                onChange={adddata}
                value={udata.Mobile}
                placeholder="+91 1234567891"
              />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={adddata}
                value={udata.password}
                placeholder="Enter your password"
              />
            </div>
            <div className="form_data">
              <label htmlFor="Cpassword">Confirm Password</label>
              <input
                type="password"
                name="Cpassword"
                id="Cpassword"
                onChange={adddata}
                value={udata.Cpassword}
                placeholder="Confirm Password"
              />
            </div>
            <button className="signin_btn" onClick={senddata}>
              Continue
            </button>
            <div className="signin_info">
              <p>Already have an account?</p>
              <NavLink to="/signin">Signin</NavLink>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Signup;
