import React from 'react'
import Daniel from '../images/Daniel_Ryu.jpeg'
import Eddie from '../images/Eddie_Kim.jpeg'
import Irene from '../images/Irene_Cho.png'
import Soyeon from '../images/Soyeon_Lee.png'

export default function About() {
	const s = styles
	return (
		<div style={s.page}>
			<section style={s.panel}>
				<div style={s.header}>
					<h2 style={s.h2}>About Us</h2>
					<p style={s.subtitle}>
						Meet the team that makes it all happen
					</p>
				</div>
				<div style={s.grid}>
					<Card
						title="President Team"
						icon="👑"
						description="Leads the club with vision and direction, making sure everything runs smoothly and stays true to our goals."
						name="Daniel Ryu"
						role="President"
						image={Daniel}
						linkedin="https://www.linkedin.com/in/daniel-ryu-4ba879327/"
						memberDesc="Oversees the club's vision and ensures smooth operations."
					/>

					<Card
						title="Academic Team"
						icon="📚"
						description="Responsible for the planning and running of all academic-related events such as tutorials and buddy programs."
						name="Eddie Kim"
						role="Academic Lead"
						image={Eddie}
						linkedin="https://www.linkedin.com/in/eddiehangyeolkim/"
						memberDesc="Organises tutorials and academic programs for members."
					/>

					<Card
						title="Media Team"
						icon="📱"
						description="Creates and shares engaging photos, videos, and posts to promote events, highlight achievements, and keep KEB members and the wider community informed."
						name="Irene Cho"
						role="Media Coordinator"
						image={Irene}
						linkedin="https://www.instagram.com/3unhyee/"
						memberDesc="Manages social media and promotional content."
					/>

					<Card
						title="Events Team"
						icon="🎉"
						description="Plans and runs fun, engaging events that bring members together and build connections."
						name="Soyeon Lee"
						role="Events Coordinator"
						image={Soyeon}
						linkedin="https://www.linkedin.com/in/so-yeon-lee-891b17248/"
						memberDesc="Plans and runs events to build member connections."
					/>
				</div>
			</section>
		</div>
	)
}

/* --- Reusable Card Component --- */
function Card({
	title,
	icon,
	description,
	name,
	role,
	image,
	linkedin,
	memberDesc,
}) {
	const s = styles
	return (
		<article style={s.card}>
			<div style={s.cardHeader}>
				<span style={s.icon}>{icon}</span>
				<h3 style={s.cardTitle}>{title}</h3>
			</div>

			<p style={s.description}>{description}</p>

			<div style={s.memberSection}>
				<img
					src={image}
					alt={name}
					style={s.profileImage}
				/>
				<div style={s.memberInfo}>
					<h4 style={s.name}>{name}</h4>
					<p style={s.role}>{role}</p>
					<a
						href={linkedin}
						target="_blank"
						rel="noopener noreferrer"
						style={s.link}
					>
						{linkedin.includes('linkedin')
							? 'LinkedIn'
							: 'Instagram'}{' '}
						→
					</a>
					<p style={s.memberDesc}>{memberDesc}</p>
				</div>
			</div>
		</article>
	)
}

/* --- Styles --- */
const styles = {
	page: {
		maxWidth: 1200,
		margin: '0 auto',
		padding: 24,
		color: '#eef2f7',
		background:
			'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
		minHeight: '100vh',
	},
	header: {
		textAlign: 'center',
		marginBottom: 32,
	},
	h2: {
		marginTop: 0,
		marginBottom: 8,
		fontSize: 32,
		fontWeight: 700,
		background:
			'linear-gradient(135deg, #60a5fa 0%, #a855f7 100%)',
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent',
		backgroundClip: 'text',
	},
	subtitle: {
		fontSize: 16,
		color: '#94a3b8',
		margin: 0,
	},
	panel: {
		padding: 32,
		borderRadius: 24,
		border: '1px solid rgba(255,255,255,.08)',
		background:
			'linear-gradient(135deg, rgba(255,255,255,.06), rgba(255,255,255,.02))',
		backdropFilter: 'blur(20px)',
		boxShadow: '0 20px 40px rgba(0,0,0,.3)',
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: 'repeat(2, 1fr)',
		gap: 20,
		alignItems: 'stretch',
	},
	card: {
		padding: 24,
		borderRadius: 20,
		border: '1px solid rgba(255,255,255,.08)',
		background:
			'linear-gradient(135deg, rgba(255,255,255,.04), rgba(255,255,255,.01))',
		backdropFilter: 'blur(10px)',
		transition: 'all 0.3s ease',
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		cursor: 'pointer',
		':hover': {
			transform: 'translateY(-4px)',
			boxShadow: '0 12px 32px rgba(0,0,0,.2)',
		},
	},
	cardHeader: {
		display: 'flex',
		alignItems: 'center',
		gap: 12,
		marginBottom: 16,
		paddingBottom: 16,
		borderBottom: '1px solid rgba(255,255,255,.06)',
	},
	icon: {
		fontSize: 24,
		padding: '8px',
		borderRadius: '12px',
		background:
			'linear-gradient(135deg, rgba(96,165,250,.2), rgba(168,85,247,.2))',
	},
	cardTitle: {
		fontSize: 18,
		fontWeight: 600,
		margin: 0,
		color: '#f1f5f9',
	},
	description: {
		color: '#94a3b8',
		margin: '0 0 24px 0',
		lineHeight: 1.5,
		flex: 1,
	},
	memberSection: {
		display: 'flex',
		alignItems: 'flex-start',
		gap: 16,
		marginTop: 'auto',
	},
	profileImage: {
		width: 64,
		height: 64,
		borderRadius: '50%',
		objectFit: 'cover',
		border: '2px solid rgba(96,165,250,.3)',
		boxShadow: '0 4px 12px rgba(0,0,0,.2)',
		flexShrink: 0,
	},
	memberInfo: {
		flex: 1,
	},
	name: {
		fontSize: 16,
		fontWeight: 600,
		margin: '0 0 4px 0',
		color: '#f1f5f9',
	},
	role: {
		fontSize: 13,
		color: '#60a5fa',
		margin: '0 0 8px 0',
		fontWeight: 500,
	},
	link: {
		fontSize: 13,
		color: '#a855f7',
		textDecoration: 'none',
		marginBottom: 8,
		display: 'inline-block',
		fontWeight: 500,
		transition: 'color 0.2s ease',
		':hover': {
			color: '#c084fc',
		},
	},
	memberDesc: {
		color: '#94a3b8',
		fontSize: 13,
		margin: 0,
		lineHeight: 1.4,
	},
}
