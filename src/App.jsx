import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { LinkContainer } from 'react-router-bootstrap'
import logo from './images/keb_logo.png'
import './App.css'
import EventPage from './pages/EventPage'

function App() {
	return (
		<div>
			<Navbar className="custom-navbar">
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand>
							<img
								src={logo}
								height="30"
								className="d-inline-block align-top navbar-logo me-5"
								alt="KEB logo"
							/>{' '}
						</Navbar.Brand>
					</LinkContainer>
					<Nav className="me-auto">
						<LinkContainer
							to="/"
							className="px-3"
						>
							<Nav.Link> Home </Nav.Link>
						</LinkContainer>
						<LinkContainer
							to="/events"
							className="px-3"
						>
							<Nav.Link> Events </Nav.Link>
						</LinkContainer>
						<LinkContainer
							to="/about"
							className="px-3"
						>
							<Nav.Link> About </Nav.Link>
						</LinkContainer>
					</Nav>
				</Container>
			</Navbar>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/events"
					element={<Events />}
				/>
				<Route
					path="/events/:eventId"
					element={<EventPage />}
				/>
			</Routes>
		</div>
	)
}

export default App
