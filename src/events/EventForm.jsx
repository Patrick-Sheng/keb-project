import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import '../Events.css'
import { Breadcrumb } from 'react-bootstrap'
import '../EventForm.css'

const EventForm = ({
	image,
	title,
	paragraph,
	formLink,
}) => {
	return (
		<>
			<Container>
				<Breadcrumb className="mt-3 fs-5">
					<Breadcrumb.Item href="/events">
						Events
					</Breadcrumb.Item>
					<Breadcrumb.Item active>
						{' '}
						{title}{' '}
					</Breadcrumb.Item>
				</Breadcrumb>
				<Row>
					<Col className="pb-5">
						<Image
							src={image}
							style={{
								height: '60vh',
								objectFit: 'fill'
							}}
							className="d-block mx-auto"
							fluid
							thumbnail
						/>
					</Col>
					<Col
						xs={6}
						md={7}
						className="text-center pb-5"
					>
						<div className='event-text-block'>
							<div className='event-text-only'>
								<h1 className="fw-bold event-text-title">
									{title}
								</h1>
								<div className="text-box">
								<p className="event-text-paragraph">
									{paragraph}
								</p>
								<a
									href={formLink}
									class="btn btn-primary btn-lg"
								>
									{' '}
									Sign Up{' '}
								</a>
								</div>
							</div>
							<Row>
								<Col>
									<div class="background">
									</div>
								</Col>
							</Row>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default EventForm
