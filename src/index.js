import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './App';
import './index.css';
import CounterApp from './components/CounterApp';
const divRoot=document.querySelector('#root');

ReactDOM.render(<CounterApp value="xddd" />, divRoot);