import React from "react";
import { Link, Outlet } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import mainLogo from "./images/navBarLogo.png";
import "./navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <p class="navbar-brand mt-2 mt-sm-0">
            <img
              src={mainLogo}
              height="60"
              alt="EazyMart Logo"
              loading="lazy"
            />
            <div>EazyMart</div>
          </p>

          <p class="nav-item nav-link">
            <img
              src="https://img.icons8.com/color/512/dashboard-layout.png"
              height="60"
              alt="Dashboard Logo"
              loading="lazy"
            />
            Dashboard: Admin
          </p>
        </div>

        <div class="d-flex align-items-center">
          <div class="d-flex align-items-center">
            <button type="button" class="btn btn-outline-primary me-4">
              Sign Out
            </button>
          </div>
          <div class="dropdown">
            <img
              src="https://img.icons8.com/arcade/512/user-female-circle.png"
              class="rounded-circle"
              height="55"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
          </div>
          <div class="d-flex align-items-center">
            {/* <Link to = "/admincontrol"> */}
            <button type="button" class="btn btn-primary me-4">
              Admin
            </button>
            {/* </Link> */}
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
