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
	return (
		<>
			<Container>
				<Breadcrumb className={`mt-3 fs-5 event-breadcrumb ${title ? 'has-title' : ''}`}>
          <Breadcrumb.Item href="/events" className="events-home">
            Events
          </Breadcrumb.Item>

          {title && (
            <Breadcrumb.Item active className="events-title">
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
									<div class="bottom-events-background">
										<div class="bottom-events-images">
											<Row>
												<Col>
													<a href={site_next_page}>
														<img
															class="bottom-events-img"
															src={next_page}
															href={site_next_page}
														></img>
													</a>
												</Col>
												<Col>
													<a href={site_current_page}>
														<img
															class="bottom-events-img"
															src={current_page}
															href={site_current_page}
														></img>
													</a>
												</Col>
												<Col>
													<a href={site_previous_page}>
														<img
															class="bottom-events-img"
															src={previous_page}
														></img>
													</a>
												</Col>
											</Row>
											<Row>
												<Col>Next</Col>
												<Col>Current</Col>
												<Col>Previous</Col>
											</Row>
										</div>
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
