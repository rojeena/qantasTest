import React, {Component} from 'react';
import axios from 'axios';
import {URL}  from './../constants/index'
import Header from './Header'
import Footer from './Footer'
import Posts from "../helper/Posts";
import Container from "@material-ui/core/Container";
import '../css/style.css';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            currentPosts: []
        };
    }

    componentDidMount() {
        this.setState({ loading: true});
        axios.get(URL)
            .then(res => {
                if(res.status === 200) {
                    this.setState({
                        currentPosts: res.data
                    })
                }
            })
        setTimeout( () => {
            this.setState({ loading: false});
        }, 2000);
    }

    componentDidCatch(error, errorInfo) {
        console.log('Error');
    }

    render() {
        return (
            <Container >
                <Header title={'List of Airports'}/>
                <div className={'body'}>
                    <Posts posts={this.state.currentPosts} loading={this.state.loading} />
                </div>
                <Footer/>
            </Container>
        );
    }
}

export default (Home);
