import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Header from "./Header";
import Footer from "./Footer";
import Container from "@material-ui/core/Container";
import Loading from "../helper/Loading";
import '../css/style.css';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: '',
            loading: false,
        }
    }

    componentDidMount () {
        this.setState({ loading: true});
        this.setState({
            details: this.props.location.data
        });
        setTimeout( () => {
            this.setState({ loading: false});
        }, 2000);
    };

    componentDidCatch(error, errorInfo) {
        console.log('Error');
    }

    render() {
        return (
            <Container>
                <Header title={'Airport:'+ this.state.details.airportName}/>
                {this.state.loading && <Loading/>}
                    {this.state.details ?
                        <div class={'detailContainer'}>
                                <Table class='table' aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell component="th" scope="row"> Name</TableCell>
                                            <TableCell>{this.state.details.airportName+' ['+
                                            this.state.details.airportCode+']'}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row"> TimeZome</TableCell>
                                            <TableCell>{this.state.details.city.timeZoneName}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row"> Location</TableCell>
                                            <TableCell>{this.state.details.city.cityName + ', ' +
                                            this.state.details.country.countryName + ' [ ' +
                                            this.state.details.country.countryCode+'], '+
                                            this.state.details.region.regionName}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            <Button variant="contained" color="secondary" href="/"> Go Back</Button>
                        </div> :''

                }
                <Footer/>
            </Container>
        );
    }

}

export default Detail;
