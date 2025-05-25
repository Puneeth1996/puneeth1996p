import React from 'react'
import Button from 'react-bootstrap/Button'
import { RiMailSendLine } from 'react-icons/ri'
import { FaFileDownload } from 'react-icons/fa'
import dsaPDF from '../../assets/pdf/dsa_training.pdf'
import pythonPDF from '../../assets/pdf/complete_python_training.pdf'
import mernPDF from '../../assets/pdf/full_stack_mern_training.pdf'
import reactPDF from '../../assets/pdf/typescript_react_training.pdf'

import './TutorCard.scss'

const TutorCard = () => {
	return (
		<>
			<div className='tutor-card background1'>
				<h3 className='heading'>Complete Python Training</h3>
				<h3 className='heading'>
					Rs 5,999 | 3 Months | 70 Hours | 6 Hours/Week | Flexible Schedule
					(Weekends or Daily) | Online Classes
				</h3>
				<p className='description'>
					Master Python from the fundamentals to advanced object-oriented
					programming techniques.
					<br />
					Develop real-world projects using SQL databases, network programming
					with sockets, data visualization with Matplotlib, web scraping, and
					much more.
					<br />
					Equip yourself with the versatile skills to solve complex,
					large-scale, data-driven challenges — essential for careers in data
					science, automation, backend development, and AI.
				</p>
				<Button variant='info' className='btn-custom'>
					<a
						href={pythonPDF}
						target='_blank'
						rel='noopener noreferrer'
						download
						className='btn-link'
					>
						<FaFileDownload className='icon' />
						Curriculum
					</a>
				</Button>
				<Button variant='success' className='btn-custom'>
					<a
						href='mailto:puneeth1996trainer@gmail.com?cc=puneeth1996p@gmail.com'
						target='_blank'
						rel='noopener noreferrer'
						className='btn-link'
					>
						<RiMailSendLine className='icon' />
						Inquire Now
					</a>
				</Button>
			</div>

			<div className='tutor-card background2'>
				<h3 className='heading'>
					TypeScript + React JS Frontend Web Development Training
				</h3>
				<h3 className='heading'>
					Rs 7,999 | 4 Months | 100 Hours | 6 Hours/Week | Flexible Schedule
					(Weekends or Daily) | Online Classes
				</h3>
				<p className='description'>
					Master professional frontend development by learning key technologies
					including HTML5, CSS3, Bootstrap, modern JavaScript (ES6+), ReactJS,
					and TypeScript with Redux.
					<br />
					Start from fundamentals — building responsive layouts with Flexbox and
					Grid, and understanding core JavaScript concepts. Then dive deep into
					React ecosystem: Hooks, React Router, state management with Redux, and
					TypeScript integration.
					<br />
					Gain hands-on experience by building real-world projects throughout
					the course. Complete a comprehensive capstone project that
					demonstrates your skills and prepares you for product-based companies
					or freelance opportunities.
				</p>
				<Button variant='info' className='btn-custom'>
					<a
						href={reactPDF}
						target='_blank'
						rel='noopener noreferrer'
						download
						className='btn-link'
					>
						<FaFileDownload className='icon' />
						Curriculum
					</a>
				</Button>
				<Button variant='info' className='btn-custom'>
					<a
						href='mailto:puneeth1996trainer@gmail.com?cc=puneeth1996p@gmail.com'
						target='_blank'
						rel='noopener noreferrer'
						className='btn-link'
					>
						<RiMailSendLine className='icon' />
						Inquire Now
					</a>
				</Button>
			</div>

			<div className='tutor-card background3'>
				<h3 className='heading'>Full Stack MERN Development Training</h3>
				<h3 className='heading'>
					Rs 9,999 (5 months, 120 hrs, 6 hrs/week, weekends or daily). Online
					class
				</h3>
				<p className='description'>
					Master full stack development using MongoDB, Express.js, React, and
					Node.js.
					<br />
					Build scalable web applications by learning backend API design,
					database management, frontend React components, and deployment
					strategies.
					<br />
					Projects include authentication systems, real-time chat apps, and
					e-commerce platforms, preparing you for product-based companies or
					freelancing.
				</p>
				<Button variant='info' className='btn-custom'>
					<a
						href={mernPDF}
						target='_blank'
						rel='noopener noreferrer'
						download
						className='btn-link'
					>
						<FaFileDownload className='icon' />
						Curriculum
					</a>
				</Button>
				<Button variant='success' className='btn-custom'>
					<a
						href='mailto:puneeth1996trainer@gmail.com?cc=puneeth1996p@gmail.com'
						target='_blank'
						rel='noopener noreferrer'
						className='btn-link'
					>
						<RiMailSendLine className='icon' />
						Inquire
					</a>
				</Button>
			</div>

			<div className='tutor-card background-dsa'>
				<h3 className='heading'>Data Structures and Algorithms Training</h3>
				<h3 className='heading'>
					Rs 11,999 (4 months, 90 hrs, 6 hrs/week, weekends or daily). Online
					class
				</h3>
				<p className='description'>
					Master essential data structures including arrays, linked lists,
					stacks, queues, trees, heaps, graphs, and advanced concepts like tries
					and hash tables.
					<br />
					Dive deep into algorithms such as sorting, searching, recursion,
					backtracking, greedy methods, divide and conquer, dynamic programming,
					and graph traversal techniques.
					<br />
					This course is designed for aspiring software engineers targeting
					FAANG and top-tier tech companies, focusing on solving complex
					algorithmic problems efficiently and effectively.
					<br />
					Gain hands-on experience with extensive coding challenges, timed mock
					interviews, and real-world problem-solving sessions modeled after
					actual technical interviews.
					<br />
					Learn optimization techniques and best practices to write clean,
					scalable, and high-performance code.
					<br />
					Prepare to confidently crack coding interviews with personalized
					feedback and mentorship from industry experts.
				</p>
				<Button variant='info' className='btn-custom'>
					<a
						href={dsaPDF}
						target='_blank'
						rel='noopener noreferrer'
						download
						className='btn-link'
					>
						<FaFileDownload className='icon' />
						Curriculum
					</a>
				</Button>
				<Button variant='success' className='btn-custom'>
					<a
						href='mailto:puneeth1996trainer@gmail.com?cc=puneeth1996p@gmail.com'
						target='_blank'
						rel='noopener noreferrer'
						className='btn-link'
					>
						<RiMailSendLine className='icon' />
						Inquire
					</a>
				</Button>
			</div>
		</>
	)
}

export default TutorCard
