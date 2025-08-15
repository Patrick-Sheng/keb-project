import React from 'react'
import { Link } from 'react-router-dom'
import instagramIcon from '../images/footer/instagram.png'
import linktreeIcon from '../images/footer/linktree.png'

const Footer = () => {
	return (
		<footer
			style={{
				background:
					'linear-gradient(135deg, #0b1b34 0%, #1a2d4d 100%)',
				color: '#ffffff',
				padding: '3rem 0 1.5rem 0',
				marginTop: 'auto',
				borderTop: '2px solid #ffc107',
			}}
		>
			<div className="container">
				{/* Main Footer Content */}
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						flexWrap: 'wrap',
						gap: '2rem',
						marginBottom: '2rem',
					}}
				>
					{/* Left Side - Logo & Description */}
					<div style={{ flex: '1', minWidth: '300px' }}>
						<h3
							style={{
								fontSize: '1.5rem',
								fontWeight: '300',
								color: '#ffc107',
								marginBottom: '1rem',
							}}
						>
							Korean Engineering Body
						</h3>
						<p
							style={{
								fontSize: '1rem',
								lineHeight: '1.6',
								color: 'rgba(255, 255, 255, 0.8)',
								marginBottom: '1rem',
								maxWidth: '400px',
							}}
						>
							Supporting Korean engineering students at the
							University of Auckland through academic
							excellence and community connection.
						</p>
					</div>

					{/* Center - Navigation */}
					<div
						style={{
							display: 'flex',
							gap: '2rem',
							alignItems: 'center',
						}}
					>
						<Link
							to="/"
							style={{
								color: 'rgba(255, 255, 255, 0.8)',
								textDecoration: 'none',
								fontSize: '1rem',
								transition: 'color 0.2s ease',
							}}
							onMouseEnter={(e) =>
								(e.target.style.color = '#ffc107')
							}
							onMouseLeave={(e) =>
								(e.target.style.color =
									'rgba(255, 255, 255, 0.8)')
							}
						>
							Home
						</Link>
						<Link
							to="/about"
							style={{
								color: 'rgba(255, 255, 255, 0.8)',
								textDecoration: 'none',
								fontSize: '1rem',
								transition: 'color 0.2s ease',
							}}
							onMouseEnter={(e) =>
								(e.target.style.color = '#ffc107')
							}
							onMouseLeave={(e) =>
								(e.target.style.color =
									'rgba(255, 255, 255, 0.8)')
							}
						>
							About Us
						</Link>
						<Link
							to="/events"
							style={{
								color: 'rgba(255, 255, 255, 0.8)',
								textDecoration: 'none',
								fontSize: '1rem',
								transition: 'color 0.2s ease',
							}}
							onMouseEnter={(e) =>
								(e.target.style.color = '#ffc107')
							}
							onMouseLeave={(e) =>
								(e.target.style.color =
									'rgba(255, 255, 255, 0.8)')
							}
						>
							Events
						</Link>
					</div>

					{/* Right Side - Social & CTA */}
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '1.5rem',
						}}
					>
						<a
							href="https://www.instagram.com/uoa.keb/"
							target="_blank"
							rel="noopener noreferrer"
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								width: '40px',
								height: '40px',
								background: 'rgba(255, 193, 7, 0.1)',
								borderRadius: '8px',
								transition: 'all 0.2s ease',
							}}
							onMouseEnter={(e) =>
								(e.target.style.background =
									'rgba(255, 193, 7, 0.2)')
							}
							onMouseLeave={(e) =>
								(e.target.style.background =
									'rgba(255, 193, 7, 0.1)')
							}
						>
							<img
								src={instagramIcon}
								alt="Instagram"
								style={{ width: '24px', height: '24px' }}
							/>
						</a>
						<a
							href="https://linktr.ee/kebuoa"
							target="_blank"
							rel="noopener noreferrer"
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								width: '40px',
								height: '40px',
								background: 'rgba(255, 193, 7, 0.1)',
								borderRadius: '8px',
								transition: 'all 0.2s ease',
							}}
							onMouseEnter={(e) =>
								(e.target.style.background =
									'rgba(255, 193, 7, 0.2)')
							}
							onMouseLeave={(e) =>
								(e.target.style.background =
									'rgba(255, 193, 7, 0.1)')
							}
						>
							<img
								src={linktreeIcon}
								alt="Linktree"
								style={{ width: '24px', height: '24px' }}
							/>
						</a>

						<a
							href="https://docs.google.com/forms/d/e/1FAIpQLSfdQ4XeScWBXzZ4_1igpsrxI94-xP-f10VRN46iSHfsWJuQnw/viewform"
							target="_blank"
							rel="noopener noreferrer"
							style={{
								background: '#ffc107',
								color: '#000000',
								padding: '0.8rem 1.5rem',
								textDecoration: 'none',
								fontSize: '0.9rem',
								fontWeight: '500',
								borderRadius: '5px',
								transition: 'all 0.2s ease',
							}}
							onMouseEnter={(e) => {
								e.target.style.background = '#ffb300'
								e.target.style.transform =
									'translateY(-1px)'
							}}
							onMouseLeave={(e) => {
								e.target.style.background = '#ffc107'
								e.target.style.transform = 'translateY(0)'
							}}
						>
							Join KEB
						</a>
					</div>
				</div>

				{/* Footer Bottom */}
				<div
					style={{
						borderTop: '1px solid rgba(255, 255, 255, 0.1)',
						paddingTop: '1.5rem',
						textAlign: 'center',
					}}
				>
					<p
						style={{
							fontSize: '0.9rem',
							color: 'rgba(255, 255, 255, 0.6)',
							margin: '0',
						}}
					>
						© 2025 Korean Engineering Body - University of
						Auckland
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
