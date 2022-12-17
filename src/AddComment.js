import React from 'react';
import {getHeaders} from './utils.js'


class AddComment extends React.Component {  

    constructor(props) {
        super(props);
        this.comment = this.comment.bind(this);
    }

    comment () {
        console.log('comment');
        fetch('/api/comments', {
            headers: getHeaders(),
            method: "POST",
            body: JSON.stringify({post_id: this.props.postId})
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.props.requeryPost();
        });
    }


render () {
    console.log('Comment Rendering...', this.state)
    return (
        <section>
        {/* <div class="comments">
                
                    <p><button class="link">View all {this.props.post.comments|length } comments</button></p>
                
                
                <p class="timestamp">{ this.props.post.display_time}</p>
            </div> */}
        <div class="add-comment">
            <div class="input-holder">
                <input type="text" aria-label="Add a comment" placeholder="Add a comment..."/>
            </div>
            <button class="link">Post</button>
        </div>
        </section>
    )
}
}

export default AddComment;