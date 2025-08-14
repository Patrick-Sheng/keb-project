import { Routes, Route, Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { eventMetadata } from '../util/eventsMetadata'
import { Breadcrumb } from 'react-bootstrap'
import Footer from '../components/Footer'

const Events = () => {
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
				<Row>
					{Object.entries(eventMetadata)
						.reverse()
						.map(([key, value]) => {
							return (
								<Col
									xs={6}
									md={4}
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
			</Container>
			<Footer></Footer>
		</>
	)
}

export default Events
