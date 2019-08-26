import React from "react";
//import { NavLink } from 'react-router-dom';


export default function NavPage() {
  return (
    <section className="nav-page">
      <div className="nav-top">
      <img
        className="logo-image"
        src='https://via.placeholder.com/75'
        alt="logo"
      />
        <h3>What would you like to do?</h3>
      </div>
      <div className="nav-box">
        <div className="nav-options">
          <img
            className="icon-image"
            src='../img/rent-item-icon.png'
            alt="rent item icon"
          />
          <p>Rent Item</p>
        </div>

        <div className="nav-options">
          <img
            className="icon-image"
            src='../img/lend-item-icon.png'
            alt="lend item icon"
          />
          <p>Lend Item</p>
        </div>

        <div className="nav-options">
          <img
            className="icon-image"
            src='../img/inbox-icon.png'
            alt="Inbox icon"
          />
          <p>Inbox</p>
        </div>

        <div className="nav-options">
          <img
            className="icon-image"
            src='../img/profile-icon.png'
            alt="Profile icon"
          />
          <p>Profile</p>
        </div>

        <div className="nav-options">
          <img
            className="icon-image"
            src='../img/explore-icon.png'
            alt="Explore icon"
          />
          <p>Explore</p>
        </div>

        <div className="nav-options">
          <img
            className="icon-image"
            src='../img/customer-icon.png'
            alt="Customer Service icon"
          />
          <p>Customer Service</p>
        </div>
      </div>

    </section>
  );
}