import React, { Component } from 'react'
import { Card, Badge, Pagination, Form, FormControl } from 'react-bootstrap'
import './ProjectCard.scss'

import eporiumusa from '../../assets/images/eporiumusa.jpg'
import dronemakers from '../../assets/images/dronemakers.jpg'
import miniChatApp from '../../assets/images/mini-chat-app.jpg'
import mealPlanner from '../../assets/images/mealPlanner.jpg'
import citytoursplanner from '../../assets/images/city-tours-planner.jpg'
import techStoreEcom from '../../assets/images/techStoreEcom.jpg'
import guestList from '../../assets/images/guestList.jpg'
import reactWeatherApp from '../../assets/images/reactWeatherApp.jpg'
import userTodo from '../../assets/images/userTodo.jpg'
import roboFriends from '../../assets/images/roboFriends.jpg'
import faceReco from '../../assets/images/faceReco.jpg'
import urlshortner from '../../assets/images/urlshortner.jpg'
import retailClub from '../../assets/images/retailClub.jpg'
import countdowntimmerJS from '../../assets/images/countdowntimmerJS.jpg'
import CrownClothingEcommApp from '../../assets/images/CrownClothingEcommApp.jpg'
import EmailyMernApp from '../../assets/images/EmailyMernApp.jpg'
import NotesAppScreen from '../../assets/images/NotesAppScreen.jpg'
import HangManScreen from '../../assets/images/HangManScreen.jpg'
import TodoAppScreenShot from '../../assets/images/TodoAppScreenShot.jpg'
import Proshop from '../../assets/images/Proshop.jpg'

