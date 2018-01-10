import React from 'react';
import axios from 'axios';

import './style.css';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentWillMount() {
        let currentComponent = this;
		axios.get('https://jsonplaceholder.typicode.com/users')
			.then(function (response) {
				currentComponent.setState({
					  users: response.data
    			})
			})
			.catch(function (error) {
				console.log(error);
			});
    }

    getUserName(userId) {
        for( var i in this.state.users) {
            if( this.state.users[i].id === userId ) {
                return this.state.users[i].name;
            }
        }
    }

    render() {
        return(
            <div className="card">
                <div className="cardHeader">
                    <div className="userImg">
                        <img className="img-circle" src="http://www.oiioproperty.com/Images/article/2016051402425466.png" alt="User Profile Pic"/>
                    </div>
                    <div className="textRight">
                        <div className="userName">{this.getUserName(this.props.post.userId)}</div>
                        <div className="postTitle">
                            {this.props.post.title}
                        </div>
                    </div>
                </div>
                <div className="cardContainer">
                    <div className="postBody">{this.props.post.body}</div>
                </div>
            </div>
        )
    }
}

export default Card;