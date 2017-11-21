import React from 'react';
import { version } from '../../package.json';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: null };
  }

  render() {
    if (this.state.currentUser === null) {
      return (
        <footer className="footer">
          <h5>Guest User v{version}</h5>
        </footer>
      );
    }
    else {
      return (
        <footer className="footer">
          <h5>{this.state.currentUser} Logged In v{version}</h5>
        </footer>
      );
    }
  }
};