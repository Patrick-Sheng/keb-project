import banner from '../images/keb_background.png'
import examplePicture from '../images/example_image1.jpg'
import Image from 'react-bootstrap/Image'
import '../Home.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'

//style={{ border: '2px solid black' }}

const Home = () => {
	return (
		// Use Carousels for the pictures "no transition animation"
		<>
			<Container>
				<Row>
					<Col
						xs={12}
						className="text-center"
					>
						<div>
							<h1
								style={{
									color: 'white',
									fontFamily: 'cursive',
								}}
								className="mission-text-header my-4"
							>
								{' '}
								Academic Success Is Our #1 Priority{' '}
							</h1>
						</div>
					</Col>
				</Row>
			</Container>
			<div>
				<Image
					src={banner}
					className="d-block mx-auto"
					fluid
				/>
			</div>
			<Container>
				<Row>
					<Col className="py-5">
						<Image
							src={examplePicture}
							className="d-block mx-auto"
							fluid
						/>
					</Col>
					<Col
						xs={6}
						className="pt-5 text-center"
					>
						<div>
							<h1
								style={{ color: 'white' }}
								className="mission-text-header mb-4"
							>
								{' '}
								Who We are{' '}
							</h1>
							<p
								style={{ color: 'white' }}
								className="mission-text-paragraph pt-5"
							>
								We are The Korean Engineering Body (KEB) at
								University of Auckland, led by a group of
								engineering students.
							</p>
						</div>
					</Col>
				</Row>
			</Container>
			<div className="secondary-background text-white">
				<Container>
					<Row>
						<Col className="py-5">
							<div>
								<h1 className="mission-text-header mb-4">
									{' '}
									Our Focus{' '}
								</h1>
								<p className="mission-text-paragraph pt-5">
									Our focus is to support Korean engineering
									students through academic mentoring,
									cultural events, and community engagement.
								</p>
							</div>
						</Col>
						<Col
							xs={6}
							className="p-5 text-center"
						>
							<Image
								src={examplePicture}
								className="d-block mx-auto"
								fluid
							/>
						</Col>
					</Row>
				</Container>
			</div>
			<Container className="pb-5">
				<Row>
					<Col className="py-5">
						<Image
							src={examplePicture}
							className="d-block mx-auto"
							fluid
						/>
					</Col>
					<Col
						xs={6}
						className="pt-5"
					>
						<div>
							<h1
								style={{ color: 'white' }}
								className="mission-text-header mb-4"
							>
								{' '}
								Our goal{' '}
							</h1>
							<p
								style={{ color: 'white' }}
								className="mission-text-paragraph pt-5"
							>
								Our goal is to boost Korean engineering
								students and foster success, connection, and
								collaboration on campus.
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Home
