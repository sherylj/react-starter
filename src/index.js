import React from 'react';
import ReactDOM from 'react-dom';
import BasicExample from './app';

const Index = () => {
	return <div>Hello React! </div>
}

ReactDOM.render(<BasicExample />, document.getElementById('index'));