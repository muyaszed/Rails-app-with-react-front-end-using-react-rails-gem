import React, {Component} from 'react';

class PostList extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			posts: this.props.post
		}
	}

	render() {
		return(
			<div>
				{this.state.posts.map(function(post) {
					return (
						<div key={post.id}>
						<h3>{post.title}</h3>
						<p>{post.content}</p>
						</div>
					);
				})}
			</div>
		);
	}
}

export default PostList;