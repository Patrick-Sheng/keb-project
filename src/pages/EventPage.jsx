import { useParams } from 'react-router-dom'
import event1 from '../images/event1.png'
import EventForm from '../events/EventForm'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { eventMetadata } from '../util/eventsMetadata'
import { Breadcrumb } from 'react-bootstrap'

const EventPage = () => {
	const { eventId } = useParams()
	const { title, body, link, image } =
		eventMetadata[eventId]
	return (
		<>
			<EventForm
				image={image}
				title={title}
				paragraph={body}
				formLink={link}
			/>
			<div className="third-background text-white" style={{marginTop: '0.9vh'}}>
				<Container>
					<Row>
						<Col
							xs={4}
							className="pt-5 text-center"
						>
							{' '}
							<h1> instagram </h1>{' '}
						</Col>
						<Col
							xs={4}
							className="pt-5 text-center"
						>
							{' '}
							<h1> instagram </h1>{' '}
						</Col>
						<Col
							xs={4}
							className="pt-5 text-center"
						>
							{' '}
							<h1> instagram </h1>{' '}
						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
}
export default EventPage
