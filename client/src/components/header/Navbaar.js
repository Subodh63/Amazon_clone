import React, { useState, useContext } from "react";
import "./navbaar.css";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../context/ContextProvider";
import Modal from "@mui/material/Modal"; // For showing user details

const Navbaar = () => {
  const { account, setAccount } = useContext(LoginContext);
  const [open, setOpen] = useState(false); // For managing modal visibility
  const [newPassword, setNewPassword] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handlePasswordChange = async () => {
    // You can send this password to the backend and update the user data
    setAccount({
      ...account,
      password: newPassword,
    });
    setNewPassword(""); // Reset the password input
    handleClose(); // Close the modal after password change
  };

  return (
    <header>
      <nav>
        <div className="left">
          <div className="navlogo">
            <NavLink to="/">
              <img src="./logo.jpg" alt="Logo" />
            </NavLink>
          </div>
          <div className="nav_searchbaar">
            <input type="text" placeholder="Search..." />
            <div className="search_icon">
              <SearchIcon id="search" />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="nav_btn">
            <NavLink to="/signin">Sign In</NavLink>
          </div>
          <div className="cart_btn">
            <NavLink to={account ? "/buynow" : "/signin"}>
              <Badge badgeContent={account?.cart?.length || 0} color="primary">
                <ShoppingCartIcon id="icon" />
              </Badge>
            </NavLink>
            <p>Cart</p>
           </div>
          <div className="user_icon" onClick={handleOpen}>
            {account ? (
              <Avatar className="avatar">
                {account.fname?.[0]?.toUpperCase() || "U"}
              </Avatar>
            ) : (
              <Avatar className="avatar">U</Avatar>
            )}
          </div> 
{/* <Avatar className='avatar'>
  {account && account.fname ? account.fname[0].toUpperCase() : ''}
</Avatar> */}

        </div>
      </nav>

      {/* Modal for user details */}
      {/* Modal for user profile */}
      <Modal open={open} onClose={handleClose}>
        <div className="profile_modal">
          <h2>User Profile</h2>
          <div className="profile_info">
            <p>Name: {account?.fname || "Guest"}</p>
            <p>Email: {account?.email || "N/A"}</p>
            <div className="password_change">
              <input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button onClick={handlePasswordChange}>Change Password</button>
            </div>
          </div>
        </div>
      </Modal>
    </header>
  );
};

export default Navbaar;
