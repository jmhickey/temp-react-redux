import React from 'react';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This application uses React, Redux, React Router and a variety of other libraries.</p>
        <p>To switch to using the standalone mock REST endpoint (with generated data), append the URL
           query parameter &quot;useMockApi=true&quot; to the URL. (Note: this option is only available in development builds.)</p>
      </div>
    );
  }
}

export default AboutPage;
