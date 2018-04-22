import React from 'react';
import { Form } from 'semantic-ui-react';

const FormInput = (props) => {
  let name;
  const txt = props.txt;
  let splitName = txt.split(' ');
  if (splitName.length === 1) name = splitName[0];  
  name = splitName.map((str, i) => i !== 0 ? str[0].toUpperCase() + str.slice(1) : str).join('')

  return (
  <Form.Field>
    <label>{props.txt}</label>
    <input 
      placeholder={`Please enter your ${props.txt}`} 
      name={name}
      value={props.value}       
      onChange={props.onChange}/>
  </Form.Field>);
}  

export default FormInput;