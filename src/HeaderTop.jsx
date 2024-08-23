

const HeaderTop = () => {
  return (
    <div id="HeaderTop" style={headerTopStyle}>
      <div style={imgContainerStyle}>
        <img src="./image.png" alt="no logo present" style={imgStyle} />
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

export default HeaderTop;
