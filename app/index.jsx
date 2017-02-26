import React from 'react';
import {render} from 'react-dom';

import TestComponent from './components/TestComponent.jsx';

class App extends React.Component {
  render () {
    return (
	    <div>
	    	<h1>React Boilerplate</h1>
	    	<TestComponent />
	    </div>
	)};
}

render(<App/>, document.getElementById('app'));