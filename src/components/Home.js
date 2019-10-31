import React, {Component} from 'react';
import axios from 'axios';
import {URL} from './../constants/index'
import Header from './Header'
import Footer from './Footer'
import Posts from './Posts';
import '../css/style.css';
import Detail from "./Detail";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            posts: [],
            postDetail: {},
            displayStatus: 1 // 1 is for the list, 2 is for the detail
        };
    }

    componentDidMount() {
        this.setState({loading: true});
        axios.get(URL)
            .then(res => {
                if (res.status === 200) {
                    this.setState({
                        posts: res.data,
                        loading: false
                    });
                } else throw new Error('Oops, something went wrong');
            }).catch(error => {
            alert(error);
            this.setState({loading: false});
        });
    }

    handleClick = (data) => {
        this.setState({
            postDetail: data
        }, () => {
            this.toggleDisplayStatus(2);
        });
    };
    toggleDisplayStatus = (status) => {
        this.setState({
            displayStatus: status
        })
    };


    render() {
        return (
            <div>
                <Header
                    title={this.state.displayStatus === 1 ? 'List of Airports' : this.state.postDetail.airportName}/>
                <div className={'body'}>
                    {
                        this.state.displayStatus === 1 ?
                            <Posts handleClick={this.handleClick} toggleDisplayStatus={this.toggleDisplayStatus}
                                   posts={this.state.posts} loading={this.state.loading}/>
                            :
                            <Detail toggleDisplayStatus={this.toggleDisplayStatus} postDetail={this.state.postDetail}/>
                    }
                </div>
                <Footer/>
            </div>
        );
    }
}

export default (Home);
