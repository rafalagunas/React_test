import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      empty: true,
      submit: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.setState({submit: true});

    if (this.state.value != ''){
    this.setState({empty: false});

  }

  else{
    alert('No name was submitted');
    this.setState({empty: true});
  }
    event.preventDefault();
  }

  render() {
    const isEmpty = this.state.empty;
    const isSubmit = this.state.submit;

    let texto = null;

    if  (isSubmit){
      texto = <span>{this.state.value} </span>
    }



    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>
        <span> Tu nombre es {texto} </span>
      </div>
      </div>


    );
  }
}
ReactDOM.render(<App />,
  document.getElementById('root')
);
