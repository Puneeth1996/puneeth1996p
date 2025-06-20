import React from 'react'
import RollingTextContact from '../components/RollingTextContact'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Content from '../components/Content'
import Axios from 'axios'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
	FaFacebookSquare,
	FaGoogle,
	FaWhatsapp,
} from 'react-icons/fa'

import { SiGmail } from 'react-icons/si'

class ContactPage extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div style={{ minHeight: '67vh' }}>
				<RollingTextContact
					title={this.props.title}
					textArr={this.props.subTitle}
				/>

				<Content>
					<Row>
						<Col
							className='d-flex justify-content-between'
							style={{ width: '70vw' }}
						>
							<a
								href='https://whatsapp.com/channel/0029VbB0aCnGufJ5GLbOFt2o '
								target='_blank'
								rel='noopener noreferrer'
							>
								<FaWhatsapp
									style={{
										height: '10vh',
										width: '10vw',
										color: 'green',
										textDecoration: 'none',
									}}
								/>
							</a>
							<a
								href='https://www.linkedin.com/in/puneeth-p-861095146/'
								target='_blank'
								rel='noopener noreferrer'
							>
								<FaLinkedinIn
									style={{
										height: '10vh',
										width: '10vw',
										color: '#0095ff',
										textDecoration: 'none',
									}}
								/>
							</a>
							<a
								href='mailto: puneeth1996trainer@gmail.com?cc=puneeth1996p@gmail.com'
								target='_blank'
								rel='noopener noreferrer'
							>
								<SiGmail
									style={{
										height: '10vh',
										width: '10vw',
										color: 'red',
										textDecoration: 'none',
									}}
								/>
							</a>
						</Col>
					</Row>
				</Content>
			</div>
		)
	}
}

export default ContactPage
