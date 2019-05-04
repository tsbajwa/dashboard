import React from "react";
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
      <form onSubmit={this.handleSubmit}>
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
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default Form;
