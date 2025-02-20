import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      {/* Logo and Title */}
      <div style={styles.logoContainer}>
        <Link to="/">
          <img 
            src="/assets/logo.png" 
            alt="BlueQbit Logo" 
            style={styles.logo} 
          />
        </Link>
        <h1 style={styles.title}>
            <span style={styles.portalText}>Portal</span>
        </h1>
      </div>

      {/* Navigation Links */}
      <div style={styles.links}>
        <Link to="/register" style={styles.link}>Register</Link>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/dashboard" style={styles.link}>Dashboard</Link>
      </div>
    </nav>
  );
};

// Styles
const styles = {
  navbar: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '220px', // Set navbar height to 220px
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Optional: Add shadow
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px', // Space between logo and title
  },
  logo: {
    height: '225px', // Adjust the height as needed
    width: 'auto',  // Maintain aspect ratio
    transition: 'opacity 0.3s ease', // Smooth transition for hover
  },
  title: {
    margin: 0, // Remove default margin from h1
    fontSize: '24px', // Adjust font size as needed
  },
  links: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px', // Adjust font size as needed
    padding: '10px 15px', // Add padding for better click area
    borderRadius: '5px', // Rounded corners
    transition: 'background-color 0.3s ease', // Smooth transition for hover
  },
  // Hover effects
  'logo:hover': {
    opacity: 0.8, // Slight fade on hover
  },
  'link:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Light background on hover
  },
  // Optional: Responsive styles
  '@media (max-width: 768px)': {
    navbar: {
      height: 'auto', // Auto height for mobile
      flexDirection: 'column', // Stack logo and links vertically
      padding: '20px', // Increase padding for mobile
    },
    logo: {
      height: '50px', // Smaller logo for mobile
    },
    title: {
      fontSize: '20px', // Smaller title for mobile
    },
    links: {
      flexDirection: 'column', // Stack links vertically
      gap: '10px', // Reduce gap for mobile
    },
    link: {
      fontSize: '16px', // Smaller font size for mobile
    },
  },
};

export default Navbar;