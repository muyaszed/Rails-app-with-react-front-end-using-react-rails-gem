import React, { Component } from 'react';


class PostForm extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		let name = e.target.name;
		let obj = {};
		obj[name] = e.target.value;
		this.props.onUserInput(obj);
	};

	handleSubmit(e) {
		e.preventDefault();
		this.props.onFormSubmit();
	};

	render() {
		return(
			<form className="post-form" onSubmit={this.handleSubmit}>
				<label>
					Title
				</label>
				<input type="text" name="title" value={this.props.inputTitle} onChange={this.handleChange}/>
				<label>
					Content
				</label>
				<input type="text" name="content" value={this.props.inputContent} onChange={this.handleChange} />
				<button type="submit" className="">Submit post</button>
			</form>
		);
	}
}

export default PostForm;