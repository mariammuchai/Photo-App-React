import React from 'react';
import {getHeaders} from './utils.js';


class Suggestion extends React.Component {  

    constructor(props) {
        super(props);
        this.state = {
            model: this.props.model
        }
        console.log("Passed into Post.js by Posts.js", this.state.model);

        this.requerySuggestion = this.requerySuggestion.bind(this);
        
    }

    requerySuggestion() {
        // console.log('requery post');
        // console.log('when fetch comes back with the post, set the state to trigger the redraw');
        fetch('api/suggestions/' + this.props.model.id, {
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
    const suggestion = this.state.model;
    console.log('Suggestion.js component is rendering', suggestion);
    return (
       
        <section id="recommended_profiles">
            <section class="profile_sample">
                <img id="img_placeholder" src={suggestion.image_url} alt="profile pic for"/> 
    
                <section class="profile_names">
                    <span>{suggestion.username}</span>
                    <span>suggested for you</span>
                    
                </section>
                <a href="#">follow</a>
            </section>
        </section>
       
    );     
        
}
}

export default Suggestion;