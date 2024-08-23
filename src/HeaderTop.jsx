

const HeaderTop = () => {
  return (
    <div id="HeaderTop" style={headerTopStyle}>
      <div style={imgContainerStyle}>
        <img src="./image.png" alt="no logo present" style={imgStyle} />
      </div>
      <div>
        <button style={buttonStyle}>
          Contact Us
        </button>
      </div>
    </div>
  );
};

// Inline styles for the div and img
const headerTopStyle = {
  height: '60px',
  backgroundColor: 'rgb(188, 212, 231)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const imgContainerStyle = {
  flex: '1',
  display: 'flex',
  justifyContent: 'center',
};

const imgStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
  width: 'auto',
  height: '60px',
};

const buttonStyle = {
  height: '70%',
  padding: '10px 20px',
  margin: '20px',
  backgroundColor: 'darkblue', // Dark blue background color
  color: 'white', // White text color
  border: 'none', // No border
  borderRadius: '10px', // Rounded corners
  cursor: 'pointer', // Pointer cursor on hover
};

export default HeaderTop;
