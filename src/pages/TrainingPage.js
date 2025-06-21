import Hero from '../components/Hero'
import TutorCard from '../components/TutorCard/TutorCard'
import {
	TutorWelcomeText,
	FreeCourseWelcomeText,
} from '../components/TutorCard/TutorWelcomeText'
import RollingTextHome from '../components/RollingTextHome'
function TrainingPage(props) {
	return (
		<div>
			{/* <Hero title={props.title} subTitle={props.subTitle} /> */}
			<Hero title={props.title} />
			<RollingTextHome textArr={props.subTitle} />
			<TutorWelcomeText />
			<TutorCard />
			<FreeCourseWelcomeText />
		</div>
	)
}

export default TrainingPage
