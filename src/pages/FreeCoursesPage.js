import React from 'react'
import Hero from '../components/Hero'
import { FreeCourseWelcomeText } from '../components/TutorCard/TutorWelcomeText'
function FreeCoursesPage(props) {
	return (
		<div>
			<Hero title={props.title} subTitle={props.subTitle} />
			<FreeCourseWelcomeText />
		</div>
	)
}

export default FreeCoursesPage
