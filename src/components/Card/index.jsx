import React from 'react';
import axios from 'axios';

import './style.css';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
        
        this.getUserName = this.getUserName.bind(this);
        this.getUserImg = this.getUserImg.bind(this);
    }

    componentDidMount() {
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

    getUserImg(userId) {
        console.log(typeof(userId))
        switch (userId) {
            case 1: return "https://i.pinimg.com/736x/c6/a4/64/c6a4645d9f9af45a9c9d7b094c18a47a--portrait-ideas-girl-photos.jpg" 
            case 2: return "https://www.profile4men.com/wp-content/uploads/2016/11/img-Rob_BW.jpg"
            case 3: return "http://saxony-blue.com/data/out/106/6107471-profile-pic-for-girls.jpg"
            case 4: return "https://www.trickscity.com/wp-content/uploads/2016/11/51b91bba5a3fd9b6c8b9c53bc0ab6c65.jpg"
            case 5: return "https://lh3.googleusercontent.com/o8v1PtR4GNq7Iw1_NFT0xTqN5eMC1rp7ziLJLFNDb3Q6_LwrkLGpnVmB9FXZ9w-CApo=h310"
            case 6: return "http://kb4images.com/images/profile-pic-for-girls/37680144-profile-pic-for-girls.jpg"
            case 7: return "http://i.dailymail.co.uk/i/pix/2013/09/02/article-2408906-1B6466D0000005DC-395_308x425.jpg"
            case 8: return "https://i.pinimg.com/736x/3e/35/ec/3e35ecb7c8109b395f490f4f055fe8a8--business-man-portrait-mens-headshots-business.jpg"
            case 9: return "http://4.bp.blogspot.com/-pP50OZjeLF0/TyotuD8eMDI/AAAAAAAACYI/IOszxT2KtG4/s1600/stylish-girls-profile-pictures-6dec-5-500x678.jpg"
            case 10: return "https://lh3.googleusercontent.com/lO-QRQ6bxAwJ9y9xYp1iAbE3Ow1_HIpFy7CWHimSGwcP1GhyLAM76DU2eQi0H66g8w=h310"
            default:
                break;
        }
    }

    render() {
        return(
            <div id={this.props.post.id} className="card">
                <div className="cardHeader">
                    <div className="userImg">
                        <img className="img-circle" src={this.getUserImg(this.props.post.userId)} alt="User Profile Pic"/>
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