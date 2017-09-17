import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NewButton from './new_button';

class Home extends Component {
	render() {
		return(
			<div>
				<div id="header"> 
					<h1>Welcome To My World</h1>
				</div>
				<NewButton />
			</div>
		);
	}
}



document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})


