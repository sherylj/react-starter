import React from 'react';
import ReactDOM from 'react-dom';
import BasicExample from './app';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

const Index = () => {
	return <div>Hello React! </div>
}

ReactDOM.render(<BasicExample />, document.getElementById('index'));