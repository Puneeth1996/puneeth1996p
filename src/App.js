import React from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Redirect } from 'react-router'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './App.scss'

import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import BlogRoute from './pages/BlogPage/BlogRoute'
// import PatreonPage from './pages/PatreonPage'
import ProjectsPage from './pages/ProjectsPage'
import TrainingPage from './pages/TrainingPage'
import NotFound from './pages/Notfound/NotFound'

import { DiReact } from 'react-icons/di'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: 'Puneeth',
			home: {
				subTitle: [
					'Be Thankfull To Everything',
					'Always Uncomplaint',
					'Stay On That Grind',
					'Strive For Improvement',
					'Be Kind & Sympathetic',
					'Be Relentless',
				],
			},
			about: {
				title: 'About Me',
			},
			projects: {
				title: 'All My Projects',
				subTitle: 'Projects that make a difference',
				text: 'Checkout my projects below',
			},
			blogs: {
				title: 'Blogs Page',
				subTitle: [
					'Learning',
					'Correcting',
					'Improving',
					'Helping',
					'Enjoying',
				],
			},
			patreon: {
				title: 'Patreon Page',
			},
			trainings: {
				title: 'iTeach',
				subTitle: 'Looook out, you can unlock the superhuman potential!',
			},
			contact: {
				title: 'Contact Page',
				subTitle: [
					"Let's Talk",
					"Let's Collabrate ",
					"Let's Discuss",
					"Let's Start A Conversation",
					"Let's Get On A Chat",
					"Let's Build Together",
					'Ask Questions',
				],
			},
		}
	}

	render() {
		return (
			<Router>
				<Container className='p-0 app-container'>
					<Navbar className='border-bottom' bg='transparent' expand='lg'>
						<Navbar.Brand>
							{/* Should adjust the below <a> tag accordingly with respect to the HashRouter & Browser Router  */}
							<a
								href='#/'
								style={{ color: '#00000080', textDecoration: 'none' }}
							>
								<DiReact color='#61dafb' className='react-icon' />
								{this.state.title}
							</a>
						</Navbar.Brand>

						<Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
						<Navbar.Collapse
							id='navbar-toggle'
							className='p-0 nav-items-container'
						>
							<Nav>
								<Link className='nav-link' to='/'>
									Home
								</Link>
								<Link className='nav-link' to='/about'>
									About
								</Link>
								<Link className='nav-link' to='/projects'>
									Projects
								</Link>
								<Link className='nav-link' to='/trainings'>
									Trainings
								</Link>
								{/* June 10 2025 Hiding Blogs page as it not much work is being done here. */}
								{/* <Link className='nav-link' to='/blogs'>
									Blogs
								</Link> */}
								{/* 26 Mar 2025 Hiding patreon page as it not a right fit for portfolio page */}
								{/* <Link className='nav-link' to='/patreon'>
									Patreon
								</Link> */}
								<Link className='nav-link' to='/contact'>
									Contact
								</Link>
							</Nav>
						</Navbar.Collapse>
					</Navbar>

					<Switch>
						<Route
							path='/'
							exact
							render={() => <HomePage subTitle={this.state.home.subTitle} />}
						/>
						<Route
							path='/home'
							exact
							render={() => <HomePage subTitle={this.state.home.subTitle} />}
						/>
						<Route
							path='/about'
							render={() => <AboutPage title={this.state.about.title} />}
						/>
						<Route
							path='/projects'
							render={() => (
								<ProjectsPage
									title={this.state.projects.title}
									subTitle={this.state.projects.subTitle}
									text={this.state.projects.text}
								/>
							)}
						/>
						<Route
							path='/trainings'
							render={() => (
								<TrainingPage
									title={this.state.trainings.title}
									subTitle={this.state.trainings.subTitle}
								/>
							)}
						/>
						<Route
							path='/blogs'
							render={() => (
								<BlogRoute
									title={this.state.blogs.title}
									subTitle={this.state.blogs.subTitle}
								/>
							)}
						/>
						{/* 26 Mar 2025 Hiding patreon page as it not a right fit for portfolio page */}
						{/* <Route
							path='/patreon'
							render={() => (
								<PatreonPage
									title={this.state.patreon.title}
									subTitle={this.state.patreon.subTitle}
								/>
							)}
						/> */}
						<Route
							path='/contact'
							render={() => (
								<ContactPage
									title={this.state.contact.title}
									subTitle={this.state.contact.subTitle}
								/>
							)}
						/>
						<Route path='/404' render={() => <NotFound />} />
						<Route path='*' render={() => <Redirect to='/404' />} />
					</Switch>

					<Footer />
				</Container>
			</Router>
		)
	}
}

export default App
