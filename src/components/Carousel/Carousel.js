import React from 'react'

import Card from '../Card'

import project from '../../assets/images/projects.jpg'
import myimg from '../../assets/images/myimg.jpg'
import contactme from '../../assets/images/contactme.jpg'
import Row from 'react-bootstrap/Row'
import './Carousel.scss'

class Carousel extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			items: [
				{
					id: 0,
					title: 'Projects',
					subTitle: 'All My Projects',
					imgSrc: project,
					link: '/projects',
					selected: false,
				},
				{
					id: 1,
					title: 'Puneeth P',
					subTitle: 'Portfolio Page',
					imgSrc: myimg,
					link: '/about',
					selected: false,
				},
				{
					id: 2,
					title: 'Contact Me',
					subTitle: 'You can contact me!',
					imgSrc: contactme,
					link: '/contact',
					selected: false,
				},
			],
		}
	}

	handleCardClick = (id, card) => {
		let items = [...this.state.items]

		items[id].selected = items[id].selected ? false : true

		items.forEach((item) => {
			if (item.id !== id) {
				item.selected = false
			}
		})

		this.setState({
			items,
		})
	}

	render() {
		return (
			<div className='carousel-container'>
				{this.state.items.map((item) => (
					<Card
						item={item}
						click={(e) => this.handleCardClick(item.id, e)}
						key={item.id}
					/>
				))}
			</div>
		)
	}
}

export default Carousel
