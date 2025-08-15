import banner from '../images/keb_background.png'
import examplePicture from '../images/example_image1.jpg'
import Image from 'react-bootstrap/Image'
import '../Home.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { eventMetadata } from '../util/eventsMetadata'

const Home = () => {
	const [scrollY, setScrollY] = useState(0)
	const [isVisible, setIsVisible] = useState({
		image: false,
		events: false,
		about: false,
		community: false,
	})

	// Get events in reverse order (newest first)
	const eventEntries =
		Object.entries(eventMetadata).reverse()

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY)

			const windowHeight = window.innerHeight
			const sections = [
				'image-section',
				'events-section',
				'about-section',
				'community-section',
			]
			const visibilityKeys = [
				'image',
				'events',
				'about',
				'community',
			]

			sections.forEach((sectionId, index) => {
				const section = document.getElementById(sectionId)
				if (section) {
					const sectionTop = section.offsetTop
					if (scrollY + windowHeight > sectionTop + 100) {
						setIsVisible((prev) => ({
							...prev,
							[visibilityKeys[index]]: true,
						}))
					}
				}
			})
		}

		window.addEventListener('scroll', handleScroll)
		return () =>
			window.removeEventListener('scroll', handleScroll)
	}, [scrollY])

	return (
		<>
			{/* Full Screen Welcome Hero */}
			<div
				style={{
					height: '100vh',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					position: 'relative',
					background:
						'linear-gradient(135deg, #0b1b34 0%, #1a2d4d 50%, #2a3f5f 100%)',
				}}
			>
				{/* Floating decorative elements */}
				<div
					style={{
						position: 'absolute',
						top: '20%',
						left: '10%',
						width: '100px',
						height: '100px',
						background:
							'radial-gradient(circle, rgba(255, 193, 7, 0.1), transparent)',
						borderRadius: '50%',
						animation: 'float 6s ease-in-out infinite',
					}}
				></div>
				<div
					style={{
						position: 'absolute',
						top: '60%',
						right: '15%',
						width: '150px',
						height: '150px',
						background:
							'radial-gradient(circle, rgba(255, 193, 7, 0.08), transparent)',
						borderRadius: '50%',
						animation:
							'float 8s ease-in-out infinite reverse',
					}}
				></div>

				<Container>
					<Row>
						<Col
							xs={12}
							className="text-center"
						>
							<div
								style={{
									background:
										'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 193, 7, 0.08))',
									backdropFilter: 'blur(20px)',
									border:
										'2px solid rgba(255, 193, 7, 0.3)',
									borderRadius: '30px',
									padding: '6rem 3rem',
									boxShadow:
										'0 20px 60px rgba(255, 193, 7, 0.15)',
									maxWidth: '800px',
									margin: '0 auto',
									transform: `translateY(${
										scrollY * 0.1
									}px)`,
								}}
							>
								<div
									style={{
										fontSize: '4rem',
										marginBottom: '2rem',
										animation:
											'bounce 2s ease-in-out infinite',
									}}
								>
									👋
								</div>

								<h1
									style={{
										fontSize: 'clamp(3rem, 6vw, 5rem)',
										fontWeight: '200',
										color: '#ffffff',
										fontFamily:
											'system-ui, -apple-system, sans-serif',
										lineHeight: '1.1',
										marginBottom: '1rem',
										textShadow:
											'0 4px 20px rgba(0, 0, 0, 0.5)',
									}}
								>
									Welcome to KEB
								</h1>

								<h2
									style={{
										fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
										fontWeight: '300',
										color: '#ffc107',
										marginBottom: '2rem',
										textShadow:
											'0 2px 10px rgba(255, 193, 7, 0.5)',
									}}
								>
									Korean Engineering Body
								</h2>

								<p
									style={{
										fontSize:
											'clamp(1.2rem, 2.5vw, 1.8rem)',
										color: 'rgba(255, 255, 255, 0.9)',
										fontWeight: '300',
										maxWidth: '600px',
										margin: '0 auto 3rem auto',
										lineHeight: '1.5',
									}}
								>
									Where academic success meets lifelong
									friendships ✨
								</p>

								{/* Scroll indicator */}
								<div
									style={{
										marginTop: '4rem',
										animation:
											'bounce 2s ease-in-out infinite',
									}}
								>
									<div
										style={{
											fontSize: '2rem',
											color: 'rgba(255, 193, 7, 0.8)',
											marginBottom: '0.5rem',
										}}
									>
										⬇️
									</div>
									<p
										style={{
											fontSize: '1rem',
											color: 'rgba(255, 255, 255, 0.7)',
											margin: '0',
										}}
									>
										Scroll to discover more
									</p>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>

			{/* About Us Section */}
			<div
				id="about-section"
				style={{
					padding: '6rem 0',
					opacity: isVisible.about ? 1 : 0,
					transform: `translateY(${
						isVisible.about ? 0 : 50
					}px)`,
					transition: 'all 1s ease-out 0.2s',
				}}
			>
				<Container>
					<div
						style={{
							background:
								'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 193, 7, 0.05))',
							backdropFilter: 'blur(15px)',
							border: '1px solid rgba(255, 193, 7, 0.2)',
							borderRadius: '25px',
							padding: '4rem 3rem',
							boxShadow:
								'0 12px 40px rgba(255, 193, 7, 0.1)',
						}}
					>
						<Row className="align-items-center">
							<Col
								md={6}
								className="mb-5 mb-md-0"
							>
								<div
									style={{
										fontSize: '2.5rem',
										marginBottom: '1rem',
									}}
								>
									🤝
								</div>
								<h2
									style={{
										fontSize: '2rem',
										fontWeight: '400',
										color: '#ffc107',
										marginBottom: '2rem',
									}}
								>
									Our Community
								</h2>
								<p
									style={{
										fontSize: '1.1rem',
										color: 'rgba(255, 255, 255, 0.9)',
										lineHeight: '1.7',
										fontWeight: '300',
										marginBottom: '2rem',
									}}
								>
									We're a warm and supportive community of
									Korean engineering students at the
									University of Auckland. Together, we share
									knowledge, celebrate culture, and build
									friendships that last a lifetime.
								</p>
								<p
									style={{
										fontSize: '1rem',
										color: 'rgba(255, 255, 255, 0.8)',
										lineHeight: '1.6',
										fontWeight: '300',
										marginBottom: '3rem',
									}}
								>
									From study groups to cultural events,
									we're here to help you succeed
									academically while staying connected to
									your roots. 🌱
								</p>

								<div
									style={{
										background: 'rgba(255, 193, 7, 0.1)',
										padding: '1.5rem',
										borderRadius: '15px',
										border:
											'1px solid rgba(255, 193, 7, 0.3)',
									}}
								>
									<div style={{ marginBottom: '1rem' }}>
										<span
											style={{
												fontSize: '2.5rem',
												fontWeight: '200',
												color: '#ffc107',
											}}
										>
											50+
										</span>
										<span
											style={{
												fontSize: '1rem',
												color: 'rgba(255, 255, 255, 0.8)',
												marginLeft: '1rem',
												textTransform: 'uppercase',
												letterSpacing: '1px',
											}}
										>
											Amazing Members
										</span>
									</div>
									<p
										style={{
											fontSize: '0.9rem',
											color: 'rgba(255, 255, 255, 0.7)',
											margin: '0',
											fontStyle: 'italic',
										}}
									>
										"A family away from home" 💝
									</p>
								</div>
							</Col>
							<Col md={6}>
								<Image
									src={banner}
									style={{
										width: '100%',
										height: '400px',
										objectFit: 'cover',
										borderRadius: '15px',
										border:
											'2px solid rgba(255, 193, 7, 0.3)',
										boxShadow:
											'0 8px 25px rgba(255, 193, 7, 0.2)',
									}}
								/>
							</Col>
						</Row>
					</div>
				</Container>
			</div>

			{/* Events Showcase Section */}
			<div
				id="events-section"
				style={{
					padding: '6rem 0',
					opacity: isVisible.events ? 1 : 0,
					transform: `translateY(${
						isVisible.events ? 0 : 50
					}px)`,
					transition: 'all 1s ease-out 0.1s',
				}}
			>
				<Container>
					{/* Section Header */}
					<Row className="mb-5">
						<Col
							xs={12}
							className="text-center"
						>
							<div
								style={{
									fontSize: '3rem',
									marginBottom: '1rem',
								}}
							>
								🌟
							</div>
							<h2
								style={{
									fontSize: '2.8rem',
									fontWeight: '300',
									color: '#ffc107',
									marginBottom: '1rem',
								}}
							>
								Event Highlights
							</h2>
							<p
								style={{
									fontSize: '1.3rem',
									color: 'rgba(255, 255, 255, 0.8)',
									maxWidth: '700px',
									margin: '0 auto',
									lineHeight: '1.6',
								}}
							>
								From welcome parties to academic workshops,
								we create unforgettable memories together 🎊
							</p>
						</Col>
					</Row>

					{/* Featured Event */}
					{eventEntries.length > 0 && (
						<Row className="mb-5">
							<Col xs={12}>
								<div
									style={{
										background:
											'linear-gradient(135deg, rgba(255, 193, 7, 0.12), rgba(255, 255, 255, 0.05))',
										backdropFilter: 'blur(20px)',
										border:
											'2px solid rgba(255, 193, 7, 0.3)',
										borderRadius: '25px',
										padding: '3rem',
										boxShadow:
											'0 20px 60px rgba(255, 193, 7, 0.15)',
										position: 'relative',
										overflow: 'hidden',
									}}
								>
									{/* Decorative elements */}
									<div
										style={{
											position: 'absolute',
											top: '-50px',
											right: '-50px',
											width: '150px',
											height: '150px',
											background:
												'radial-gradient(circle, rgba(255, 193, 7, 0.2), transparent)',
											borderRadius: '50%',
										}}
									></div>

									<div
										style={{
											position: 'absolute',
											bottom: '-30px',
											left: '-30px',
											width: '100px',
											height: '100px',
											background:
												'radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent)',
											borderRadius: '50%',
										}}
									></div>

									<Row
										className="align-items-center"
										style={{
											position: 'relative',
											zIndex: 2,
										}}
									>
										<Col
											md={6}
											className="mb-4 mb-md-0"
										>
											<div
												style={{
													background:
														'rgba(255, 193, 7, 0.3)',
													color: '#000000',
													padding: '0.6rem 1.5rem',
													borderRadius: '20px',
													display: 'inline-block',
													fontSize: '0.9rem',
													fontWeight: '700',
													marginBottom: '2rem',
													textTransform: 'uppercase',
													letterSpacing: '1px',
												}}
											>
												✨ Featured Event
											</div>

											<h3
												style={{
													fontSize: '2.5rem',
													fontWeight: '600',
													color: '#ffc107',
													marginBottom: '1.5rem',
													lineHeight: '1.2',
												}}
											>
												{eventEntries[0][1].title}
											</h3>

											<p
												style={{
													fontSize: '1.2rem',
													color: 'rgba(255, 255, 255, 0.9)',
													lineHeight: '1.7',
													marginBottom: '2.5rem',
												}}
											>
												{eventEntries[0][1].body.substring(
													0,
													200
												)}
												...
											</p>

											<Link
												to={`/events/${eventEntries[0][0]}`}
												style={{
													background:
														'linear-gradient(135deg, #ffc107, #ffb300)',
													color: '#000000',
													padding: '1.3rem 2.8rem',
													textDecoration: 'none',
													fontSize: '1.1rem',
													fontWeight: '600',
													borderRadius: '25px',
													transition: 'all 0.3s ease',
													boxShadow:
														'0 8px 25px rgba(255, 193, 7, 0.4)',
													display: 'inline-block',
													textTransform: 'uppercase',
													letterSpacing: '0.5px',
												}}
												onMouseEnter={(e) => {
													e.target.style.transform =
														'translateY(-3px) scale(1.02)'
													e.target.style.boxShadow =
														'0 12px 35px rgba(255, 193, 7, 0.5)'
												}}
												onMouseLeave={(e) => {
													e.target.style.transform =
														'translateY(0) scale(1)'
													e.target.style.boxShadow =
														'0 8px 25px rgba(255, 193, 7, 0.4)'
												}}
											>
												🎯 Discover More
											</Link>
										</Col>

										<Col md={6}>
											<div
												style={{
													position: 'relative',
													textAlign: 'center',
												}}
											>
												<Image
													src={eventEntries[0][1].image}
													style={{
														width: '100%',
														maxWidth: '400px',
														height: '320px',
														objectFit: 'cover',
														borderRadius: '20px',
														border:
															'3px solid rgba(255, 193, 7, 0.4)',
														boxShadow:
															'0 15px 40px rgba(255, 193, 7, 0.3)',
													}}
												/>

												{/* Image badge */}
												<div
													style={{
														position: 'absolute',
														top: '15px',
														left: '15px',
														background:
															'rgba(0, 0, 0, 0.85)',
														color: '#ffc107',
														padding: '0.6rem 1rem',
														borderRadius: '12px',
														fontSize: '0.85rem',
														fontWeight: '600',
														zIndex: 3,
														backdropFilter: 'blur(5px)',
														border:
															'1px solid rgba(255, 193, 7, 0.3)',
													}}
												>
													🔥 Latest Event
												</div>
											</div>
										</Col>
									</Row>
								</div>
							</Col>
						</Row>
					)}

					{/* Recent Events Grid */}
					{eventEntries.length > 1 && (
						<Row className="g-4 mb-5">
							{eventEntries
								.slice(1, 5)
								.map(([key, event], index) => {
									const colors = [
										{
											primary: '#ffc107',
											secondary: 'rgba(255, 193, 7, 0.1)',
											border: 'rgba(255, 193, 7, 0.2)',
										},
										{
											primary: '#44bdff',
											secondary: 'rgba(68, 189, 240, 0.1)',
											border: 'rgba(68, 189, 240, 0.2)',
										},
										{
											primary: '#4caf50',
											secondary: 'rgba(76, 175, 80, 0.1)',
											border: 'rgba(76, 175, 80, 0.2)',
										},
										{
											primary: '#9c27b0',
											secondary: 'rgba(156, 39, 176, 0.1)',
											border: 'rgba(156, 39, 176, 0.2)',
										},
									]
									const colorScheme = colors[index % 4]

									return (
										<Col
											key={key}
											xs={12}
											sm={6}
											lg={3}
											className="d-flex"
										>
											<Link
												to={`/events/${key}`}
												style={{
													textDecoration: 'none',
													color: 'inherit',
													width: '100%',
												}}
											>
												<div
													style={{
														background: `linear-gradient(135deg, ${colorScheme.secondary}, rgba(255, 255, 255, 0.02))`,
														backdropFilter: 'blur(15px)',
														border: `1px solid ${colorScheme.border}`,
														borderRadius: '20px',
														padding: '1.5rem',
														transition: 'all 0.3s ease',
														cursor: 'pointer',
														height: '100%',
														position: 'relative',
														overflow: 'hidden',
														display: 'flex',
														flexDirection: 'column',
													}}
													onMouseEnter={(e) => {
														e.currentTarget.style.transform =
															'translateY(-8px)'
														e.currentTarget.style.boxShadow = `0 20px 40px ${colorScheme.border}`
													}}
													onMouseLeave={(e) => {
														e.currentTarget.style.transform =
															'translateY(0)'
														e.currentTarget.style.boxShadow =
															'none'
													}}
												>
													{/* Number badge */}
													<div
														style={{
															position: 'absolute',
															top: '15px',
															right: '15px',
															width: '32px',
															height: '32px',
															background:
																colorScheme.primary,
															borderRadius: '50%',
															display: 'flex',
															alignItems: 'center',
															justifyContent: 'center',
															color: '#ffffff',
															fontSize: '0.85rem',
															fontWeight: 'bold',
															zIndex: 2,
														}}
													>
														{index + 2}
													</div>

													{/* Event Image */}
													<div
														style={{
															width: '100%',
															height: '180px',
															marginBottom: '1.5rem',
															borderRadius: '12px',
															overflow: 'hidden',
															border: `2px solid ${colorScheme.border}`,
														}}
													>
														<Image
															src={event.image}
															style={{
																width: '100%',
																height: '100%',
																objectFit: 'cover',
															}}
														/>
													</div>

													{/* Event Content */}
													<div
														style={{
															flex: 1,
															display: 'flex',
															flexDirection: 'column',
														}}
													>
														<h4
															style={{
																fontSize: '1.2rem',
																fontWeight: '600',
																color: colorScheme.primary,
																marginBottom: '1rem',
																lineHeight: '1.3',
															}}
														>
															{event.title}
														</h4>

														<p
															style={{
																fontSize: '0.9rem',
																color:
																	'rgba(255, 255, 255, 0.8)',
																lineHeight: '1.5',
																marginBottom: '1.5rem',
																flex: 1,
															}}
														>
															{event.body.substring(0, 100)}
															...
														</p>

														{/* Action indicator */}
														<div
															style={{
																display: 'flex',
																alignItems: 'center',
																justifyContent:
																	'space-between',
																marginTop: 'auto',
															}}
														>
															<span
																style={{
																	color:
																		colorScheme.primary,
																	fontSize: '0.9rem',
																	fontWeight: '500',
																}}
															>
																Read more
															</span>
															<span
																style={{
																	color:
																		colorScheme.primary,
																	fontSize: '1.2rem',
																	transition:
																		'transform 0.2s ease',
																}}
															>
																→
															</span>
														</div>
													</div>
												</div>
											</Link>
										</Col>
									)
								})}
						</Row>
					)}

					{/* View All Events CTA */}
					<Row>
						<Col xs={12}>
							<div
								style={{
									textAlign: 'center',
									padding: '3rem',
									background:
										'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 193, 7, 0.03))',
									backdropFilter: 'blur(10px)',
									borderRadius: '20px',
									border:
										'1px solid rgba(255, 193, 7, 0.2)',
								}}
							>
								<div
									style={{
										fontSize: '2.5rem',
										marginBottom: '1rem',
									}}
								>
									🎉
								</div>
								<h3
									style={{
										fontSize: '2rem',
										fontWeight: '500',
										color: '#ffc107',
										marginBottom: '1rem',
									}}
								>
									Want to see all our events?
								</h3>
								<p
									style={{
										fontSize: '1.2rem',
										color: 'rgba(255, 255, 255, 0.8)',
										marginBottom: '2.5rem',
										maxWidth: '500px',
										margin: '0 auto 2.5rem auto',
									}}
								>
									From study sessions to cultural
									celebrations, there's always something
									exciting happening!
								</p>
								<Link
									to="/events"
									style={{
										background:
											'linear-gradient(135deg, rgba(255, 193, 7, 0.2), rgba(255, 193, 7, 0.1))',
										color: '#ffc107',
										padding: '1.3rem 3rem',
										textDecoration: 'none',
										fontSize: '1.1rem',
										fontWeight: '600',
										border:
											'2px solid rgba(255, 193, 7, 0.4)',
										borderRadius: '25px',
										transition: 'all 0.3s ease',
										backdropFilter: 'blur(10px)',
										display: 'inline-block',
										textTransform: 'uppercase',
										letterSpacing: '0.5px',
									}}
									onMouseEnter={(e) => {
										e.target.style.background =
											'linear-gradient(135deg, rgba(255, 193, 7, 0.4), rgba(255, 193, 7, 0.2))'
										e.target.style.borderColor = '#ffc107'
										e.target.style.color = '#ffffff'
										e.target.style.transform =
											'translateY(-3px)'
									}}
									onMouseLeave={(e) => {
										e.target.style.background =
											'linear-gradient(135deg, rgba(255, 193, 7, 0.2), rgba(255, 193, 7, 0.1))'
										e.target.style.borderColor =
											'rgba(255, 193, 7, 0.4)'
										e.target.style.color = '#ffc107'
										e.target.style.transform =
											'translateY(0)'
									}}
								>
									📅 Explore All Events
								</Link>
							</div>
						</Col>
					</Row>
				</Container>
			</div>

			{/* Join Community Section */}
			<div
				id="community-section"
				style={{
					background:
						'linear-gradient(135deg, #2c5530 0%, #3e7b3e 50%, #4a8c4a 100%)',
					padding: '6rem 0',
					position: 'relative',
					overflow: 'hidden',
					opacity: isVisible.community ? 1 : 0,
					transform: `translateY(${
						isVisible.community ? 0 : 50
					}px)`,
					transition: 'all 1s ease-out 0.4s',
				}}
			>
				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundImage:
							'radial-gradient(circle at 20% 20%, rgba(255, 193, 7, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 193, 7, 0.1) 0%, transparent 50%)',
						pointerEvents: 'none',
					}}
				></div>

				<Container
					style={{ position: 'relative', zIndex: 2 }}
				>
					<Row>
						<Col
							xs={12}
							className="text-center"
						>
							<div
								style={{
									fontSize: '3rem',
									marginBottom: '1rem',
								}}
							>
								🎉
							</div>
							<h2
								style={{
									fontSize: '2.5rem',
									fontWeight: '300',
									color: '#ffffff',
									marginBottom: '1rem',
								}}
							>
								Ready to Join Our Family?
							</h2>
							<p
								style={{
									fontSize: '1.2rem',
									color: 'rgba(255, 255, 255, 0.9)',
									marginBottom: '3rem',
									maxWidth: '500px',
									margin: '0 auto 3rem auto',
								}}
							>
								Come be part of something special! We can't
								wait to meet you 😊
							</p>

							<div
								style={{
									display: 'flex',
									justifyContent: 'center',
									gap: '2rem',
									flexWrap: 'wrap',
								}}
							>
								<a
									href="https://docs.google.com/forms/d/e/1FAIpQLSfdQ4XeScWBXzZ4_1igpsrxI94-xP-f10VRN46iSHfsWJuQnw/viewform"
									target="_blank"
									rel="noopener noreferrer"
									style={{
										background:
											'linear-gradient(135deg, #ffc107, #ffb300)',
										color: '#000000',
										padding: '1.2rem 2.5rem',
										textDecoration: 'none',
										fontWeight: '500',
										fontSize: '1.1rem',
										borderRadius: '25px',
										transition: 'all 0.2s ease',
										boxShadow:
											'0 4px 15px rgba(255, 193, 7, 0.3)',
										border:
											'2px solid rgba(255, 255, 255, 0.2)',
									}}
									onMouseEnter={(e) => {
										e.target.style.transform =
											'translateY(-2px)'
										e.target.style.boxShadow =
											'0 6px 20px rgba(255, 193, 7, 0.4)'
									}}
									onMouseLeave={(e) => {
										e.target.style.transform =
											'translateY(0)'
										e.target.style.boxShadow =
											'0 4px 15px rgba(255, 193, 7, 0.3)'
									}}
								>
									🚀 Join KEB Today!
								</a>

								<Link
									to="/events"
									style={{
										background: 'rgba(255, 255, 255, 0.1)',
										color: '#ffffff',
										padding: '1.2rem 2.5rem',
										textDecoration: 'none',
										fontWeight: '400',
										fontSize: '1.1rem',
										border:
											'2px solid rgba(255, 255, 255, 0.6)',
										borderRadius: '25px',
										transition: 'all 0.2s ease',
										backdropFilter: 'blur(10px)',
									}}
									onMouseEnter={(e) => {
										e.target.style.background =
											'rgba(255, 255, 255, 0.2)'
										e.target.style.borderColor =
											'rgba(255, 255, 255, 0.8)'
										e.target.style.transform =
											'translateY(-2px)'
									}}
									onMouseLeave={(e) => {
										e.target.style.background =
											'rgba(255, 255, 255, 0.1)'
										e.target.style.borderColor =
											'rgba(255, 255, 255, 0.6)'
										e.target.style.transform =
											'translateY(0)'
									}}
								>
									📅 Explore Our Events
								</Link>
							</div>
						</Col>
					</Row>
				</Container>
			</div>

			<style jsx>{`
				@keyframes float {
					0%,
					100% {
						transform: translateY(0px);
					}
					50% {
						transform: translateY(-20px);
					}
				}

				@keyframes bounce {
					0%,
					20%,
					50%,
					80%,
					100% {
						transform: translateY(0);
					}
					40% {
						transform: translateY(-10px);
					}
					60% {
						transform: translateY(-5px);
					}
				}
			`}</style>
		</>
	)
}

export default Home
