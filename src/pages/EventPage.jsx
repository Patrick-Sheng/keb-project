import { useParams } from 'react-router-dom'
import event1 from '../images/event1.png'
import EventForm from '../events/EventForm'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { eventMetadata } from '../util/eventsMetadata'
import { Breadcrumb } from 'react-bootstrap'
import Footer from '../components/Footer'

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
			<Footer
				style={{
					border: '2px solid red',
					borderRadius: '5px',
				}}
			></Footer>
		</>
	)
}
export default EventPage
