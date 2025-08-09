import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'

function App() {
	return (
		<div>
			<nav>
				<NavLink
					to="/"
					end
				>
					Home
				</NavLink>
				<br />
				<NavLink
					to="/about"
					end
				>
					About
				</NavLink>
				<br />
				<NavLink
					to="/events"
					end
				>
					Events
				</NavLink>
			</nav>

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
