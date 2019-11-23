import React, { Component } from "react";
import "./Complex.css";
import puce from "../../assets/puce.png";
import visa from "../../assets/visa.png";
import InputMask from "react-input-mask";

export default class Complex extends Component {
  state = {
    number: "",
    name: "",
    validity: ""
  };

  nameChange = nm => {
    if (!nm.target.value.match(/[0-9]/g)) {
      this.setState({
        name: nm.target.value
      });
    }
  };

  nbChange = nb => {
    if (!nb.target.value.match(/[^0-9]/g)) {
      this.setState({
        number: nb.target.value
      });
    }
  };

  espace = () => {
    let x = this.state.number.split("");
    return (
      x.slice(0, 4).join("") +
      "     " +
      x.slice(4, 8).join("") +
      "      " +
      x.slice(8, 12).join("") +
      "     " +
      x.slice(12, 16).join("")
    );
  };

  changeHandler = e => {
    let pattern = new RegExp("^(0[1-9]|1[0-2]|[1-9])/([0-1][0-9]|2[0-2])$");
    let validity = e.target.value;
    var isValid = pattern.test(validity);
    if (isValid) {
      this.setState({
        validity: e.target.value,
        validityIsValid: isValid
      });
    }
  };

  render() {
    return (
      <div className="form-card">
        <div className="Card">
          <h1 className="title">CREDIT CARD</h1>
          <img src={puce} className="puce"></img>

          <div className="footer">
            <div className="footer-card">
              <div>
                <span className="number">{this.espace()}</span>

                <div className="card-details">
                  <span className="name">
                    {" "}
                    {this.state.name.toUpperCase()}{" "}
                  </span>

                  <p className="Year">{this.state.validity}</p>
                </div>
              </div>
            </div>
            <img src={visa} className="visaPosition"></img>
          </div>
        </div>

        <div className="change-coordonnée">
          <label className="label">Number</label>
          <input
            className="coordonnée"
            type="text"
            maxlength="16"
            onChange={this.nbChange}
            // value={this.state.number}
          />

          <label className="label">Name</label>
          <input
            className="coordonnée"
            type="text"
            maxlength="20"
            onChange={this.nameChange}
            // value={this.state.name}
          />

          <label className="label">Valid Through</label>
          <InputMask
            className="coordonnée"
            mask="99/99"
            defaultValue="12/19"
            onChange={this.changeHandler}
          />
        </div>
      </div>
    );
  }
}
