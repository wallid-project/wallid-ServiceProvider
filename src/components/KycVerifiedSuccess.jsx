import React from "react";
import { withSwalInstance } from 'sweetalert2-react';
import swal from 'sweetalert2';

const SweetAlert = withSwalInstance(swal);

class KycVerifiedSuccess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popup: false,
    };
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form>
        <div class="form-group">
          <h2>
            Step 5 - Submit your application
          </h2>
          <p>
            Your identity attributes were successfully verified by Wallid.
          </p>
          <p>
            You can now submit your application to personal credit with Credibank.
          </p>
        </div>
        <SweetAlert
          show={this.state.popup}
          title="Thank you"
          text="Thank you for applying to a personal credit with CrediBank.
          We sent you our official proposal to your email."
          confirmButtonColor = "#FFCC00"
          onConfirm={() => this.setState({ popup: false })}
          />
        <button onClick={() => this.setState({ popup: true })}>Submit</button>
      </form>
    );
  }
}

export default KycVerifiedSuccess;
