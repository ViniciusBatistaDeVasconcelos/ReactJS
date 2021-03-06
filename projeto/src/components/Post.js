import React from 'react';
import Comment from './Comment';

export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            newCommentText: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }


    handleSubmit(event) {
        this.setState({
            comments:[
                ...this.state.comments,
                {text: this.state.newCommentText}
            ]
        });
        this.setState({newCommentText: ''});
        event.preventDefault();
    }


    handleTextChange(event) {
        this.setState({ newCommentText: event.target.value })
    }

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.newCommentText} onChange={this.handleTextChange} />
                    <button type="submit">Comentar</button>
                </form>
                
                {this.state.comments.map((comment, index) => {
                    return <Comment key={index} text={comment.text} />
                })}
            </div>
        );
    }
}