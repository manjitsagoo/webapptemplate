import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null };
  }

  render() {
    return (
      <div>
        <h4>Welcome to Test App.</h4>
      </div>
    );
  }
};
