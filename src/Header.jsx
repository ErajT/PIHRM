// import React from 'react';

function Header() {
  return (
    <div style={headerStyle}>
      <img src="./PIHRM-logo.png" alt="no logo found" style={imgStyle} />
      <div style={headerHeadingsStyle}>
        <div><h4 style={headingStyle}>About Us</h4></div>
        <div><h4 style={headingStyle}>Membership</h4></div>
        <div><h4 style={headingStyle}>Leadership & Development</h4></div>
        <div><h4 style={headingStyle}>Contact Us</h4></div>
        <div><h4 style={headingStyle}>Events and Education</h4></div>
        <div><h4 style={headingStyle}>Community</h4></div>
      </div>
    </div>
  );
}

const headerStyle = {
  width: '100%',
  height: '10vh',
  backgroundColor: 'rgb(141, 155, 157)',
  display: 'flex',
};

const headerHeadingsStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  paddingLeft: '0.5%',
  paddingRight: '0.5%',
};

const imgStyle = {
  margin: '0',
  padding: '0',
};

const headingStyle = {
  color: 'white', // White text color
  fontFamily: 'Arial, sans-serif', // Good font family
  fontSize: '1.2em', // Slightly larger text size
  margin: '0',
};

export default Header;
