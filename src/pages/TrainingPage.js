import Hero from '../components/Hero'
import TutorCard from '../components/TutorCard/TutorCard'
import {
	TutorWelcomeText,
	FreeCourseWelcomeText,
} from '../components/TutorCard/TutorWelcomeText'
function TrainingPage(props) {
	return (
		<div>
			<Hero title={props.title} subTitle={props.subTitle} />
			<TutorWelcomeText />
			<TutorCard />
			<FreeCourseWelcomeText />
		</div>
	)
}

export default TrainingPage
