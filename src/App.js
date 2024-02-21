import React from 'react';
import sideImage from './Side.png'; 
import customize from './Customize.png';
import threat from './Threat.png';

const App = () => {
  const containerStyle = {
    backgroundColor: '#E6F9FB',
    margin: 0,
    height: '100vh', // Set the container to the full height of the viewport
    overflowX: 'hidden', // Hide horizontal overflow
    display: 'flex', // Use flexbox for layout
  };

  const leftImageStyle = {
    height: '103%',
    width: '30%',
    position: 'relative',
    top: 0,
    left: 0,
    padding: '40px',
  };

  const rightContentStyle = {
    flex: 1, // Take up remaining space in the flex container
    marginLeft: '1%', // Adjust based on the desired gap
    padding: '40px', // Adjust as needed
    display: 'flex',
    flexDirection: 'column',
    width: '40%',
  };

  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
  };

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '301.5px',
    padding: '20px',
    borderRadius: '16px',
    border: '0px solid #414584',
    background: 'var(--Colour-Card, linear-gradient(97deg, #171717 -62.94%, #323335 -62.92%, rgba(90, 90, 90, 0.00) 54.42%, #171717 174.24%))',
    backdropFilter: 'blur(25px)',
    margin:  '20px',
  };

  const cardContentStyle = {
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '23px',
    fontFeatureSettings: "'clig' off, 'liga' off",
    marginTop: '10px',
  };

  const textstyle2={
    color: '#414584', fontFamily: 'Poppins', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeight: '23px', fontFeatureSettings: "'clig' off, 'liga' off", marginTop: '10px',
  }

  return (
    <div style={containerStyle}>
      <div style={leftImageStyle}>
        <img src={sideImage} alt="Your Image Alt Text" style={{ width: '100%', height: '100%' }} />
      </div>

      <div style={rightContentStyle}>
        <div style={{ color: 'var(--Accent-1, #3ED5DD)', fontFamily: 'Titillium Web', fontSize: '21px', fontStyle: 'normal', fontWeight: 600, lineHeight: '24px' }}>
          FEATURE POINT
        </div>

        <div style={{ color: '#414584', fontFamily: 'Titillium Web', fontSize: '67px', fontStyle: 'normal', fontWeight: 600, lineHeight: '70px', textTransform: 'capitalize', marginTop: '10px' }}>
          Key Service Features Protecting You
        </div>

        <div style={{ color: '#414584', fontFamily: 'Poppins', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeight: '23px', fontFeatureSettings: "'clig' off, 'liga' off", marginTop: '10px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa.
        </div>

        <div style={cardContainerStyle}>
          <div style={cardStyle}>
          <img src={customize} alt="Customize Icon" style={{ width: '64px', height: '64px' }} />
          <span style={{ ...cardContentStyle, alignSelf: 'stretch', color: '#414584', fontFamily: 'Titillium Web', fontSize: '28px', fontStyle: 'normal', fontWeight: 600, lineHeight: '32px' }}>
              Customized Security Solutions
            </span>
            <p style={textstyle2}>
              Additional text with specified styles.
            </p>

          </div>
          <div style={cardStyle}>
          <img src={threat} alt="Customize Icon" style={{ width: '64px', height: '64px' }} />
          <span style={{ ...cardContentStyle, alignSelf: 'stretch', color: '#414584', fontFamily: 'Titillium Web', fontSize: '28px', fontStyle: 'normal', fontWeight: 600, lineHeight: '32px' }}>
          Vulnerability Assessment
            </span>
            <p style={textstyle2}>              Additional text with specified styles.
            </p>
          </div>
          <div style={cardStyle}>
          <img src={threat} alt="Customize Icon" style={{ width: '64px', height: '64px' }} />
          <span style={{ ...cardContentStyle, alignSelf: 'stretch', color: '#414584', fontFamily: 'Titillium Web', fontSize: '28px', fontStyle: 'normal', fontWeight: 600, lineHeight: '32px' }}>
          24/7<br></br> Incident Response
            </span>
            <p style={textstyle2}>              Additional text with specified styles.
            </p>
          </div>
          <div style={cardStyle}>
          <img src={threat} alt="Customize Icon" style={{ width: '64px', height: '64px' }} />
          <span style={{ ...cardContentStyle, alignSelf: 'stretch', color: '#414584', fontFamily: 'Titillium Web', fontSize: '28px', fontStyle: 'normal', fontWeight: 600, lineHeight: '32px' }}>
          User Training Programs
            </span>
            <p style={textstyle2}>              Additional text with specified styles.
            </p>
          </div>

          <div style={{  textAlign: 'left', color: '#323377', fontFamily: 'Titillium Web', fontSize: '90px', fontStyle: 'normal', fontWeight: 700, lineHeight: '100%', letterSpacing: '-0.9px', marginTop: '30px', marginLeft: '5px' }}>
          Our Products
        </div>
        </div>
      </div>
      
    </div>
  );
};

export default App;