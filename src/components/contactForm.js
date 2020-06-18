import React, { Component } from "react";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { fullName: "", job: "", company: "", phone: "", country: "" };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: [e.target.value] });
  }

  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Full Name"
              value={this.state.fullName}
              onChange={(e) => this.handleChange(e)}
              name="fullName"
            />
          </div>
          <div className="form-group">
            <label htmlFor="job">Job</label>
            <input
              type="text"
              className="form-control"
              id="job"
              placeholder="Job"
              name="job"
              value={this.state.job}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="Phone Number"
              name="phone"
              value={this.state.phone}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              className="form-control"
              id="company"
              placeholder="Company"
              name="company"
              value={this.state.company}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              className="form-control"
              id="country"
              placeholder="Name of your Country for example to get long,lat coordinates"
              name="country"
              value={this.state.country}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-default"
            onClick={(e) => {
              e.preventDefault();
              this.props.addContact(this.state);
              this.setState({
                fullName: "",
                job: "",
                company: "",
                phone: "",
                country: "",
              });
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
