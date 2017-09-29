import React, { Component } from 'react';
import NewButton from './new_button';
import PostForm from './post_form';
import PostList from './post_list';



class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
			showForm: false,
			posts: this.props.posts,
			title: "Your title",
			content: "Your content",
		};
		
		this.openForm = this.openForm.bind(this);
		this.handleUserInput = this.handleUserInput.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		
	}

	openForm() {
		
		this.setState({
			showForm: true
		});
		
	};

	handleUserInput(obj) {
		this.setState(obj);
	};

	handleFormSubmit() {
		let post = {title: this.state.title, content: this.state.content}
		
		$.post('/posts',
				{post: post})
				.done(function(data) {
					this.addNewPost(data);
					
				}.bind(this));
	};

	addNewPost(post) {
		
		let posts = this.state.posts;
		
		posts.push(post);
		this.setState({
			posts: posts
		});
		
	};

	

	render() {
		return(
			<div>
				<div id="header"> 
					<h1>Welcome To My World {this.props.name}</h1>
				</div>
				<NewButton openForm={this.openForm} />

				{
					this.state.showForm ? <PostForm onFormSubmit={this.handleFormSubmit} inputTitle={this.state.title} inputContent={this.state.content} onUserInput={this.handleUserInput}/> : null
				}
				
				<PostList post={this.state.posts}/>
				
			</div>
		);
	}
}



export default Home;


