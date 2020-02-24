import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Container from '@material-ui/core/Container'
import { Button, ButtonGroup, Grid, Paper } from '@material-ui/core';

class App extends Component {
  state = {
    orgName: "Amnesty International",
    orgLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/Amnesty_International_logo.svg/1200px-Amnesty_International_logo.svg.png"
  }
  render() {
    return (
      <div className="App">
        <div className="app-logo">
          <span id="agora">Agora </span>
          <span id="donate">Donate</span>
        </div>
        <Paper className="main-panel" elevation={4}>
          <Container>
            <div>
                <img src={this.state.orgLogo} className="org-logo" alt="logo" />
            </div>
            <h2>Your Donation to {this.state.orgName}</h2>
            <div className="donation-picker">
              <h4>Choose Amount</h4>
              <ButtonGroup size="large" color="primary">
                <Button>$1</Button>
                <Button>$5</Button>
                <Button>$10</Button>
                <Button>$25</Button>
                <Button>$50</Button>
                <Button>Custom</Button>
              </ButtonGroup>
            </div>
          </Container>
          <div className="close-btn">
            <Button size="large" color="secondary" variant="contained">Cancel</Button>
          </div>
        </Paper>
      </div>
    );
  }
}

export default App;
