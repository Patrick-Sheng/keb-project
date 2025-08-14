import React from "react";

export default function About() {
  const s = styles;
  return (
    <div style={s.page}>
      <section style={s.panel}>
        <h2 style={s.h2}>About Us</h2>
        <div style={s.grid}>
          <Card title="President Team">
            Leads the club with vision and direction, making sure everything
            runs smoothly and stays true to our goals.
          </Card>
          <Card title="Academic Team">
            Responsible for the planning and running of all academic-related
            events such as tutorials and buddy programs.
          </Card>
          <Card title="Media Team">
            Creates and shares engaging photos, videos, and posts to promote
            events, highlight achievements, and keep KEB members and the wider
            community informed.
          </Card>
          <Card title="Events Team">
            Plans and runs fun, engaging events that bring members together and
            build connections.
          </Card>
        </div>
      </section>
    </div>
  );
}

function Card({ title, children }) {
  const s = styles;
  return (
    <article style={s.card}>
      <h3 style={{ margin: "6px 0" }}>{title}</h3>
      <p style={{ color: "#a8b3c7", margin: 0 }}>{children}</p>
    </article>
  );
}

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
};