import React from 'react';
import Post from './Post';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Comments</h1>
                
                <Post title ="Post 1"/>
                <hr/>
                <Post title ="Post 2"/>
                <hr/>
                <Post title ="Post 3"/>
                <hr/>
            </div>
        );
    }
}