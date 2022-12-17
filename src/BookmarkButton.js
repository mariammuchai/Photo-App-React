import React from 'react';
import {getHeaders} from './utils.js'


class BookmarkButton extends React.Component {  

    constructor(props) {
        super(props);

        //in order for this bookmark button to work, need to give it two pieces of data
        //1. whether or not the current post is bookmarked (bookmarkId)
        //2. which post to bookmark / unbookmark (postId)
        this.toggleBookmark = this.toggleBookmark.bind(this);
        this.bookmark = this.bookmark.bind(this);
        this.unbookmark = this.unbookmark.bind(this);
        
    }

    toggleBookmark (ev) {
        console.log('toggleBookmark');
        if(this.props.bookmarkId) {
            this.unbookmark();
        } else {
            this.bookmark();
        }
    }
    
    bookmark () {
        console.log('bookmark');
        fetch('/api/bookmarks', {
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

    unbookmark () {
        console.log('unbookmark');
        fetch('/api/bookmarks/' + this.props.bookmarkId, {
            headers: getHeaders(),
            method: "DELETE"
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.props.requeryPost();
        });
        
    }


render () {
    const bookmarkId = this.props.bookmarkId;
    return (
        <button onClick={this.toggleBookmark}
        aria-checked={bookmarkId ? true : false}>
            <i className={ bookmarkId ? 'fas fa-bookmark' : 'far fa-bookmark'}></i>
        </button>
        
    );     
        
}
}

export default BookmarkButton;