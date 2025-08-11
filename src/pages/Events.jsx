import React from "react";

export default function Events() {
  const s = styles;
  return (
    <div style={s.page}>
      <section style={s.panel}>
        <h2 style={s.h2}>Events</h2>

        <EventItem title="(Current) PROJECT PLAYGROUND">
          Work with students from different engineering backgrounds, build
          something awesome, and gain real experience for your CV.
        </EventItem>

        <EventItem title="(Current) TUTORIAL for First Years">
          We run tutorials to support first year students as they start their
          journey at university. Our sessions are a friendly space to ask
          questions, learn new skills, and connect with peers. For Semester 2,
          you can join <strong>ELECTENG 101</strong>, <strong>ENGGEN 131</strong> and{" "}
          <strong>CHEMMAT 121</strong>.
        </EventItem>

        <EventItem title="(Current) BUDDY system">
          Our Buddy System pairs first year students with experienced second
          year or higher peers. It’s a relaxed, friendly way to get guidance,
          ask questions, and have someone to turn to as you navigate your first
          year—whether it’s about studies, campus life, or just finding your feet.
        </EventItem>

        <EventItem title="(Upcoming) First Years SEMINAR">
          Our First-Year Seminar invites senior and graduate engineering
          students to share their experiences, specialisations, and career
          journeys. Explore different fields of engineering, gain real-world
          insights, and be inspired for your own future paths.
        </EventItem>
      </section>
    </div>
  );
}

function EventItem({ title, children }) {
  const s = styles;
  return (
    <article style={s.event}>
      <h3 style={{ margin: "0 0 6px" }}>{title}</h3>
      <p style={{ color: "#a8b3c7", margin: 0 }}>{children}</p>
    </article>
  );
}

const styles = {
  page: { maxWidth: 1100, margin: "0 auto", padding: 20, color: "#eef2f7" },
  h2: { marginTop: 0, fontSize: 26 },
  panel: {
    padding: 22,
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,.12)",
    background: "linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,0))",
  },
  event: {
    padding: 16,
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,.10)",
    background: "linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,0))",
    marginBottom: 12,
  },
};
