import React, { Component } from 'react';

class NewButton extends Component {
	constructor(props) {
		super(props);
		

		
	}

	

	render() {
		return(
			<button className="post-button" onClick={this.props.openForm}>New Post</button>
		);
	}
}

export default NewButton;