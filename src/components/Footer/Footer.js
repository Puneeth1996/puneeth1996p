import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FaInstagram, FaLinkedinIn, FaGithub, FaYoutube } from 'react-icons/fa'
import './Footer.scss'

function Footer() {
	return (
		<footer className='mt-5'>
			<div>
				<Row className='border-top justify-content-between p-3'>
					<Col
						className='p-0 footer-container'
						md={3}
						sm={12}
						lg={4}
						style={{ width: '100%' }}
					>
						<a
							href='https://www.linkedin.com/in/puneeth-p-861095146/'
							target='_blank'
							rel='noopener noreferrer'
							style={{ color: 'black', textDecoration: 'none' }}
						>
							{' '}
							<FaLinkedinIn
								style={{ width: 25, height: 25, marginRight: 15 }}
							/>{' '}
						</a>
						<a
							href='https://github.com/Puneeth1996'
							target='_blank'
							rel='noopener noreferrer'
							style={{ color: 'black', textDecoration: 'none' }}
						>
							{' '}
							<FaGithub
								style={{ width: 25, height: 25, marginRight: 15 }}
							/>{' '}
						</a>
						<a
							href='https://www.youtube.com/@PuneethP-learntechwithme'
							target='_blank'
							rel='noopener noreferrer'
							style={{ color: 'black', textDecoration: 'none' }}
						>
							{' '}
							<FaYoutube
								style={{ width: 25, height: 25, marginRight: 15 }}
							/>{' '}
						</a>
					</Col>
				</Row>
			</div>
		</footer>
	)
}

export default Footer
