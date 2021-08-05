import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            padding: 0,
          }}
        >
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              position: "absolute",
              left: "16px",
            }}
            activeStyle={{ fontWeight: "bold" }}
            isActive={(_, location) => location.pathname === "/"}
          >
            Home
          </NavLink>
          <NavLink
            to="/local-state"
            style={{ textDecoration: "none" }}
            activeStyle={{ fontWeight: "bold" }}
          >
            Local state
          </NavLink>
          <NavLink
            to="/lifted-state"
            style={{ textDecoration: "none" }}
            activeStyle={{ fontWeight: "bold" }}
          >
            Lifted state
          </NavLink>
          <NavLink
            to="/web-storage"
            style={{ textDecoration: "none" }}
            activeStyle={{ fontWeight: "bold" }}
          >
            Web storage
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
