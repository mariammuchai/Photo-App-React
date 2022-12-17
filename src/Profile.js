import React from 'react';
import {getHeaders} from './utils.js'

class Profile extends React.Component {  

    constructor(props) {
        super(props);
        this.state = {
            profile: []
        }
        // constructor logic
        console.log('Profile component created');
        this.getProfile();
    }

    componentDidMount() {
        // fetch posts
        console.log('Profile component mounted');
    }

    getProfile() {
        fetch('/api/profile/', {
            headers: getHeaders()
        }).then(response => response.json())
        .then(data => {
            console.log('data from fetch request', data);
            //when you update the state, you trigger the render
            this.setState({
                profile: data
            })
            
        })
    }

    render () {
        // const profile = this.state.model;
        console.log('Profile.js component is rendering', this.state);
        return (
            <section id="profile_pic">
            <img id="img_placeholder" src={this.state.profile.image_url} alt="profile pic for"/>
    
            <h3 id="gib">{this.state.profile.username}</h3>  
        </section>
        );
    }
}

export default Profile;