import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import 'antd/dist/antd.css';
import { Carousel } from 'antd';


const contentStyle = {
    height: '260px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

class CarousalComponent extends Component {
    state = {
        media: null,
        nav: null
    };

    componentDidMount = () => {
        this.setState({
            media: this.media,
            nav: this.nav
        });
    };
    

    render() {
        return (
            <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        );
    }
}
const mapStateToProps = state => {
    return {}
}
const mapDispatchToProps = dispatch => ({})
export const Carousal = withRouter(connect(mapStateToProps, mapDispatchToProps)(CarousalComponent))