export default class ProjectCard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			items: [
				{
					id: 0,
					title: 'EporiumUSA Ecom Website',
					subTitle:
						'This was a website build using HTML CSS JS and PHP as the Server Side Langauge.',
					imgSrc: eporiumusa,
					link: 'http://eporiumusa.com/',
					feature: ['PHP', 'JS', 'Front End', 'MySQL'],
					dataAdded: 'Made on 12 Feb 2020',
				},
				{
					id: 1,
					title: 'Drone Makers - Wordpress built',
					subTitle:
						'This was my first website after my Engeneering, trying to market Drone with website.',
					imgSrc: dronemakers,
					link: 'https://puneethskingstongq.000webhostapp.com/',
					feature: ['Word-Press'],
					dataAdded: 'Made on November 2017',
				},
				{
					id: 2,
					title: 'React Mini Chat App',
					subTitle:
						'This is very simple chat, should be improving it with persistance, backend, SOCKETS to have that real feel...The code https://github.com/Puneeth1996/chat_intermediate',
					imgSrc: miniChatApp,
					link: 'https://dazzling-hopper-c995fe.netlify.com/',
					feature: ['ReactJS', 'Javascript'],
					dataAdded: 'Made on Sept 2018',
				},
				{
					id: 3,
					title: 'Meal Planner App',
					subTitle:
						'A react meal planner app that is built with react and with help of the api.I did learn it when taking short Reactjs Program with Udacity.',
					imgSrc: mealPlanner,
					link: 'https://eloquent-ardinghelli-0935f8.netlify.com/',
					feature: ['ReactJS', 'Javascript'],
					dataAdded: 'Made on June 2018',
				},
				{
					id: 4,
					title: 'City Tours Planner App',
					subTitle:
						'A react city tours planner app which is built using bootstrap.',
					imgSrc: citytoursplanner,
					link: 'https://flamboyant-mccarthy-795ac2.netlify.com',
					feature: ['ReactJS', 'Javascript'],
					dataAdded: 'Made on December 2018',
				},
				{
					id: 5,
					title: 'Tech Store Ecom App',
					subTitle:
						'A fully blown React Ecomm Project built using Contenful Backend.',
					imgSrc: techStoreEcom,
					link: 'https://serene-austin-5b971c.netlify.com/',
					feature: ['ReactJS', 'Javascript', 'Contentfull Backend Admin'],
					dataAdded: 'Made on Jan 2019',
				},
				{
					id: 6,
					title: 'Guest List',
					subTitle: 'A CRUD app with React',
					imgSrc: guestList,
					link: 'https://vigorous-kepler-b8d8a1.netlify.com/',
					feature: ['ReactJS', 'Javascript', 'CURD Operations'],
					dataAdded: 'Made on October 2018',
				},
				{
					id: 7,
					title: 'React Weather Map',
					subTitle:
						'React Weather Map with api for any given country and state',
					imgSrc: reactWeatherApp,
					link: 'https://agitated-euler-200e23.netlify.com/',
					feature: ['ReactJS', 'Javascript', 'Scattered Plot - D3.js', 'API'],
					dataAdded: 'Made on Dec 2018',
				},
				{
					id: 8,
					title: 'React Todo Project And User Planner App',
					subTitle:
						'React Weather Map with api for any given country and state',
					imgSrc: userTodo,
					link: 'https://reverent-roentgen-06775e.netlify.com/',
					feature: [
						'ReactJS',
						'Javascript',
						'Antdesign',
						'Persistance With Loacal Storage ',
					],
					dataAdded: 'Made on Feb 2019',
				},
				{
					id: 9,
					title: 'Robot Friends - Contact Diary | React App',
					subTitle: 'React App that can be used to store all the contact.',
					imgSrc: roboFriends,
					link: 'https://puneeth1996.github.io/contact-friendly-zombies/',
					feature: ['ReactJS', 'Javascript', 'Flex-box'],
					dataAdded: 'Made on Feb 2020',
				},
				{
					id: 10,
					title: 'Face Recognization React App',
					subTitle: 'React Project with Clarify API For Face Recognization.',
					imgSrc: faceReco,
					link: 'https://gaze-reco.herokuapp.com/',
					feature: ['ReactJS', 'Javascript', 'Clarify API', 'ML'],
					dataAdded: 'Made on Mar 2020',
				},
				{
					id: 11,
					title: 'URL Shortner As Service - MERN App',
					subTitle:
						'React Project with simple Node Express Server Connected to MongoDB Atlas Cloud DB.',
					imgSrc: urlshortner,
					link: 'https://damp-meadow-64348.herokuapp.com/',
					feature: [
						'ReactJS',
						'Javascript',
						'ExpressJS',
						'Nodejs',
						'MongoDB',
						'Data Structures & Alogrithm',
					],
					dataAdded: 'Made on Apr 2020',
				},
				{
					id: 12,
					title: 'Retail CLub Ecom Website',
					subTitle: 'Another Ecom Project Made PHP Stack and Mysql.',
					imgSrc: retailClub,
					link: 'https://fruitsnveggies.000webhostapp.com/public',
					feature: ['PHP', 'JS', 'Front End', 'MySQL'],
					dataAdded: 'Made on Sept 2020',
				},
				{
					id: 13,
					title: 'Count Down Timer - Vanilla JS',
					subTitle: 'A Simple JS build of Count Down Timmer.',
					imgSrc: countdowntimmerJS,
					link: 'https://count-down-timmer.netlify.app/',
					feature: ['Vanilla JS', 'HTML', 'Bootstrap'],
					dataAdded: 'Made on Oct 2020',
				},
				{
					id: 14,
					title: 'Ecommerece App | Crown Clothing ',
					subTitle:
						'React Project, learning project to build a fully funcitoning Ecomm, integrated strip test payment service.',
					imgSrc: CrownClothingEcommApp,
					link: 'https://live-crown-clothing-in.herokuapp.com/',
					feature: ['Reactjs', 'Redux', 'Firebase', 'Stripe'],
					dataAdded: 'Made on April 30th 2021',
				},
				{
					id: 15,
					title: 'Emaily | Feed-back survery app ',
					subTitle:
						'A mern stack project, with integreation of Google OAuth2.0, sendGrid emailing, Stripe, mongodb, hosted on heroku. A full stack MERN project.',
					imgSrc: EmailyMernApp,
					link: 'http://afternoon-thicket-82091.herokuapp.com/',
					feature: [
						'Reactjs',
						'Redux',
						'MongoDB',
						'Stripe',
						'Express',
						'Heroku',
						'SendGrid',
					],
					dataAdded: 'Made on June 23rd 2021',
				},
				{
					id: 16,
					title: 'Notes App | Take notes on the fly ',
					subTitle:
						'A simple notes taking app with local storage being used to store data, create title and write your content, remove it anytime by navigating to the edit page.',
					imgSrc: NotesAppScreen,
					link: 'https://notes-app-js-puneeth1996p.netlify.app/',
					feature: ['Vanila JS'],
					dataAdded: 'Made on October 14th 2021',
				},
				{
					id: 17,
					title: 'Hangman | Guess the word ',
					subTitle:
						'A puzzle game, where you can guess a word with limited number of tries. A fun refreshing game to discover words in daily life.',
					imgSrc: HangManScreen,
					link: 'https://hangman-puneeth1996p.netlify.app/',
					feature: ['Vanila JS'],
					dataAdded: 'Made on October 23th 2021',
				},
				{
					id: 18,
					title: 'Todo App ',
					subTitle: 'Todo App for daily tasks solver/remainder.',
					imgSrc: TodoAppScreenShot,
					link: 'https://todo-app-puneeth1996p.netlify.app/',
					feature: ['Vanila JS'],
					dataAdded: 'Made on October 30th 2021',
				},
				{
					id: 19,
					title:
						'ProShop Ecommerce Mern Stack Project - Vercel Deployment of BE + FE',
					subTitle:
						'Deployed in MERN stack with Paypal and full extensible Ecommerce functionalities ',
					imgSrc: Proshop,
					link: 'https://proshop-mern-frontend.vercel.app/',
					feature: ['MERN'],
					dataAdded: 'Made on April 04th 2025',
				},
			],
			pageNumber: 1,
			search: '',
		}
	}

	pageChanged = (e) => {
		const pageNumber = parseInt(e.target.text)
		this.setState({ pageNumber })
	}

	updateSearch = (evt) => {
		this.setState({ search: evt.target.value.substr(0, 25) })
	}

	render() {
		// adding some logic for filtering search text
		let filteredItmes = this.state.items.filter((proj) => {
			return (
				proj.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
			)
		})
		let numItemsPerPage = 6
		let active = this.state.pageNumber
		let items = []
		let totalPages = Math.ceil(filteredItmes.length / numItemsPerPage)
		for (let number = 1; number <= totalPages; number++) {
			items.push(
				<Pagination.Item
					key={number}
					active={number === active ? true : false}
					activeLabel=''
				>
					{number}
				</Pagination.Item>
			)
		}
		const resultItems = filteredItmes.slice(
			numItemsPerPage * (active - 1),
			numItemsPerPage * active
		)
		return (
			<>
				<Form inline style={{ margin: '0 0 8vh 24vw' }}>
					<FormControl
						type='text'
						placeholder='Search'
						value={this.state.search}
						onChange={this.updateSearch}
						className='mr-sm-2'
						style={{ width: '50%' }}
					/>
				</Form>

				<div className='card-container'>
					{resultItems.map((itm, idx) => (
						<Card key={itm.id} className='card-item'>
							<Card.Img variant='top' src={itm.imgSrc} />
							<Card.Body>
								<Card.Title>{itm.title}</Card.Title>
								<Card.Text>{itm.subTitle}</Card.Text>
								{itm.feature.map((fea, idxa) => (
									<Badge key={idxa} variant='secondary' className='m-2'>
										{fea}
									</Badge>
								))}
								<Card.Text>
									<a href={itm.link} target='_blank' rel='noopener noreferrer'>
										here
									</a>
								</Card.Text>
							</Card.Body>
							<Card.Footer>
								<small className='text-muted'>{itm.dataAdded}</small>
							</Card.Footer>
						</Card>
					))}
				</div>
				<Pagination size='md' onClick={this.pageChanged}>
					{items}
				</Pagination>
			</>
		)
	}
}
