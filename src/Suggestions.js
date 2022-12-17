import React from 'react';
import {getHeaders} from './utils.js'
import Suggestion from './Suggestion.js';
class Suggestions extends React.Component {  
    constructor(props) {
        super(props);
        // constructor logic
        this.state = {
            suggestions: []
        }
        // constructor logic
        console.log('Posts component created');
        this.getSuggestions();
    }

    componentDidMount() {
        // fetch posts
        console.log('Suggestions component mounted');
    }

    getSuggestions() {
        fetch('/api/suggestions', {
            headers: getHeaders()
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            //when you update the state, you trigger the render
            this.setState({
                suggestions: data
            })
            
        })
    }

    render () {
        return (
            <div id="suggestions">
        {
                this.state.suggestions.map(suggestion => {
                return <Suggestion model={suggestion} key={'suggestion-' + suggestion.id}/>
                })
        }
         </div>
        )     
    }
}

export default Suggestions;