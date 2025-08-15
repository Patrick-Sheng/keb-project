import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import logo from './images/KEBlogo_full.png'
import EventPage from './pages/EventPage'
import Footer from './components/Footer'

export default function App() {
	return (
		<div className="app-container">
			{/* Navbar */}
			<nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">
				<div className="container">
					<Link
						className="navbar-brand d-flex align-items-center"
						to="/"
					>
						<img
							src={logo}
							alt="Club Logo"
							style={{
								height: '40px',
								width: '40px',
								marginRight: '10px',
								borderRadius: '50%',
							}}
						/>
						Korean Engineering Body
					</Link>

					<div
						className="collapse navbar-collapse"
						id="navbarNav"
					>
						<ul className="navbar-nav ms-auto">
							<li className="nav-item">
								<Link
									className="nav-link"
									to="/about"
								>
									About Us
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link"
									to="/events"
								>
									Events
								</Link>
							</li>
							<li className="nav-item">
								<a
									className="btn btn-primary ms-2"
									href="https://docs.google.com/forms/d/e/1FAIpQLSfdQ4XeScWBXzZ4_1igpsrxI94-xP-f10VRN46iSHfsWJuQnw/viewform"
									target="_blank"
									rel="noopener noreferrer"
								>
									Join Us
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			{/* Main Content Area */}
			<main className="main-content">
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
			</main>

			{/* Footer - Now part of main layout */}
			<Footer />
		</div>
	)
}
