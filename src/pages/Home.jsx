import banner from '../images/keb_background.png'
import examplePicture from '../images/example_image1.jpg'
import Image from 'react-bootstrap/Image'
import '../Home.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from "../components/Footer";

//style={{ border: '2px solid black' }}

const Home = () => {
	return (
		// Use Carousels for the pictures "no transition animation"
		<>
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
							<h1 className="mission-text-header mb-4">
								{' '}
								Our Mission{' '}
							</h1>
							<p className="mission-text-paragraph">
								yes and that as well please but with chese
								please thank you thahhahahahahha yes and
								that as well please but with chese please
								thank you thahhahahahahha yes and that as
								well please but with chese please thank you
								thahhahahahahha
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
									Our Mission{' '}
								</h1>
								<p className="mission-text-paragraph">
									yes and that as well please but with chese
									please thank you thahhahahahahha yes and
									that as well please but with chese please
									thank you thahhahahahahha yes and that as
									well please but with chese please thank
									you thahhahahahahha
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
						className="pt-5"
					>
						<div>
							<h1 className="mission-text-header mb-4">
								{' '}
								Our Mission{' '}
							</h1>
							<p className="mission-text-paragraph">
								yes and that as well please but with chese
								please thank you thahhahahahahha yes and
								that as well please but with chese please
								thank you thahhahahahahha yes and that as
								well please but with chese please thank you
								thahhahahahahha
							</p>
						</div>
					</Col>
				</Row>
			</Container>
      <Footer></Footer>
		</>
	)
}

export default Home
