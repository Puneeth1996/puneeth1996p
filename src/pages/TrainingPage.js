import React from 'react'
import Hero from '../components/Hero'
import TutorCard from '../components/TutorCard/TutorCard'
import { Link } from 'react-router-dom'
function TrainingPage(props) {
	return (
		<div>
			<Hero title={props.title} subTitle={props.subTitle} />
			<TutorCard />
		</div>
	)
}

export default TrainingPage
