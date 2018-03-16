import React, { Component } from "react";
import CreditForm from './components/CreditForm';


class Home extends Component {
  render() {
    return (
      <div>
        <h2>Personal Credit application</h2>
        <p>Welcome to DemoBank automatic Credit Simulator.</p>
        <p>Please follow through the application process. It will take you less then five minutes and it will provide an official credit proposal, ready to be accepted. Your personal funding might be just 5 minutes away</p>
        <h2>Step 1 - Funding purpose and values:</h2>
        <br />
        <CreditForm />
      </div>
    );
  }
}

export default Home;
