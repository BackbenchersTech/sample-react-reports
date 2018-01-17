import React from 'react';
import { Col } from 'react-bootstrap';

import './style.css';

class StatsCard extends React.Component {
    constructor(props) {
        super(props);
        if (props.width === 3) {
            this.cols = 4;
        }
        else if (props.width === 2) {
            this.cols = 6;
        }
        this.styles = {
            backgroundColor: (props.bgcolor === undefined)? 'white': '#' + props.bgcolor,
            color: (props.color === undefined)? 'black': '#' + props.color
        }
        this.state = {
          current: 0
        }
        this.stepTime = Math.floor(props.duration/(props.number - 0));
    }

    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        this.stepTime
      );
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    tick() {
      clearInterval(this.timerID);
      this.stepTime = Math.floor(this.props.duration/(this.props.number - this.state.current));
      this.stepTime = (Math.max(this.stepTime, 1000) > 1000)? 1000 : this.stepTime;
      this.timerID = setInterval(
        () => this.tick(),
        this.stepTime
      )
      if(this.state.current !== this.props.number) {
        this.setState(prevState => ({
          current: prevState.current + 1
        }));
      }
      else {
        clearInterval(this.timerID);
      }
    }

    render() {
        return (
            <Col className="cardCol" xs={12} md={this.cols}>
                <div className="statsCard" style={ this.styles }>
                    <div className="textWrap"><div className="text" >{ this.props.text }</div></div>
                    <div className="numberWrap"><div className="number">{ this.state.current }</div></div>
                </div>
            </Col>
        )
    }
}

export default StatsCard;