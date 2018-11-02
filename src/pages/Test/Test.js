import React, { Component } from 'react';
import Main from './components/Main'
export default class Test extends Component {
  static displayName = 'Test';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home-page">
        <Main />
      </div>
    );
  }
}