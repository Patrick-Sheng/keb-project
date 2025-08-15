import { Routes, Route, Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { eventMetadata } from '../util/eventsMetadata'
import { Breadcrumb } from 'react-bootstrap'

const Events = () => {
	const eventEntries =
		Object.entries(eventMetadata).reverse()
	const [mostRecentEvent, ...previousEvents] = eventEntries

	return (
		<>
			<Container>
				<Breadcrumb className="mt-3 fs-5">
					<Breadcrumb.Item
						active
						style={{ color: 'grey' }}
					>
						Events
					</Breadcrumb.Item>
				</Breadcrumb>

				{/* Current Event Section */}
				{mostRecentEvent && (
					<>
						<h2
							className="mb-3"
							style={{ color: 'white' }}
						>
							Upcoming Event
						</h2>
						<Row className="mb-5">
							<Col
								xs={6}
								md={4}
								key={mostRecentEvent[0]}
							>
								<Link to={`/events/${mostRecentEvent[0]}`}>
									<Image
										className="event-box"
										style={{
											width: '420px',
											height: '420px',
											objectFit: 'fill',
										}}
										src={mostRecentEvent[1].image}
										thumbnail
									/>
								</Link>
							</Col>
						</Row>
					</>
				)}

				{/* Previous Events Section */}
				{previousEvents.length > 0 && (
					<>
						<h2
							className="mb-3"
							style={{ color: 'white' }}
						>
							Previous Events
						</h2>
						<Row>
							{previousEvents.map(([key, value]) => {
								return (
									<Col
										xs={6}
										md={4}
										key={key}
									>
										<Link to={`/events/${key}`}>
											<Image
												className="event-box"
												style={{
													width: '420px',
													height: '420px',
													objectFit: 'fill',
												}}
												src={value.image}
												thumbnail
											/>
										</Link>
									</Col>
								)
							})}
						</Row>
					</>
				)}
			</Container>
		</>
	)
}

export default Events
