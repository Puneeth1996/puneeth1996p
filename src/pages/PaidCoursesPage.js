import React from 'react'
import Hero from '../components/Hero'
import { PaidCourseWelcomeText } from '../components/TutorCard/TutorWelcomeText'
function PaidCoursesPage(props) {
	return (
		<div>
			<Hero title={props.title} subTitle={props.subTitle} />
			<PaidCourseWelcomeText />
		</div>
	)
}

export default PaidCoursesPage
