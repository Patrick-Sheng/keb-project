import { useParams } from 'react-router-dom'
import event1 from '../images/event1.png'
import EventForm from '../events/EventForm'
import { eventMetadata } from '../util/eventsMetadata'

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
		</>
	)
}
export default EventPage
