import React from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Redirect } from 'react-router'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/NavDropdown'
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
// import PaidCoursesPage from './pages/PaidCoursesPage'
// import FreeCoursesPage from './pages/FreeCoursesPage'
import NotFound from './pages/Notfound/NotFound'

import { DiReact } from 'react-icons/di'

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			navbarExpanded: false,
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
	handleNavToggle = (expanded) => {
		this.setState({ navbarExpanded: expanded })
	}

	handleNavItemClick = () => {
		this.setState({ navbarExpanded: false })
	}
	render() {
		return (
			<Router>
				<Container className='p-0 app-container'>
					<Navbar
						className='border-bottom'
						bg='transparent'
						expand='lg'
						expanded={this.state.navbarExpanded}
						onToggle={this.handleNavToggle}
					>
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
								<Link
									className='nav-link'
									to='/'
									onClick={this.handleNavItemClick}
								>
									Home
								</Link>
								<Link
									className='nav-link'
									to='/about'
									onClick={this.handleNavItemClick}
								>
									About
								</Link>
								<Link
									className='nav-link'
									to='/projects'
									onClick={this.handleNavItemClick}
								>
									Projects
								</Link>
								<Link
									className='nav-link'
									to='/trainings'
									onClick={this.handleNavItemClick}
								>
									Trainings
								</Link>
								{/* 19th june 2025 developed drop down links for trainign  */}
								{/* <NavDropdown title='Trainings & Courses'>
									<NavDropdown.Item
										as={Link}
										to='/trainings'
										onClick={this.handleNavItemClick}
									>
										Trainings
									</NavDropdown.Item>
									<NavDropdown.Item
										as={Link}
										to='/free-course'
										onClick={this.handleNavItemClick}
									>
										Free Course
									</NavDropdown.Item>
									<NavDropdown.Item
										as={Link}
										to='/paid-courses'
										onClick={this.handleNavItemClick}
									>
										Paid Courses
									</NavDropdown.Item>
								</NavDropdown> */}
								{/* June 10 2025 Hiding Blogs page as it not much work is being done here. */}
								{/* June 19 2025 Reinserting the link, will make use */}
								<Link
									className='nav-link'
									to='/blogs'
									onClick={this.handleNavItemClick}
								>
									Blogs
								</Link>
								{/* 26 Mar 2025 Hiding patreon page as it not a right fit for portfolio page */}
								{/* <Link className='nav-link' to='/patreon' onClick={this.handleNavItemClick}>
									Patreon
								</Link> */}
								<Link
									className='nav-link'
									to='/contact'
									onClick={this.handleNavItemClick}
								>
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
						{/* <Route
							path='/free-course'
							render={() => (
								<FreeCoursesPage
									title={this.state.trainings.title}
									subTitle={this.state.trainings.subTitle}
								/>
							)}
						/>
						<Route
							path='/paid-courses'
							render={() => (
								<PaidCoursesPage
									title={this.state.trainings.title}
									subTitle={this.state.trainings.subTitle}
								/>
							)}
						/> */}
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
