import React from 'react';
import axios from 'axios';
import './index.css';

class App extends React.Component {
  state = {
    advice: '',
  }

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;

        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <div className="flex flex-col h-screen justify-between bg-solid">
          <h1 className='bg-black text-white text-center p-3.5 mb-2'>Motivation Quote Generator</h1>
          <div className="flex flex-col justify-center items-center flex-grow">
            <div className='text-center'>
              <h1 className="text-4xl font-medium">{this.state.advice}</h1>
            </div>
            <div className='flex nter justify-center mt-5 '>
              <button className="text-white font-medium p-3 rounded bg-gradient-to-l from-indigo-700 to-pink-700 hover:" onClick={this.fetchAdvice}>Load Another</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default App;
