import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <h1>BlueSea Platform</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/register">Register</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;