const { default: FormField } = require("./Form");
import dynamic from 'next/dynamic';


import React, {useState, useEffects} from 'react';


class ValidForm extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        fields: {},
        errors: {},
      };
      this.myRef = React.createRef();
    }
  
    handleValidation() {
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;
  
      //Name
      if (!fields["name"]) {
        formIsValid = false;
        errors["name"] = "Cannot be empty";
      }
  
      if (typeof fields["name"] !== "undefined") {
        if (!fields["name"].match(/^[a-zA-Z]+$/)) {
          formIsValid = false;
          errors["name"] = "Only letters";
        }
      }
  
      //Email
      if (!fields["email"]) {
        formIsValid = false;
        errors["email"] = "Cannot be empty";
      }
  
      if (typeof fields["email"] !== "undefined") {
        let lastAtPos = fields["email"].lastIndexOf("@");
        let lastDotPos = fields["email"].lastIndexOf(".");
  
        if (
          !(
            lastAtPos < lastDotPos &&
            lastAtPos > 0 &&
            fields["email"].indexOf("@@") == -1 &&
            lastDotPos > 2 &&
            fields["email"].length - lastDotPos > 2
          )
        ) {
          formIsValid = false;
          errors["email"] = "Email is not valid";
        }
      }
  
      this.setState({ errors: errors });
      return formIsValid;
    }
  
    contactSubmit(e) {
      e.preventDefault();
  
      if (this.handleValidation()) {
        alert("Success");
      } else {
        alert("Form has errors, pls confirm the details");
      }
    }
  
    handleChange(field, e) {
      let fields = this.state.fields;
      fields[field] = e.target.value;
      this.setState({ fields });
    }
    
  }
  
  export default ValidForm;
      