import React from 'react'

import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import './TutorWelcomeText.scss'

const TutorWelcomeText = () => {
	return (
		<section className='tutor-intro-text-section'>
			<h1>1-on-1 Online Coding Tutor - Puneeth P</h1>
			<p>
				Learn programming with personalized training in{' '}
				<strong>Full Stack MERN</strong>, <strong>Frontend ReactJS</strong>,{' '}
				<strong>Python</strong>, and <strong>DSA</strong>. I offer live, 1-on-1
				coaching to help students and job-seekers build skills, looking for next
				big career growth, crack coding interviews, and become confident
				developers.
			</p>
			<p>
				Whether you're a beginner or preparing for placements, my step-by-step
				sessions are tailored to your goals. Write an email to me and start
				learning today!
			</p>
		</section>
	)
}

const PaidCourseWelcomeText = () => {
	return (
		<>
			<section className='tutor-intro-text-section'>
				<h1>Paid Coding Course – Learn 1-on-1 with Puneeth P</h1>
				<p>
					Join my structured and personalized{' '}
					<strong>paid programming course</strong> designed for serious learners
					who want to master <strong>JavaScript</strong>,{' '}
					<strong>Python</strong>, and{' '}
					<strong>Data Structures & Algorithms</strong> through live mentorship.
				</p>
				<p>
					You'll get access to exclusive lesson plans, coding challenges,
					interview preparation strategies, and dedicated 1-on-1 guidance
					tailored to your goals.
				</p>
				<p>
					Perfect for placement prep, job seekers, or anyone looking to
					accelerate their coding skills. Limited seats available – enroll now
					to start your journey!
				</p>
			</section>
			<section className='course-includes'>
				<h2>What You’ll Get</h2>
				<ul>
					<li>✅ 1-on-1 live coding sessions (Zoom or Google Meet)</li>
					<li>📘 Structured curriculum: JavaScript, Python, DSA</li>
					<li>🎯 Weekly coding assignments and interview questions</li>
					<li>💬 Doubt clarification and personal feedback</li>
					<li>🧾 Resume and GitHub project review</li>
					<li>🚀 Placement & job interview guidance</li>
				</ul>
			</section>
			<section className='course-fit'>
				<h2>Who Is This For?</h2>
				<p>This course is perfect for:</p>
				<ul>
					<li>✅ College students preparing for placements</li>
					<li>✅ Beginners learning programming from scratch</li>
					<li>✅ Job seekers aiming for tech interviews</li>
					<li>
						✅ Anyone who prefers live 1-on-1 guidance over pre-recorded videos
					</li>
				</ul>
			</section>
			<section className='pricing-section'>
				<h2>Pricing</h2>
				<p>
					<strong>Option 1:</strong> ₹499 – One 90-min trial session
				</p>
				<p>
					<strong>Option 2:</strong> ₹2999 – Monthly package (4 sessions,
					1/week)
				</p>
				<p>
					<strong>Option 3:</strong> ₹7499 – Intensive 1-month prep (10 sessions
					+ mock interviews)
				</p>
			</section>
			<section className='enroll-section'>
				<h2>Start Your Journey</h2>
				<p>
					Ready to get started? Book a trial session or enroll in a full
					package.
				</p>
				<a
					href='https://calendly.com/your-schedule-link'
					className='btn-primary'
					target='_blank'
					rel='noopener noreferrer'
				>
					Book a Free Trial
				</a>
			</section>
			<section className='testimonials'>
				<h2>What My Students Say</h2>
				<blockquote>
					“Puneeth’s 1-on-1 classes helped me understand DSA like never before.
					I got shortlisted for a tech internship within a month!”
					<footer>
						— Arjun, B.Tech CSE
						<div className='testimonial-socials'>
							<a
								href='https://linkedin.com/in/arjun-student'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='LinkedIn Profile'
							>
								<FaLinkedinIn
									style={{ width: 18, height: 18, marginRight: 15 }}
								/>
							</a>
							<a
								href='https://github.com/arjun-dev'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='GitHub Profile'
							>
								<FaGithub
									style={{
										width: 18,
										height: 18,
										marginRight: 15,
										color: 'black',
									}}
								/>
							</a>
						</div>
					</footer>
				</blockquote>
			</section>
		</>
	)
}
const FreeCourseWelcomeText = () => {
	return (
		<section className='tutor-intro-text-section'>
			<h1>For Free Programming Course</h1>
			<p>
				Explore my <strong>free programming tutorials</strong> on YouTube
				covering <strong>JavaScript</strong>, <strong>Python</strong>, and{' '}
				<strong>DSA</strong>. These beginner-friendly videos are designed to
				help students learn at their own pace and build a strong foundation.
			</p>
			<p>
				This course is perfect for college students and beginners looking to
				start their coding journey without any upfront cost. Start watching and
				practicing today!
			</p>
			<p>
				Visit my YouTube channel:{' '}
				<a
					href='https://www.youtube.com/@PuneethP-learntechwithme'
					target='_blank'
					rel='noopener noreferrer'
				>
					@PuneethP-learntechwithme
				</a>
			</p>
			{/* <section className='enroll-section'>
				<h2>Start Your Journey</h2>
				<p>
					Ready to get started? Book a trial session or enroll in a full
					package.
				</p>
				<a
					href='https://calendly.com/your-schedule-link'
					className='btn-primary'
					target='_blank'
					rel='noopener noreferrer'
				>
					Book a Free Trial
				</a>
			</section> */}
			{/* <section className='testimonials'>
				<h2>What My Students Say</h2>
				<blockquote>
					“Puneeth’s 1-on-1 classes helped me understand DSA like never before.
					I got shortlisted for a tech internship within a month!”
					<footer>
						— Arjun, B.Tech CSE
						<div className='testimonial-socials'>
							<a
								href='https://linkedin.com/in/arjun-student'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='LinkedIn Profile'
							>
								<FaLinkedinIn
									style={{ width: 18, height: 18, marginRight: 15 }}
								/>
							</a>
							<a
								href='https://github.com/arjun-dev'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='GitHub Profile'
							>
								<FaGithub
									style={{
										width: 18,
										height: 18,
										marginRight: 15,
										color: 'black',
									}}
								/>
							</a>
						</div>
					</footer>
				</blockquote>
			</section> */}
		</section>
	)
}
export { TutorWelcomeText, PaidCourseWelcomeText, FreeCourseWelcomeText }
