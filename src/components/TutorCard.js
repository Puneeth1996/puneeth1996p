import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import { RiMailSendLine } from 'react-icons/ri'
import { FaFileDownload } from 'react-icons/fa'
import samplePDF from '../assets/pdf/sample.pdf'

export default class TutorCard extends Component {
	render() {
		const divStyle = {
			border: '2px solid gold',
			borderRadius: '5vw',
			padding: '10vh 5vw',
			margin: '10vh 5vw',
			backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9WRftzYx_T1UC3bX9QhvNhTfnHr-6JEV_5g&usqp=CAU')`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'contain',
			backgroundPosition: 'center',
		}
		const divStyle2 = {
			border: '2px solid gold',
			borderRadius: '5vw',
			padding: '10vh 5vw',
			margin: '10vh 5vw',
			backgroundImage: `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVsAAACRCAMAAABaFeu5AAAAmVBMVEX///8xeMZh2vsSbcIsdsX19/tVis0ndMWDp9jr8PhZ2ftT2Pvt8/kWbsN2oNb///0/gMqtxeU3e8djk9B33fmS3/ax5/fj9PnW8PjG8P7J7vnx+Pq0yedo2vl43vvw+fzk7/Kf4/e66vjM2++8z+mSrtXT3era7vSFpdFzmcyl5/rN6vO15fXC5vGF1u6C4v2PsNygvOFrmNL+8VEXAAAHyElEQVR4nO2ci3KiShCGEfBgZkImGm6CSGCzN+KGmPd/uNM9w1231njg7CTVX21ZMsBK/WmbvqFhEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEAShJeLmCsTfvuoPwVfbugLn583fvnDtWW4ce3ENjvVt1gsT4ffw/JdDhM/fk1k/eyLur1MWsN3lfJclApNzzvz4ZE/kM9jBff3VfXKvlRYs98dslyUqbpoM/vF0OzDeyOO4zGBnNtunT8TPq80WDHcx2w2t5Cb3fI+DwjwN2+XMQ8m5l/vcZJ7ut9N//oO2C2sup5CAtOgNRJyiumW9vJXGvJVHMHWEzuipbcFYrt6JZ/z+e/KtjzoXtbXG4Ixn+vSp0FNbz+RR817kaK3gFzwQuWrvYAIMV3OnoKW2AsTsbUZor3EKYga9VdA/HJ+oF1pqC85039/OTIwLeraMlIw9z/PxU6Glthk3q8GCqEzTTIdB14GxX/N8/FRoqe0jZy+DhSQFbdnAbI0taXsN2VjbVCYSQ/9akLbXANr2fYKACMEM8aWf55JPuAq8l/XiK59JkwXjTXurdC+7CojBzE7FApI0VDGDYMHvll8oBrsGkZq8/fqH3GSFQEKw36I9BvzvjHW4KdBSW/ACMpYVRhL9whBhnyJ7eMcPUWag8S6Zmc706VOhp7YQAwRZ4adYqTWH4FJaBVFI9YTreAbXyhlr1cQyuXptFYYjcqonvJek8FitKboBVoaPyvkmjyFWGfdprTEzy990ffRAO21DvzZOr4wzUQ6jMcPImekJIwpeavP1In3V1UxbqSzjaWUyrHlBjDAKtCCEaPZ4sr3DU23V1UvbUiqbRwKkS5WQ+eiQCOTO0H5ZYYSBieXHStPOmU7aZikoywJ0rhjhhkYMyqldItrGdcTrMwgQcD8qKmJ5jp7dHY20DfEbntcKBiAypgdbtYUNda5MOEM/AdbrqQNFwfsphU7oo21Wt24U6BQCVhcQsKEu4wIpPCxXPuRqzaEJhBVcx7LN+7S1HUlzzpTaCizF9LY91FJ1GgLeRLWqbS7f896pvvLBujHU1jk7+mU3O+/vXo/H19XbwnIm17bzrYoCIzHV3+1SMxU0HHChn5QJ6YO1Y6Cts749xwaPcTe7TsnbozO1tj4bzRu0DbKIt9oyNalgjuvkCTeZfpHYQFv36ewxqK21HizdWFNrWzE+nPCCtEHdrrad3dbW2Tri7myT6zcfdqG21pfh0vTagt0OTFF4TSM97tmtChUgEx5KiU13/QqOl2nrrEdL02sbyGS2Az2BkjLptFVuI2539U+e7lKm4kK7rd8td6+r1923ObQ1+FAvHz2Bsk6/cwpS/b004d4fAsQezi7owUBbe3MvWdzKfatm03lVB+8sF0Mwa7G+cSfXFgTq3ezRWKt6IWm0VQLCganXn7QrBmfqwzAGUxu2pbS9c4b2vGyiMdtRR06bl0EYy9LG/HCULmkqNZnHGWPclDsx3Y1j1gZhGWQWrNIvSvhN7uCOtVV3sltr9EeYuJ5QyMKLuqNV2NXJGzcqotLPa0MtMEgQTfKQ5Jjy+jpKe6G2tR9eWcPjpq6DhSkGtVUs6oB1yU+HbBPlWyFb2LYlSS2rCRdq2/hb4+gOHjyZvMYoAiZLsnmgEq1ilKwZdRlMhhHVwZPKavvkw0Xa2pvm8OWr486orSELYOp5hjwUwvDGBVzQlCWGSDChkM9D+BoWEmou0nbh7rozdht3jlpNi4hlPwHbjamfY71GNN5UiCXsqcq9qfo+3Cx1tVnkMm1tp/8s2c5xZtQWJEwCLHibZv2SpvsK2adpXWtUezytO5GXagvi9pPe5cP0dbABEURgJcSwbR8dtOy948wDj2zqGNP2uVBbiHlXfSEfJq+DDQjkjKLI4sB/6UYUuCzh+mUsw7TT25xuXKotBAvuqnuCd2nbc2rbn6PDrCtOHpHU7GZHxbheox+Xa4vF8YfWM8gC7pyzdt2WD85XBgMV65vqi5Y1hD7v0VaqW8spizUzzoj267Oe6vbkbFAR/6Dzt7/VFtTd1Hq6c/qE4XM6CT69J4JRknZgTNN8rOEybZ1OZfeoTsQEbba58eFMvhzBHT9eZmz5p9DWOb41JbBW2zntdvS8Q90yG80tfhZt18aXe8txbNtx75Wes/rbsd1KX9sf00c+j7ag5nr19rZqOhPrOeMEYzS9KErZ1vEGMdcn8bcn7TLV+/2/nucVsvqNaXC/W+l/jjjhVNu7efOyfT/awqouz9W4WNCas5rG05rLtN2NznpThcY5c942JkB/IEfuEhxZ3Dd6qilSrTmvrdKsq9/eH2+7U5bHmetgKuhSddkCH0FvflVF/jiFLzdEdTqaqxsPZ/KDhf0g6X6CyXaszd3rerdbH1cQMLTx2GyXBXluun2Oc9mG6LphMSrN98GvGN2v5uUE4+s5bet5Rft0abDqPMx2WYnsKWD7gXv9qoEo1c8sMV1nbvvcWifCXsx4kGlKkr1sm/NqXI9JAlnW5dr/EpCB8xzXTje7qzmvS0RBeYjPNcPE9+3h8AGUBZ4c17kG6+vfvvKPwNOP1ftZ3/75PyYIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIglD8C6/Vib6EX4MsAAAAAElFTkSuQmCC')`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'contain',
			backgroundPosition: 'center',
		}
		return (
			<>
				<div style={divStyle}>
					<h3 style={{ fontSize: '2.5vw', marginTop: '0.5vh' }}>
						Complete Python Training
					</h3>
					<h3 style={{ fontSize: '2.5vw', marginTop: '3vh' }}>
						Rs 5,999(3months duration, 70Hrs, 6hrs per week, weekends/ daily).
						Online class
					</h3>
					<div style={{ fontSize: '1.75vw', marginTop: '5vh' }}>
						Learn all the major topics in python starting from basic and all the
						way up to object oriented technique
						<br />
						Learn by building projects using Database like Sql, Networking
						Application with Sockets, Visualization Libraries Like Matplotlib,
						Web Scrapping and many more
						<br />
						Hope to see you in this amazing course, its a data driven world and
						python is the exact vehicle that you should choose to go about
						solving large scale data driven problems.
					</div>
					<Button variant='info' style={{ margin: '3vh 0 0 0.5vw' }}>
						<a
							href={samplePDF}
							target='_blank'
							rel='noopener noreferrer'
							download
							style={{ color: 'black', textDecoration: 'none' }}
						>
							{' '}
							<FaFileDownload
								style={{ width: 25, height: 25 }}
							/> Curriculum{' '}
						</a>
					</Button>
					<Button variant='success' style={{ margin: '3vh 0 0 0.5vw' }}>
						<a
							href='mailto: puneeth1996trainer@gmail.com?cc=puneeth1996p@gmail.com'
							target='_blank'
							rel='noopener noreferrer'
							style={{ color: 'black', textDecoration: 'none' }}
						>
							{' '}
							<RiMailSendLine style={{ width: 25, height: 25 }} /> Inquire{' '}
						</a>
					</Button>
				</div>
				<div style={divStyle2}>
					<h3 style={{ fontSize: '2.5vw', marginTop: '0.5vh' }}>
						Typescript + React JS Frontend Web Development Training
					</h3>
					<h3 style={{ fontSize: '2.5vw', marginTop: '0.5vh' }}>
						Rs 7,999(4months duration, 100Hrs, 6hrs per week, weekends/ daily).
						Online class
					</h3>
					<div style={{ fontSize: '1.75vw', marginTop: '5vh' }}>
						Learn all the skills to become a professional frontend developer,
						with html css bootstrap javascript reactjs with typesript and redux.
						<br />
						Starting from scracth with html css (including flexbox and grid)
						bootstrap and javascript, then learning reactjs and its ecosystem,
						redux, react router, react hooks with all the with typesript.
						<br />
						Will be having to create fresh new projects for each topic and each
						batch. With final large project showcasing all the skills needed to
						work in a product based company or even pick up a freelance project.
					</div>
					<Button variant='info' style={{ margin: '3vh 0 0 0.5vw' }}>
						<a
							href='mailto: puneeth1996trainer@gmail.com?cc=puneeth1996p@gmail.com'
							target='_blank'
							rel='noopener noreferrer'
							style={{ color: 'black', textDecoration: 'none' }}
						>
							{' '}
							<RiMailSendLine style={{ width: 25, height: 25 }} /> Inquire{' '}
						</a>
					</Button>
				</div>
			</>
		)
	}
}
