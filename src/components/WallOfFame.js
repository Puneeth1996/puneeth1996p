import React, { Component } from 'react'

import { Badge, Button  } from 'react-bootstrap'


export default class WallOfFame extends Component {

    state = {
        student: [
            // {
            //     studentid: '3434sdf13asdef',
            //     userName: 'Liam'
            // },
            // {
            //     studentid: '3yuiyiikgf13asdef',
            //     userName: 'John'
            // },
            // {
            //     studentid: '3cvbcbnhzdf13asdef',
            //     userName: 'David'
            // }
        ]
    };

    render() {
        const divStyle = {
            marginBotton: '20vh',
            marginLeft: '15vh',
            fontSize: '1.25vw',
        };
        return (
            <>
                <div   style={{  marginTop: '20vh' }} >
                    <h4 className="display-1 font-weight-bolder"  style={{    fontSize: '5vw', marginLeft: '12vw' }} >Wall Of Fame</h4>
                    <h4 className="display-1 font-weight-bolder"  style={{    fontSize: '5vw', marginLeft: '20vw' }} >Respectfull Honorees</h4>
                    <div     style={divStyle} >
                        { this.state.student.map( (donn, idx) => (
                                <Button variant="light" key={idx} style={{ backgroundColor: '#cecece', margin:"2vh 1vw" }}>
                                    {donn.userName} <Badge variant="light">{donn.studentid}</Badge>
                                </Button>
                        ) ) }
                    </div>
                </div>
            </>
        )
    }
}
