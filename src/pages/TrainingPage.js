import Hero from '../components/Hero'
import TutorCard from '../components/TutorCard/TutorCard'
import TutorWelcomeText from '../components/TutorCard/TutorWelcomeText'
function TrainingPage(props) {
	return (
		<div>
			<Hero title={props.title} subTitle={props.subTitle} />
			<TutorWelcomeText />
			<TutorCard />
		</div>
	)
}

export default TrainingPage
