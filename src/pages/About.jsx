import React from "react";
import Daniel from "../images/Daniel_Ryu.jpeg";
import Eddie from "../images/Eddie_Kim.jpeg";
import Irene from "../images/Irene_Cho.png";
import Soyeon from "../images/Soyeon_Lee.png";

export default function About() {
  const s = styles;
  return (
    <div style={s.page}>
      <section style={s.panel}>
        <h2 style={s.h2}>About Us</h2>
        <div style={s.grid}>
          <Card title="President Team">
            <p style={s.muted}>
              Leads the club with vision and direction, making sure everything
              runs smoothly and stays true to our goals.
            </p>
            <div style={s.memberList}>
              <MemberCard
                name="Daniel Ryu"
                role="President"
                image={Daniel}
                linkedin="https://www.linkedin.com/in/daniel-ryu-4ba879327/"
              >
                Oversees the club’s vision and ensures smooth operations.
              </MemberCard>
            </div>
          </Card>

          <Card title="Academic Team">
            <p style={s.muted}>
              Responsible for the planning and running of all academic-related
              events such as tutorials and buddy programs.
            </p>
            <div style={s.memberList}>
              <MemberCard
                name="Eddie Kim"
                role="Academic Lead"
                image={Eddie}
                linkedin="https://www.linkedin.com/in/eddiehangyeolkim/"
              >
                Organises tutorials and academic programs for members.
              </MemberCard>
            </div>
          </Card>

          <Card title="Media Team">
            <p style={s.muted}>
              Creates and shares engaging photos, videos, and posts to promote
              events, highlight achievements, and keep KEB members and the wider
              community informed.
            </p>
            <div style={s.memberList}>
              <MemberCard
                name="Irene Cho"
                role="Media Coordinator"
                image={Irene}
                linkedin="https://www.instagram.com/3unhyee/"
              >
                Manages social media and promotional content.
              </MemberCard>
            </div>
          </Card>

          <Card title="Events Team">
            <p style={s.muted}>
              Plans and runs fun, engaging events that bring members together and
              build connections.
            </p>
            <div style={s.memberList}>
              <MemberCard
                name="Soyeon Lee"
                role="Events Coordinator"
                image={Soyeon}
                linkedin="https://www.linkedin.com/in/so-yeon-lee-891b17248/"
              >
                Plans and runs events to build member connections.
              </MemberCard>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

/* --- Reusable Card Components --- */
function Card({ title, children }) {
  const s = styles;
  return (
    <article style={s.card}>
      <h3 style={{ margin: "6px 0" }}>{title}</h3>
      <div>{children}</div> {/* no <p> wrapper */}
    </article>
  );
}

function MemberCard({ name, role, image, linkedin, children }) {
  const s = styles;
  return (
    <div style={s.memberCard}> {/* no border/background */}
      <img src={image} alt={name} style={s.profileImage} />
      <h4 style={s.name}>{name}</h4>
      <p style={s.role}>{role}</p>
      <a href={linkedin} target="_blank" rel="noopener noreferrer" style={s.link}>
        LinkedIn
      </a>
      <p style={s.desc}>{children}</p>
    </div>
  );
}

/* --- Styles --- */
const styles = {
  page: { maxWidth: 1100, margin: "0 auto", padding: 20, color: "#eef2f7" },
  h2: { marginTop: 0, marginBottom: 8, fontSize: 26 },
  panel: {
    padding: 22,
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,.12)",
    background: "linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,0))",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 16,
    marginTop: 8,
  },
  card: {
    padding: 16,
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,.10)",
    background: "linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,0))",
  },
  muted: { color: "#a8b3c7", margin: 0 },
  memberList: {
    marginTop: 12,
    display: "flex",
    flexWrap: "wrap",
    gap: 16,
    alignItems: "flex-start",
  },
  memberCard: {
    textAlign: "center",
    flex: "1 1 160px",
    padding: 0,
    border: "none",
    background: "transparent",
  },
  profileImage: {
    width: 96,
    height: 96,
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: 6,
  },
  name: { fontSize: 16, margin: "2px 0" },
  role: { fontSize: 13, color: "#a8b3c7", margin: "2px 0" },
  link: {
    fontSize: 13,
    color: "#4ea1ff",
    textDecoration: "none",
    marginBottom: 4,
    display: "inline-block",
  },
  desc: { color: "#a8b3c7", fontSize: 13, marginTop: 4 },
};
