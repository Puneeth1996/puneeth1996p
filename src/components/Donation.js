import React, { Component } from 'react'

import Table from 'react-bootstrap/Table';


import donation from '../data/donations.json'

export default class Donations extends Component {
    
    state = {
        loading: true,
        donations: [],
    };

    componentDidMount() {
        // const url = "http://thepuneeth1996p.tech/restAPIa/donation/readAll.php";
        // const response =  fetch("../data/donations.json");
        // const data =  response.json();
        // console.log(data);
        // console.log(donation);
        this.setState({ donations: donation, loading: false });
    }
    render() {
        // console.log(this.state);
        let check = this.state.donations && this.state.donations.length
        return (
            <div style={{ margin: "0 7.5vw", fontSize: "1.25em"}}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Dated</th>
                        </tr>
                    </thead>
                    <tbody>
                        { check && this.state.donations.map( (donn, idx) => (
                            <tr key={idx}>
                                <td>{donn.userName}</td>
                                <td>{donn.Amount}</td>
                                {/* <td>{donn.dated.substr(0,donn.dated.indexOf(' '))}</td> */}
                                <td>{ (donn.dated !== undefined) ? donn.dated.split(' ')[0].trim() : 'NO DATE' }</td>
                            </tr>

                        ) ) }
                    </tbody>
                </Table>
            </div>
        )
    }
}
