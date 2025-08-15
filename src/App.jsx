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
		<div className="app-container with-particles">
			{/* Navbar */}
			<nav
				style={{
					position: 'sticky',
					top: 0,
					zIndex: 1030,
					background: 'rgba(11, 27, 52, 0.85)',
					backdropFilter: 'blur(20px)',
					border: 'none',
					borderBottom: '1px solid rgba(255, 193, 7, 0.2)',
					boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
					transition: 'all 0.3s ease',
				}}
			>
				<div className="container">
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							padding: '1rem 0',
						}}
					>
						{/* Logo Section */}
						<Link
							to="/"
							style={{
								display: 'flex',
								alignItems: 'center',
								textDecoration: 'none',
								transition: 'transform 0.2s ease',
							}}
							onMouseEnter={(e) =>
								(e.currentTarget.style.transform =
									'scale(1.05)')
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.transform =
									'scale(1)')
							}
						>
							<img
								src={logo}
								alt="KEB Logo"
								style={{
									height: '45px',
									width: '45px',
									marginRight: '12px',
									borderRadius: '12px',
									border:
										'2px solid rgba(255, 193, 7, 0.3)',
									boxShadow:
										'0 4px 12px rgba(255, 193, 7, 0.2)',
								}}
							/>
							<div>
								<div
									style={{
										color: '#ffffff',
										fontSize: '1.3rem',
										fontWeight: '600',
										fontFamily:
											'system-ui, -apple-system, sans-serif',
										lineHeight: '1.2',
									}}
								>
									KEB
								</div>
								<div
									style={{
										color: '#ffc107',
										fontSize: '0.75rem',
										fontWeight: '300',
										letterSpacing: '0.5px',
									}}
								>
									Korean Engineering Body
								</div>
							</div>
						</Link>

						{/* Navigation Links */}
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								gap: '2rem',
							}}
						>
							<Link
								to="/about"
								style={{
									color: 'rgba(255, 255, 255, 0.9)',
									textDecoration: 'none',
									fontSize: '1rem',
									fontWeight: '400',
									padding: '0.5rem 1rem',
									borderRadius: '20px',
									transition: 'all 0.2s ease',
									position: 'relative',
								}}
								onMouseEnter={(e) => {
									e.target.style.background =
										'rgba(255, 193, 7, 0.1)'
									e.target.style.color = '#ffc107'
								}}
								onMouseLeave={(e) => {
									e.target.style.background = 'transparent'
									e.target.style.color =
										'rgba(255, 255, 255, 0.9)'
								}}
							>
								About Us
							</Link>

							<Link
								to="/events"
								style={{
									color: 'rgba(255, 255, 255, 0.9)',
									textDecoration: 'none',
									fontSize: '1rem',
									fontWeight: '400',
									padding: '0.5rem 1rem',
									borderRadius: '20px',
									transition: 'all 0.2s ease',
								}}
								onMouseEnter={(e) => {
									e.target.style.background =
										'rgba(255, 193, 7, 0.1)'
									e.target.style.color = '#ffc107'
								}}
								onMouseLeave={(e) => {
									e.target.style.background = 'transparent'
									e.target.style.color =
										'rgba(255, 255, 255, 0.9)'
								}}
							>
								Events
							</Link>

							<a
								href="https://docs.google.com/forms/d/e/1FAIpQLSfdQ4XeScWBXzZ4_1igpsrxI94-xP-f10VRN46iSHfsWJuQnw/viewform"
								target="_blank"
								rel="noopener noreferrer"
								style={{
									background:
										'linear-gradient(135deg, #ffc107, #ffb300)',
									color: '#000000',
									padding: '0.7rem 1.5rem',
									textDecoration: 'none',
									fontSize: '0.9rem',
									fontWeight: '500',
									borderRadius: '20px',
									transition: 'all 0.2s ease',
									boxShadow:
										'0 3px 10px rgba(255, 193, 7, 0.3)',
									border:
										'1px solid rgba(255, 255, 255, 0.2)',
								}}
								onMouseEnter={(e) => {
									e.target.style.transform =
										'translateY(-1px)'
									e.target.style.boxShadow =
										'0 5px 15px rgba(255, 193, 7, 0.4)'
								}}
								onMouseLeave={(e) => {
									e.target.style.transform = 'translateY(0)'
									e.target.style.boxShadow =
										'0 3px 10px rgba(255, 193, 7, 0.3)'
								}}
							>
								✨ Join Us
							</a>
						</div>
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
