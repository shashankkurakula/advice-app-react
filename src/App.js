import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  state = {
    advice: '',
    loading: true,
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = async () => {
    const response = await axios.get('https://api.adviceslip.com/advice');
    const { advice } = response.data.slip;

    this.setState({ advice, loading: false });
  };

  render() {
    if (this.state.loading) {
      return (
        <div className='lds-ellipsis'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      );
    } else {
        return (
            <div className="app">
              <div className="card">
                <h1 className="heading">{this.state.advice}</h1>
                <button className="button" onClick={this.fetchAdvice}>
                  <span>GIVE ME ADVICE!</span>
                </button>
              </div>
            </div>
          );
    }
  }
}

export default App;
