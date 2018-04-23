import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import styled from 'styled-components';
import Label from '../shared/Label';
import FormInput from '../shared/FormInput';

class SignUpForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      organization: ''
    };
  }

  handleChange = (event) => {
    const obj = {};
    obj[event.target.name] = event.target.value;
    console.log(event.target.name);
    console.log(event.target.value)
    this.setState(obj);
  }

  render() {
    return(
      <Form>
        <PrettyForm>
          {/* <FormInput required={true}
          txt='first name' 
          value={this.state.firstName} 
          onChange={this.handlechange} />
          
          <FormInput required={true}
          txt='last name' 
          value={this.state.lastName} 
          onChange={this.handlechange} />

          <FormInput required={true}
          txt='organization' 
          value={this.state.organization} 
          onChange={this.handlechange} /> */}

          <FormInput required={true}
          txt='email' 
          value={this.state.email} 
          onChange={this.handleChange} />

          <FormInput required={true}
          txt='password' 
          value={this.state.password} 
          onChange={this.handleChange} />

          <FormInput required='true'
          txt='confirm password'
          placeholder="confirm your password"
          type='password' />
          <Form.Button>Submit</Form.Button>
        </PrettyForm>
      </Form>
   
    )
  }
}

const PrettyForm = styled.div`
  display: block;
  justify-content: center;
  padding: 20px;
  margin-top: 60px;
`

export default SignUpForm;