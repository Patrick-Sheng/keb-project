import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import '../Events.css'
import { Breadcrumb } from 'react-bootstrap'
import '../EventForm.css'
import { useLocation } from 'react-router-dom'
import { Collapse } from 'bootstrap'

function EventForm({ image, title, paragraph, formLink }) {
	const location = useLocation()
	const current_page_num = location.pathname
		.split('/')[2]
		.split('t')[1]
	const current_page =
		'../src/images/event' + current_page_num + '.png'
	var next_page
	var previous_page
	if (current_page_num == 1) {
		previous_page = '../src/images/noEvent.png'
	} else {
		previous_page =
			'../src/images/event' +
			(parseInt(current_page_num) - 1) +
			'.png'
	}
	if (current_page_num == 7) {
		next_page = '../src/images/noUpcoming.png'
	} else {
		next_page =
			'../src/images/event' +
			(parseInt(current_page_num) + 1) +
			'.png'
	}
	const site_current_page =
		'/events/event' + current_page_num
	var site_next_page
	var site_previous_page
	if (current_page_num == 1) {
		site_previous_page = '/events/event' + current_page_num
	} else {
		site_previous_page =
			'/events/event' + (parseInt(current_page_num) - 1)
	}
	if (current_page_num == 7) {
		site_next_page = '/events/event' + current_page_num
	} else {
		site_next_page =
			'/events/event' + (parseInt(current_page_num) + 1)
	}

	// Determine if this is a previous event
	// Assuming events 1-5 are previous, 6 is current, 7 is upcoming
	// Adjust these numbers based on your actual event timeline
	const CURRENT_EVENT_NUM = 7 // Change this to your actual current event number
	const isPreviousEvent =
		parseInt(current_page_num) < CURRENT_EVENT_NUM

	const navigationStyle = {
		position: 'relative',
		width: '100%',
		maxWidth: '400px',
		margin: '0 auto',
	}

	const imageContainerStyle = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '1rem',
		marginBottom: '0.5rem',
	}

	const navImageStyle = {
		width: '80px',
		height: '60px',
		objectFit: 'cover',
		borderRadius: '4px',
		transition: 'transform 0.2s ease',
		cursor: 'pointer',
	}

	const labelContainerStyle = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '1rem',
	}

	const labelStyle = {
		width: '80px',
		textAlign: 'center',
		fontSize: '0.875rem',
		fontWeight: '500',
	}

	return (
		<>
			<Container>
				<Breadcrumb
					className={`mt-3 fs-5 event-breadcrumb ${
						title ? 'has-title' : ''
					}`}
				>
					<Breadcrumb.Item
						href="/events"
						className="events-home"
					>
						Events
					</Breadcrumb.Item>

					{title && (
						<Breadcrumb.Item
							active
							className="events-title"
						>
							{title}
						</Breadcrumb.Item>
					)}
				</Breadcrumb>
				<Row>
					<Col className="pb-5">
						<Image
							src={image}
							style={{
								height: '60vh',
								objectFit: 'fill',
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
						<div className="event-text-block">
							<div className="event-text-only">
								<h1 className="fw-bold event-text-title pt-5">
									{title}
								</h1>
								<div className="text-box">
									<p className="event-text-paragraph">
										{paragraph}
									</p>
									{/* Conditional rendering of sign up button */}
									{!isPreviousEvent ? (
										<a
											href={formLink}
											className="btn btn-primary btn-lg"
										>
											Sign Up
										</a>
									) : (
										<div className="text-muted mt-3">
											<em>This event has already passed</em>
										</div>
									)}
								</div>
							</div>

							{/* Fixed navigation section */}
							<div className="mt-4 pt-5">
								<div className="bottom-events-background">
									<div style={navigationStyle}>
										{/* Image navigation */}
										<div style={imageContainerStyle}>
											<a href={site_previous_page}>
												<img
													style={navImageStyle}
													src={previous_page}
													alt="Previous event"
													onMouseEnter={(e) =>
														(e.target.style.transform =
															'scale(1.05)')
													}
													onMouseLeave={(e) =>
														(e.target.style.transform =
															'scale(1)')
													}
												/>
											</a>
											<a href={site_current_page}>
												<img
													style={{
														...navImageStyle,
														border: '2px solid #007bff',
													}}
													src={current_page}
													alt="Current event"
													onMouseEnter={(e) =>
														(e.target.style.transform =
															'scale(1.05)')
													}
													onMouseLeave={(e) =>
														(e.target.style.transform =
															'scale(1)')
													}
												/>
											</a>
											<a href={site_next_page}>
												<img
													style={navImageStyle}
													src={next_page}
													alt="Next event"
													onMouseEnter={(e) =>
														(e.target.style.transform =
															'scale(1.05)')
													}
													onMouseLeave={(e) =>
														(e.target.style.transform =
															'scale(1)')
													}
												/>
											</a>
										</div>

										{/* Labels */}
										<div style={labelContainerStyle}>
											<div style={labelStyle}>Previous</div>
											<div style={labelStyle}>Current</div>
											<div style={labelStyle}>Next</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default EventForm
