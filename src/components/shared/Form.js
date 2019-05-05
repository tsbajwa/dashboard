import React from "react";
import styled from 'styled-components/macro';
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

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setInitialFormState();
  };

  render() {
    return (
      <__Form onSubmit={this.handleSubmit}>
        <__Inputs>
        {
          this.props.formFields.map(field => (
            <span key={field}>
              <label>{field}</label>
              <input
                type="text"
                name={field}
                value={this.state[field] || ""}
                onChange={this.handleInputChange}
                required
              />
            </span>
          ))
        }
        </__Inputs>
        <__Submit>
          <button type="submit" value="submit">Add Project</button>
        </__Submit>
      </__Form>
    );
  }
}

export default Form;


const __Form = styled.form`
  max-width: 960px;
  margin-bottom: 3rem;
`;

const __Submit = styled.div`
  display: flex;
  justify-content: center;

  > button {
    padding: 0.5rem 1rem;
    background: lightblue;
    color: white;

    &:hover {
      cursor: pointer;
    }
  }
`;

const __Inputs = styled.div`
  display: flex;
  flex-wrap: wrap;

  span {
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 33%;
    margin-bottom: 1rem;
    margin-right: 0.2rem;
  }

  input {
    height: 30px;
    font-size: 14px;
  }
`;