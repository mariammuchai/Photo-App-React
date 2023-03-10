import React from 'react';
import LikeButton from './LikeButton';
import {getHeaders} from './utils.js';
import BookmarkButton from './BookmarkButton.js';
import AddComment from './AddComment.js';

class Post extends React.Component {  

    constructor(props) {
        super(props);
        this.state = {
            model: this.props.model
        }
        console.log("Passed into Post.js by Posts.js", this.state.model);

        this.requeryPost = this.requeryPost.bind(this);
        
    }

    requeryPost() {
        // console.log('requery post');
        // console.log('when fetch comes back with the post, set the state to trigger the redraw');
        fetch('api/posts/' + this.props.model.id, {
            headers: getHeaders()
        })
        .then(response => response.json())
        .then(data => {
            console.log('Updated post:', data);
            // after we retrieve the data, we need to redraw the component
            this.setState({
                model: data
            })
        })
    }


render () {
    const post = this.state.model;
    console.log('Post.js component is rendering', post);
    return (
        <section className="card">
            <div className="header">
                <h3>{ post.user.username }</h3>
                <i className="fa fa-dots"></i>
            </div>
            
            <img 
                src={ post.image_url } 
                alt={'Image posted by ' +  post.user.username } 
                width="300" 
                height="300" />
            
            <div className="info">
                <div>
                    <LikeButton likeId={post.current_user_like_id}
                    postId={post.id}
                    requeryPost={this.requeryPost}/>
                    <BookmarkButton bookmarkId={post.current_user_bookmark_id}
                    postId={post.id}
                    requeryPost={this.requeryPost}/>
                    <AddComment postId={post.id}
                    requeryPost={this.requeryPost}/>

                </div>
                <p>{ post.caption }</p>
            </div>
        </section> 
    );     
        
}
}

export default Post;