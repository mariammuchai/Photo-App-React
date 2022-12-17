import React from 'react';
import {getHeaders} from './utils.js'
class Stories extends React.Component {  

    constructor(props) {
        super(props);
        // constructor logic
        this.state = {
            stories: []
        }
        // constructor logic
        console.log('Stories component created');
        this.getStories();
    }

    componentDidMount() {
        // fetch posts
        console.log('Stories component mounted');
    }

    getStories() {
        fetch('/api/stories', {
            headers: getHeaders()
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            //when you update the state, you trigger the render
            this.setState({
                stories: data
            })
            
        })
    }
    render () {
        console.log('Stories Rendering...', this.state)
        return (
            <section class="story_panel">
            {
                    this.state.stories.map(story => {
                    return (
                    <div class="user_story">
                    <img id="img_placeholder" src={story.user.image_url} alt="profile pic for"/>  
                    <span>{story.user.username}</span>
                </div>  ) }
                    )
            }
            </section>
    )
    }
}

export default Stories;