import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import '../Events.css'
import { Breadcrumb } from 'react-bootstrap'
import '../EventForm.css'
import { useLocation, Link } from 'react-router-dom'
import { Collapse } from 'bootstrap'

// Imported event images
import event1 from '../images/event1.png';
import event2 from '../images/event2.png';
import event3 from '../images/event3.png';
import event4 from '../images/event4.png';
import event5 from '../images/event5.png';
import event6 from '../images/event6.png';
import event7 from '../images/event7.png';
import noEvent from '../images/noEvent.png';
import noUpcoming from '../images/noUpcoming.png';

function EventForm({ image, title, paragraph, formLink }) {
	const location = useLocation()
	const current_page_num = parseInt(location.pathname.split('/')[2].split('t')[1]);

	const eventImages = [event1, event2, event3, event4, event5, event6, event7];
	const currentIndex = current_page_num - 1;

	const previous_page_img = currentIndex === 0 ? noEvent : eventImages[currentIndex - 1];
	const current_page_img = eventImages[currentIndex];
	const next_page_img = currentIndex === eventImages.length - 1 ? noUpcoming : eventImages[currentIndex + 1];

	const site_previous_page = currentIndex === 0 ? `/events/event${current_page_num}` : `/events/event${currentIndex}`;
	const site_current_page = `/events/event${current_page_num}`;
	const site_next_page = currentIndex === eventImages.length - 1 ? `/events/event${current_page_num}` : `/events/event${currentIndex + 2}`;

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
		<Container>
			<Breadcrumb className={`mt-3 fs-5 event-breadcrumb ${title ? 'has-title' : ''}`}>
				<Breadcrumb.Item style={{ pointerEvents: 'all' }}>
					<Link 
						to="/events" 
						className="events-home"
						style={{ 
							textDecoration: 'none', 
							color: 'inherit',
							cursor: 'pointer'
						}}
					>
						Events
					</Link>
				</Breadcrumb.Item>
				{title && <Breadcrumb.Item active className="events-title">{title}</Breadcrumb.Item>}
			</Breadcrumb>
			<Row>
				<Col className="pb-5">
					<Image
						src={image}
						style={{ height: '60vh', objectFit: 'fill' }}
						className="d-block mx-auto"
						fluid
						thumbnail
					/>
				</Col>
				<Col xs={6} md={7} className="text-center pb-5">
					<div className="event-text-block">
						<div className="event-text-only">
							<h1 className="fw-bold event-text-title pt-5">{title}</h1>
							<div className="text-box">
								<p className="event-text-paragraph">{paragraph}</p>
								<a href={formLink} className="btn btn-primary btn-lg mb-4">Sign Up</a>
							</div>
						</div>

						{/* Fixed navigation section */}
						<div className="mt-4 pt-5">
							<div className="bottom-events-background">
								<div style={navigationStyle}>
									<div style={imageContainerStyle}>
										<Link to={site_previous_page}>
											<img style={navImageStyle} src={previous_page_img} alt="Previous event" />
										</Link>
										<Link to={site_current_page}>
											<img style={{ ...navImageStyle, border: '2px solid #007bff' }} src={current_page_img} alt="Current event" />
										</Link>
										<Link to={site_next_page}>
											<img style={navImageStyle} src={next_page_img} alt="Next event" />
										</Link>
									</div>
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
	)
}

export default EventForm