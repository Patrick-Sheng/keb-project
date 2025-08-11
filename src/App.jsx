import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { LinkContainer } from 'react-router-bootstrap'

function App() {
	return (
		<div>
			<Navbar
				bg="primary"
				data-bs-theme="dark"
			>
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand href="#home">Navbar</Navbar.Brand>
					</LinkContainer>
					<Nav className="me-auto">
						<LinkContainer to="/">
							<Nav.Link> Home </Nav.Link>
						</LinkContainer>
						<LinkContainer to="/events">
							<Nav.Link> Events </Nav.Link>
						</LinkContainer>
						<LinkContainer to="/about">
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
			</Routes>
		</div>
	)
}

export default App
