import React from "react";
import "./navbaar.css";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../context/ContextProvider";
const Navbaar = () => {
  const { account, setAccount } = useContext(LoginContext);
  console.log(account);

  return (
    <header>
      <nav>
        <div className="left">
          <div className="navlogo">
            <NavLink to="/">
              {" "}
              <img src="./logo.jpg" alt="" />
            </NavLink>
          </div>
          <div className="nav_searchbaar">
            <input type="text" name="" id="" />
            <div className="search_icon"> 
              <SearchIcon id="search" />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="nav_btn">
            <NavLink to="./signin">signin</NavLink>
          </div>
          <div className="cart_btn">
            {account ? (
              <NavLink to="/buynow">
                <Badge badgeContent={account.cart.length} color="primary">
                  <ShoppingCartIcon id="icon" />
                </Badge>
              </NavLink>
            ) : (
              <NavLink to="/signin">
                <Badge badgeContent={0} color="primary">
              <ShoppingCartIcon id="icon" />
            </Badge>
              </NavLink>
            )}

            <p>Cart</p>
          </div>
          {account ? 
            <Avatar className="avtar">{account.fname[0].toUpperCase()}</Avatar>
           : 
            <Avatar className="avtar"></Avatar>
          }
        </div>
      </nav>
    </header>
  );
};

export default Navbaar;
