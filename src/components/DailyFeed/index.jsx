import React from 'react';

import CardLoad from '../CardLoad'

import './style.css';

class DailyFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: 1,
            waiting: true
        }

        this.setItems = this.setItems.bind(this);
        this.getMore = this.getMore.bind(this);
    }

    componentDidMount() {
        console.log("mount")
        setTimeout(() => {
            this.setState({
                waiting: false
            })
        }, 500)
    }

    getMore(e) {
        e.preventDefault();
        this.setState(prevState => ({
            items: prevState.items + 1
        }));
    }

    setItems() {
        let items = [];
        for(let i = 0; i < 5*this.state.items; i++) {
            items.push(
                <div key={i} className = "dailyfeedListItem">
                    <img src="http://www.oiioproperty.com/Images/article/2016051402425466.png" alt="Profile User" className = "img-circle userFeedImage" />
                    <div className = "dailyfeedListDetail">
                        <small className="pull-right">5m ago</small>
                        <strong>John</strong> uploaded a new report <br/>
                        <small className="text-muted">Today 5:20pm - 1.10.2018</small>
                    </div>
                    <hr />
                </div>
            )
        }

        return items;
    }

    render() {
        return (
            <div className = "section2Part2Feed">
                <h4 className = "dailyFeed">Your daily feed </h4>
                <hr/>
                <div className="dailyFeedList">
                { this.state.waiting? <CardLoad /> : this.setItems() }
                </div>
                <button className="btn btn-primary btn-block showButton " onClick={(e) => this.getMore(e)} type = "button"><i className="fa fa-arrow-down"></i> Show More</button>                    
            </div>
        );
    }
}

export default DailyFeed;