import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard = (props) => {
  const { resName, cuisine } = props;
  console.log(props);
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://b.zmtcdn.com/data/dish_photos/818/943ccb1366e01405d5a1e0376e576818.jpeg?output-format=webp"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.3 stars</h4>
      <h4>36 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* restaurant card */}
        <RestaurantCard
          resName="Shimla Dhaba"
          cuisine="Biryani, North Indian, Asian"
        />
        <RestaurantCard resName="KFC" cuisine="Burger, Fast Foods" />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      {/* 1st HEADER  */}
      <Header />
      {/* 2nd Body */}
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
