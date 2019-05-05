import React from "react";
import Button from "../shared/Button";
import styled from "styled-components/macro";
class Form extends React.Component {
  state = {};

  componentDidMount() {
    this.setInitialFormState();
  }

  setInitialFormState = () => {
    const initialState = {};

    this.props.formFields.forEach(field => {
      initialState[field] = "";
    });

    this.setState(initialState);
  };

  handleInputChange = event => {
    const { value, name } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state);
    this.setInitialFormState();
  };

  render() {
    return (
      <__Form onSubmit={this.handleSubmit}>
        <__Inputs>
          {this.props.formFields.map(field => (
            <span key={field}>
              <label>{field}</label>
              <input
                type="text"
                name={field}
                value={this.state[field] || ""}
                onChange={this.handleInputChange}
              />
            </span>
          ))}
        </__Inputs>
        <__BtnContainer>
          <Button cancel onClick={this.props.onCancel}>
            Cancel
          </Button>
          <Button onClick={this.handleSubmit}>Add Project</Button>
        </__BtnContainer>
      </__Form>
    );
  }
}

export default Form;

const __Form = styled.form`
  width: 100%;
  margin-top: 2rem;
`;

const __BtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const __Inputs = styled.div`
  display: flex;
  flex-wrap: wrap;

  span {
    display: flex;
    flex-direction: column;
    align-items: left;
    flex: 1 1 20%;
    margin-bottom: 1rem;
    margin-right: 0.5rem;
  }

  input {
    height: 30px;
    font-size: 14px;
  }
`;
