import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const showOne = false;

// Use A container to pass 2 item
const testFunction = () => {
  return (
    <div>
      <button>TTTT</button>
      <h1>{(showOne === true) ? 1 : 0}</h1>
    </div>
  )
}

ReactDOM.render(
  testFunction(),
  // <h1>Test12345</h1>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <p>test txt</p>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('txt')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
