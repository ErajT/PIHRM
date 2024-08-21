// import React from 'react';

const HeaderTop = () => {
  return (
    <div id="HeaderTop" style={headerTopStyle}>
      <div style={imgContainerStyle}>
        <img src="./image.jpg" alt="no logo present" style={imgStyle} />
      </div>
    </div>
  );
};

// Inline styles for the div and img
const headerTopStyle = {
  height: '7vh',
  backgroundColor: 'rgb(188, 212, 231)',
  display: 'flex',
  alignItems: 'center', // Center the content vertically
  position: 'relative', // Ensure absolute positioning works correctly
};

const imgContainerStyle = {
  flex: '1',
  display: 'flex',
  justifyContent: 'center', // Center the image horizontally
};

const imgStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
  width: 'auto',
  height: 'auto',
};

export default HeaderTop;
