// import React from 'react';
import PropTypes from 'prop-types';

// Custom Card component
const Card = ({ title, children, imageSrc }) => {
  const cardStyle = {
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    margin: '10px',
    backgroundColor: '#fff',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '15px 15px 0 0', // Rounded top corners for the image
  };

  return (
    <div style={cardStyle}>
      {imageSrc && <img src={imageSrc} alt={title} style={imageStyle} />}
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  imageSrc: PropTypes.string, // Optional prop for the image source
};

// Custom Section component for vertical layout
const VerticalSection = ({ children, style }) => {
  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
    ...style,
  };

  return <div style={sectionStyle}>{children}</div>;
};

VerticalSection.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

// Custom Section component for horizontal layout
const HorizontalSection = ({ children }) => {
  const sectionStyle = {
    display: 'flex',
    backgroundColor: 'rgb(207, 183, 135)',
    flexDirection: 'row',
    justifyContent: 'space-between',
  };

  return <div style={sectionStyle}>{children}</div>;
};

HorizontalSection.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom Grid component for news layout
const NewsGrid = ({ children }) => {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '2px',
    width: '100%',
  };

  return <div style={gridStyle}>{children}</div>;
};

NewsGrid.propTypes = {
  children: PropTypes.node.isRequired,
};

// Main Page Component
const SecondPage = () => {
  return (
    <HorizontalSection>
      {/* Vision, Mission, Values Section */}
      <VerticalSection style={{ flex: 1 }}>
        <Card title="Vision">
          <p>PIHRM aims to be the Centre of Excellence, shaping the future of the Human Resource and Industrial Relations professionals, empowering to lead with excellence, innovation, integrity, and inclusivity.
          </p>
        </Card>
        <Card title="Mission">
        <p>
          PIHRM is dedicated to elevating the standards of HR and IR practices by:<br />
          • PIHRM provides research, advocacy, and representation to promote the standing of the HR and profession and engender its best practices within workplaces.<br />
          • Cultivating a deep understanding of HR/IR policies and strategic applications.<br />
          • Mentoring and empowering the next generation of HR/IR leaders.<br />
          • Pioneering research and development to address contemporary HR challenges.<br />
          • Setting the benchmark for HR/IR education, training, and professional conduct.<br />
          • Facilitating a collaborative environment for knowledge exchange and professional growth.<br />
        </p>
        </Card>
        <Card title="Values">
        <p>
          • Integrity: Upholding the highest ethical standards in all our endeavors.<br />
          • Excellence: Striving for superior performance and continuous improvement.<br />
          • Collaboration: Encouraging teamwork and shared knowledge to achieve common goals.<br />
          • Innovation: Embracing change and creativity to drive HR/IR practices forward.<br />
          • Inclusivity: Fostering a culture of diversity and respect within the HR community.<br />
        </p>
        </Card>
      </VerticalSection>

      {/* News Section */}
      <div style={{ flex: 2 , marginTop: '20px'}}>
        <NewsGrid>
        <Card 
            title="Tech’s Controlling Payroll Errors, But There’s Room to Improve"
            imageSrc="https://media.istockphoto.com/id/1366137792/photo/business-persons-on-meeting-in-the-office.jpg?s=612x612&w=0&k=20&c=0ya-nb5-ksH44xHreYxOOva9Hku1xcA7LtbfTxeSzNE="
          >
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi at sunt repellat nulla. Amet, vitae distinctio eos id suscipit laboriosam.</p>
          </Card>
          <Card 
            title="ATS Solutions: 4 Ways to Make Recruitment Chaos Simple"
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjSMzdYTA1eV8H5UwCVoSxewWbNOuIAnpNNYehykbFpDo_1-dx__keabTMBQiSVxy4eIk&usqp=CAU"
          >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolor voluptas illo doloremque quis incidunt, eveniet unde maiores voluptatem soluta!</p>
          </Card>
        </NewsGrid>
      </div>
    </HorizontalSection>
  );
}

export default SecondPage;
