import React, {Component} from 'react';
import {List} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import {Link} from "react-router-dom";
import Loading from "./Loading";

class Posts extends Component {
    render() {
        return (
            (this.props.loading ? <Loading/> :
                    <List>
                        {this.props.posts.map(post => (
                            <Link to={{
                                pathname: "/details",
                                data: post,
                            }}>
                                <ListItem button>
                                    <ListItemText primary={post.airportName + ',  ' + post.country.countryName }/>
                                </ListItem>
                                <Divider/>
                            </Link>

                        ))}
                    </List>
            ));
    }
};

export default Posts;